import { api } from '../api';
import { EndpointBuilder } from '@reduxjs/toolkit/query/react';

interface Credentials {
  email: string;
  password: string;
}

const authEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  register: builder.mutation<void, Credentials>({
    query: (credentials) => ({
      url: '/auth/register',
      method: 'POST',
      body: credentials,
    }),
  }),
});

export const authApi = api.injectEndpoints({
  endpoints: authEndpoints,
  overrideExisting: false, 
});

export const { useRegisterMutation } = authApi;
