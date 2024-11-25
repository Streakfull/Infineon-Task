import { Request, Response } from "express";
import paginate from "../utils/paginate";
import Company from "../db/company";
import { EHttpCodes } from "../types";

const index = async (req: Request, res: Response) => {
  const { data, meta } = await paginate(Company, {}, req.query);
  console.log("DATA");
  return res.send({ data, meta });
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;
  const company = await Company.findById(id);
  if (company) return res.send({ company });
  return res.status(EHttpCodes.NOT_FOUND);
};

const create = async (req: Request, res: Response) => {
  const { company: companyParams } = req.body;
  const company = await Company.create(companyParams);
  //if !company here
  return res.send({ company });
};

const update = async (req: Request, res: Response) => {
  const { company: companyParams } = req.body;
  const { id } = req.params;
  const company = await Company.findByIdAndUpdate(id, companyParams, { new: true });
  //if !company here
  return res.send({ company });
};

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;
  const company = await Company.findByIdAndDelete(id);
  if (!company) return res.status(EHttpCodes.NOT_FOUND);
  return res.status(EHttpCodes.OK);
};

export { index, show, create, update, destroy };
