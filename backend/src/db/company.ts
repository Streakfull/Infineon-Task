import mongoose from "mongoose";
import { EModelNames } from "../types";

const schema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true,
    },

    description: {
      required: true,
      type: String,
      index: "text",
    },

    imageUrl: {
      type: String,
    },
    foundingDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

//schema.plugin(beautifyUnique);

const Company = mongoose.model(EModelNames.COMPANY, schema);

export default Company;
