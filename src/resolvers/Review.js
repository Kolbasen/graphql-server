const product = (parent, _args, context, _info) =>
    context.prisma.review.
            findUnique({ where: { id: parent.id } })
            .product();

module.exports = {
    product,
};
