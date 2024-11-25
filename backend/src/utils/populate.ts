import { faker } from "@faker-js/faker";
import companies from "./top100";
import dotenv from "dotenv";
import { EModelNames } from "../types";
import Company from "../db/company";
const TOTAL_POPULATE_COMPANIES = 10_000;
import mongoose from "mongoose";
import { randomUUID } from "crypto";

dotenv.config();

const { DB_CONNECTION_STRING } = process.env;

const adjustTop100 = () => {
  return companies.map(company => ({
    ...company,
    imageUrl: faker.image.url({ width: 640, height: 480 }),
    foundingDate: faker.date.past().toISOString(),
  }));
};

const createRandomCompany = () => {
  const company = {
    name: `${faker.company.name()}/uuid:${randomUUID()}`,
    description: faker.lorem.paragraph(5),
    imageUrl: faker.image.url({ width: 640, height: 480 }),
    foundingDate: faker.date.past().toISOString(),
  };

  return company;
};

const populate = async () => {
  const top100Companies = adjustTop100();
  const randomCompanies = faker.helpers.multiple(createRandomCompany, {
    count: TOTAL_POPULATE_COMPANIES - top100Companies.length,
  });

  const allCompanies = [...top100Companies, ...randomCompanies];

  if (!DB_CONNECTION_STRING) throw new Error("DB connection string not valid");
  await mongoose.connect(DB_CONNECTION_STRING);
  await Company.deleteMany({});
  const promises = allCompanies.map(company => Company.create(company));
  await Promise.all(promises);
};

populate();

export default populate;
