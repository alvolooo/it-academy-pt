import { ApiTreeOfOrg, ApiUsers } from "./api/Api";
import { http as httpInstance } from "./api/config";
import { AxiosInstance } from "axios";

interface ApiServiceInterface {
  [key: string]: any;
}

class ApiService implements ApiServiceInterface {
  private users: ApiUsers;
  private treeOfOrg: ApiTreeOfOrg;

  constructor(http: AxiosInstance) {
    this.users = new ApiUsers(http, "users");
    this.treeOfOrg = new ApiTreeOfOrg(http, "tree");
  }
}

export const api = new ApiService(httpInstance);
