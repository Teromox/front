/*
{
  "status": true,
  "id": "string",
  "email": "string",
  "credit": 0,
  "vm": [
    {
      "id": "string",
      "name": "string",
      "username": "string",
      "ssh_port": 0,
      "ip": "string"
    }
  ]
}
*/

import type { VmType } from "./VmType";

export interface UserType {
    status: boolean;
    id: string;
    email: string;
    credit: number;
    vm: VmType[];
}