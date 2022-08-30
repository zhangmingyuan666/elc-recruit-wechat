export const DEFAULT_SHOWLOADING = false;

let BASE_URL = "";
const TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://192.168.123.12:9001/pro";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "sina.com";
} else {
  BASE_URL = "test";
}

export { BASE_URL, TIME_OUT };
