const createProduct = async (_parent, args, context) => {
    const createdProduct = await context.prisma.product.create({ data: args.product });
    context.pubsub.publish('NEW_PRODUCT', createdProduct);
    return createdProduct;
};

const createReview = async (_parent, args, context) => {
    const { review: { text, productId } } = args;

    const isProductExists = await context.prisma.product.findFirst({
        where: {
            id: productId,
        },
        select: { id: true },
    }).then(Boolean);

    if (!isProductExists) {
        throw new Error(`Product with id ${productId} does not exist`);
    }

    return context.prisma.review.create({
        data: {
            text,
            product: {
                connect: { id: productId },
            },
        },
    });
};

module.exports = {
    createProduct,
    createReview,
};
