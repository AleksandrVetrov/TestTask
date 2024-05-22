import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export default fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_APP_API_URL}`,
  mode: "cors",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});
