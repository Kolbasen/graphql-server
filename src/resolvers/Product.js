/*
    parent - This is the return value of the resolver for this field's parent (the resolver for a parent field always executes before the resolvers for that field's children).
    args - This object contains all GraphQL arguments provided for this field.
    context - This object is shared across all resolvers that execute for a particular operation. Use this to share per-operation state, such as authentication information and access to data sources.
    info - This contains information about the execution state of the operation
*/

const products = async (_parent, _args, context, _info) => {

    const foundProducts = await context.prisma.product.findMany();

    return foundProducts;
};

const createProduct = async (_parent, args, context) => context.prisma.product.create({ data: args.product });

module.exports = {
    products,
    createProduct,
};
