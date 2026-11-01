export const validate = (schema) => (req, res, next) => {
  try {
    const validated = schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    if (validated.body) req.body = validated.body;
    next();
  } catch (err) {
    next(err);
  }
};
