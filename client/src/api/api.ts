import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type RootState = {
  auth: {
    token: string | null;
  };
};

const getBaseUrl = (): string => {
  if (import.meta.env.MODE === 'production') {
    return import.meta.env.VITE_BACKEND_API_BASE_URL_PROD; 
  }
  return import.meta.env.VITE_BACKEND_API_BASE_URL_DEV; 
};

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  prepareHeaders: (headers, { getState }): typeof headers => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
