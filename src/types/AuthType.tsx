/*
Response body
{
  "status": true,
  "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWM4NzAxIiwiaWF0IjoxNzgwMzg0ODA2LCJleHAiOjE3ODA5ODk2MDZ9.PlBziLdUgZGyiMtkGA9O2Kt7NgJJxQeH08tStnOd4Z0",
  "code": 200,
  "object": {
    "id": "vic8701",
    "email": "hanbe7220@gmail.com",
    "credit": 0
  }
}
*/

export interface AuthType {
    status: boolean;
    jwt: string;
    code: number;
    object: {
        id: string;
        email: string;
        credit: number;
    }
}