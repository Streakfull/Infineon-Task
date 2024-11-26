import { Request, Response } from "express";
import paginate, { search } from "../utils/paginate";
import Company from "../db/company";
import { EHttpCodes } from "../types";
import { faker } from "@faker-js/faker";

const index = async (req: Request, res: Response) => {
  const { sort, search: searchQuery, ...rest } = req.query;
  const sortFilters = sort ? JSON.parse(sort as string) : undefined;
  if (searchQuery) {
    const data = await search(Company, searchQuery as string);
    return res.send({ data });
  }
  const { data, meta } = await paginate(Company, {}, rest, sortFilters);
  return res.send({ data, meta });
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const company = await Company.findById(id);
  if (company) return res.send({ company });
  return res.status(EHttpCodes.NOT_FOUND).send();
};

const create = async (req: Request, res: Response) => {
  const { body: companyParams } = req;
  //Hardcoded demo image url
  companyParams.imageUrl = faker.image.url({ width: 640, height: 480 });
  const company = await Company.create(companyParams);
  return res.send({ company });
};

const update = async (req: Request, res: Response) => {
  const { body: companyParams } = req;
  const { id } = req.params;
  const company = await Company.findByIdAndUpdate(id, companyParams, { new: true });
  return res.send({ company });
};

const destroy = async (req: Request, res: Response) => {
  console.log("?");
  const { id } = req.params;
  const company = await Company.findByIdAndDelete(id);
  if (!company) return res.status(EHttpCodes.NOT_FOUND);
  return res.status(EHttpCodes.OK).send();
};

export { index, show, create, update, destroy };
