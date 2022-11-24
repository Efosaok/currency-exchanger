export const PROXY_API_BASE_URL: string =
  process.env.NODE_ENV === "development" ? "http://localhost:8081" : "";
