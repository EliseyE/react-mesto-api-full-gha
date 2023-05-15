import { API_BASE_URL } from "./constants";

async function responceProcessing(res) {
  const resData = await res.json();

  if(res.ok)
    return {resValues: res, resData: resData};

  return Promise.reject({resValues: res, resData: resData});
};

async function makeRequset(url, method, data, token) {

  const headers = {
    "Content-Type": "application/json",
  };

  if(token !== undefined)
    headers['Authorization'] = `Bearer ${token}`;

  const config = {
    method,
    credentials: 'include',
    headers
  };

  if(data !== undefined)
    config.body = JSON.stringify(data);

  try {
    const res = await fetch(`${API_BASE_URL}${url}`, config);
    const resData = responceProcessing(res);
    return resData;
  } catch (err) {
    return err;
  }
};

export const register = (data) => {
  return makeRequset('/signup', 'POST', data, undefined);
};

export const authorize = (data) => {
  return makeRequset('/signin', 'POST', data, undefined);
};

export const logout = () => {
  return makeRequset('/logout', 'POST', undefined, undefined);
};

// opened token
// export const getContent = (token) => {
//   return makeRequset('/users/me', 'GET', undefined, token);
// };

// cookie token
export const getContent = () => {
  return makeRequset('/users/me', 'GET', undefined, undefined);
};

export const checkTokenAPI = () => {
  return makeRequset('/jwtcheck', 'POST', undefined, undefined);
};
