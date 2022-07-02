const products = async (_parent, args, context, _info) => {
    const { filter, skip, take, orderBy } = args;

    const where = filter ? {
        title: filter,
    } : {};

    const productList = await context.prisma.product.findMany({
        where,
        include: {
            reviews: true,
        },
        skip,
        take,
        orderBy,
    });

    const count = await context.prisma.product.count();

    return {
        productList,
        count,
    };
};

module.exports = {
    products,
};
