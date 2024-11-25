interface ILooseObject {
  [key: string]: any;
}

interface IRoute {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
  applyRedirect?: boolean;
}

enum EPageNames {
  HOME = "home",
  COMPANY_PROFILE = "companyProfile",
}

export { EPageNames };
export type { ILooseObject, IRoute };
