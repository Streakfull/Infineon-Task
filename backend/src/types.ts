interface ILooseObject {
  [key: string]: any;
}

enum EModelNames {
  COMPANY = "company",
}

enum EHttpCodes {
  OK = 200,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNHANDLED = 500,
}

export { EModelNames, EHttpCodes };
export type { ILooseObject };
