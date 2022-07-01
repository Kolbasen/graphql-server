const newProductSubscribe = (_parent, _args, context) => context.pubsub.subscribe('NEW_PRODUCT');

const newProduct = {
    subscribe: newProductSubscribe,
    resolve: payload => payload,
};

module.exports = {
    newProduct,
};
