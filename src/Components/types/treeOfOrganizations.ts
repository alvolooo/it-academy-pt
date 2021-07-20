import { Organization } from "./organization";
import { Employee } from "./employee";

export type TreeOfOrganizations = {
  id: number;
  name: string;
  organizations: Organization[];
  users?: Employee[];
};
