// src/authenticate

import cookie from 'js-cookie';
import redirect from './Redirect';

const getCookieFromBrowser = key => {
  cookie.get(key)
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const getCookie = (key, req) => (
  process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req)
);

export const checkJwt = ctx => {
  const jwt = getCookie('jwt', ctx.req)
  return !!jwt
};

export const isAuthenticated = (ctx) => {
  
  if (checkJwt(ctx)) {
    return true;
  }
  return false;
};


