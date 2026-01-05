import type { SessionUser } from "~/composables/Session";
const { setUser } = useSession();
interface User {
  id: number;
  username: string;
  password: string;
}
let Session: SessionUser;
export interface CreateUserDto {
  username: string;
  password: string;
}
export const users: User[] = [
  { id: 1, username: "admin", password: "admin" },
  { id: 2, username: "123", password: "123456" },
];

export function findUserByUsername(username: string): User | undefined {
  return users.find((user) => user.username === username);
}

export function addUser(user: CreateUserDto): {
  success: boolean;
  message: string;
} {
  const exists = findUserByUsername(user.username);

  if (exists) {
    return { success: false, message: "User already exists" };
  }

  users.push({
    id: users.length + 1,
    username: user.username,
    password: user.password,
  });

  return { success: true, message: "User created" };
}
export function setUserSession(username: string | undefined) {
  if (username != undefined) {
    const currentuser = users.find((user) => user.username === username);
    console.log(Session);
    
    if (currentuser) {
      Session.username = currentuser.username;
      Session.id = currentuser.id;
    }
    setUser(Session);
  }
}

export function loginUser(username: string, password: string): boolean {
  const user = findUserByUsername(username);
  return user?.password === password;
}
