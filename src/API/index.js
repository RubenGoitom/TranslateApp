const apiKey = process.env.REACT_APP_API_KEY;

export function createHeaders() {
  return {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json",
  };
}
export const handleResponse = () => {};
