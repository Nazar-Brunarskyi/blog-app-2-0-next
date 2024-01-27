import { api } from "../api";

const attorneyAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getTestText: builder.query<{text: string}, undefined>({
      query: () => `/test`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTestTextQuery } = attorneyAPI;
