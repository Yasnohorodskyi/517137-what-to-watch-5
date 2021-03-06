import axios from "axios";
import browserHistory from "../../browser-history";
import {AppRoute, HttpCode} from "../../consts";
const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.NOT_FOUND || response.status >= HttpCode.SERVER_ERROR) {
      browserHistory.push(AppRoute.ERROR);
      throw err;
    }

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
