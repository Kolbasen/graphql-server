const reviews = (parent, _args, context, _info) =>
    context.prisma.product.
            findUnique({ where: { id: parent.id } })
            .reviews();

module.exports = {
    reviews,
};
