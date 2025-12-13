export const useApi = () => {
  const baseURL = "https://fakestoreapi.com/";
  const addUser = (payload: {
    id: number;
    username: string;
    email: string;
    password: string;
  }) => {
    return $fetch(baseURL + "users", {
      method: "POST",
      body: payload,
    });
  };
  const login = (payload: { username: string; password: string }) => {
    return $fetch(baseURL + "auth/login", {
      method: "POST",
      body: payload,
    });
  };
  const addProduct = (payload: {
    id: number;
    title: string;
    price: Number;
    description: string;
    category: string;
    image: string;
  }) => {
    return $fetch(baseURL+'products',{
      method:'POST',
      body:payload
    });
  }
  const getProducts = () => $fetch(baseURL + "products");
  const getProduct = (id: number) => $fetch(baseURL + "products/" + id);

  return {
    getProducts,
    getProduct,
    addUser,
    login,
    addProduct,
  };
};
