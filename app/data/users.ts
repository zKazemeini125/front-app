interface User {
  id: number;
  username: string;
  password: string;
}

export interface CreateUserDto {
  username: string;
  password: string;
}

export const users: User[] = [
  { id: 1, username: "admin", password: "admin" },
  { id: 2, username: "123", password: "123456" },
];

export function findUserByUsername(username: string): User | undefined {
  return users.find(user => user.username === username);
}

export function addUser(user: CreateUserDto): { success: boolean; message: string } {
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

export function loginUser(
  username: string,
  password: string
): boolean {
  const user = findUserByUsername(username);
  return user?.password === password;
}
