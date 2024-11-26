import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { EHttpCodes, ILooseObject } from "../types";

enum EMongooseCodes {
  DUPLICATE = 11000,
}

interface IDBError {
  code: EMongooseCodes;
  keyPattern: ILooseObject;
}

const handleDBError = (
  error: IDBError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error) return next();

  const { code, keyPattern } = error;
  const field = Object.keys(keyPattern)[0];

  switch (code) {
    case EMongooseCodes.DUPLICATE:
      return res
        .status(EHttpCodes.BAD_REQUEST)
        .send({ message: `${field} already exists` });

    default:
      return res.status(EHttpCodes.UNHANDLED).send("Internal Server Error");
  }
};

export default handleDBError;
