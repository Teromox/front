/*
{
  "vmid": "string",
  "private_key": "string",
  "password": "string",
  "ip": "string",
  "ssh_port": 0
}
*/

export interface CreateVmType {
    vmid: string;
    private_key: string;
    password: string;
    ip: string;
    ssh_port: number;
}