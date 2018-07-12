import axios from "axios";
import config from "@/config";

function parseData(response) {
  return response.data;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(
  url,
  options = {
    baseURL: config.apiBaseURL,
    timeout: 5000
  }
) {
  return axios(url, options)
    .then(checkStatus)
    .then(parseData)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
