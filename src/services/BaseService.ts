import { HttpService, IHttpService } from "./Http";

export interface IBaseService {
  readonly apiClient: IHttpService;
}

class BaseService implements IBaseService {
  readonly apiClient: IHttpService;

  get client(): IHttpService {
    return this.apiClient;
  }

  constructor() {
    this.apiClient = HttpService;
  }
}

export default BaseService;
