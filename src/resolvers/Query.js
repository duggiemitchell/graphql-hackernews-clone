function feed(root, args, context, info) {
  return context.db.mutation.createink(
    {
      data: {
        url: args.url,
        description: args.description
      }
    },
    info
  );
}

module.exports = {
  feed
};
