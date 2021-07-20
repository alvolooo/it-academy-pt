import { ApiAbstract, ApiAbstractInterface } from "./abstract";
import { User, UserCreate } from "../../Components/types/user";
import { TreeOfOrganizations } from "../../Components/types/treeOfOrganizations";

export class ApiUsers extends ApiAbstract<User, UserCreate> {}
export class ApiTreeOfOrg extends ApiAbstract<TreeOfOrganizations, any> {}
