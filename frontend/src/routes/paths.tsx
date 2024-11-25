import { EPageNames } from "../types";

type IPaths = {
  [key in EPageNames]: {
    path: string;
    Component: () => JSX.Element;
  };
};

type TPaths = {
  [key in EPageNames]: {
    path: string;
    Component: () => JSX.Element;
  };
};

const paths: TPaths = {
  [EPageNames.HOME]: { path: "/", Component: () => <div>HI HERE???</div> },
  [EPageNames.COMPANY_PROFILE]: { path: "/profile", Component: () => <div>HI2</div> },
};

export default paths;
