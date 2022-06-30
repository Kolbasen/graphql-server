/*
    parent - This is the return value of the resolver for this field's parent (the resolver for a parent field always executes before the resolvers for that field's children).
    args - This object contains all GraphQL arguments provided for this field.
    context - This object is shared across all resolvers that execute for a particular operation. Use this to share per-operation state, such as authentication information and access to data sources.
    info - This contains information about the execution state of the operation
*/

const products = (_parent, _args, _context, _info) => {

    const foundProducts = [
        { id: '1', title: 'Product 1.0', price: 10.9 },
        { id: '2', title: 'Product 2.0', price: 27.9 },
    ];

    return foundProducts;
};

module.exports = {
    products,
};
