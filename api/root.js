import axios from 'axios';
import * as devEnv from './root.dev';
import * as prodEnv from './root.prod';

let apis;
let headers;

if (process.env.NODE_ENV === 'production') {
  apis = prodEnv.default;
  headers = {
    'Origin': prodEnv.default.basePostUrl
  }
} else {
  apis = devEnv.default;
}

const baseDomain = apis.baseDomain; // API for products
export const basePostUrl = apis.basePostUrl; // API for post

const rootApi = axios.create({
  baseURL: baseDomain,
  headers: headers
});

export default rootApi;
