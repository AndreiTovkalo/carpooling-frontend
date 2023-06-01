const KEYS = {
  TOKEN: "TOKEN",
};

export const setToken = (token) => {
  localStorage.setItem(KEYS.TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(KEYS.TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(KEYS.TOKEN);
};
