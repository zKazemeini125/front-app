export interface User {
  username: string;
  password: string;
}
export const users: User[] = [
  { username: "admin", password: "admin" },
  { username: "123", password: "123456789" },
  { username: "123456789", password: "123456789" },
];
