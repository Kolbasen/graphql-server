const products = async (_parent, _args, context, _info) => {

    const productList = await context.prisma.product.findMany({
        include: {
            reviews: true,
        },
    });

    return productList;
};

module.exports = {
    products,
};
