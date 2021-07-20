import { Employee } from "./employee";

export type Organization = {
  id: number;
  name: string;
  users: Employee[] | [];
  organizations: Organization[] | [];
};
