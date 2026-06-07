/*
{
  "cpu": 0,
  "mem": 0,
  "maxmem": 0,
  "uptime": 0,
  "innerIp": "string",
  "outIp": "string",
  "sshPort": 0,
  "name": "string",
  "username": "string",
  "status": "string"
}
*/

export interface VmInsideType {
    cpu: number;
    mem: number;
    maxmem: number;
    uptime: number;
    innerIp: string;
    outIp: string;
    sshPort: number;
    name: string;
    username: string;
    status: string;
}