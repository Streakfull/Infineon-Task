import Joi from "joi";

const upsertSchema = Joi.object({
  name: Joi.string().required().min(2),
  desciption: Joi.string().required().min(500),
  image_url: Joi.string().optional(),
  foundingDate: Joi.date().timestamp().optional(),
});

export { upsertSchema };
