const { products } = require('./Product');

const Query = {
    products,
    version: () => '1.0',
};

module.exports = Query;
