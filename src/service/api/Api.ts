import { ApiAbstract, ApiAbstractInterface } from "./abstract";
import { User, UserCreate } from "../../Components/types/user";

export class ApiUsers extends ApiAbstract<User, UserCreate> {}
