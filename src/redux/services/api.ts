import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { auth } from '../../../src/config/firebase';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,

    prepareHeaders: async (headers) => {
      // const token = await auth.currentUser?.getIdToken();
      const token = undefined;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
