import { Role } from "@/constants/role";

export interface Registration {
  email: string;
  name: string;
  password: string;
  role: Role | "";
}
