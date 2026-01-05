export interface SessionUser {
  id: number;
  username: string;
  role?: string;
}
export const useSession = () => {
  const USER_KEY = "user";
  const setUser = (user: SessionUser) => {
    if (import.meta.client)
      localStorage.setItem("USER_Key", JSON.stringify(user));
  };
  const getUser = (): SessionUser | null => {
    if (!import.meta.client) return null;
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  };

  return { setUser, getUser };
};
