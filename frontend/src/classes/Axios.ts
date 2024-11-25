import Axioslib from "axios";
import { ILooseObject } from "../types";

enum ERequestMethods {
  GET = "get",
  DELETE = "delete",
  POST = "post",
  PUT = "put",
}

interface IRequestData {
  body?: ILooseObject;
  params?: ILooseObject;
}
type TResponseTypes = "json" | "arraybuffer" | "blob";

interface ISendAxiosRequest {
  requestData?: IRequestData;
  method?: ERequestMethods;
  responseType?: TResponseTypes;
  useCorsHeaders?: boolean;
}

class Axios {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  public async axiosRequest(config: ISendAxiosRequest) {
    const { requestData = {}, method = ERequestMethods.GET } = config;

    try {
      const { status, data, headers } = await Axioslib({
        method,
        url: this.url,
        data: requestData.body,
        params: requestData.params,

        headers: {
          "Content-Type": "application/json",
        },
      });
      return { status, data, headers };
    } catch (error: any) {
      throw error;
    }
  }
}

export { ERequestMethods };
export default Axios;
