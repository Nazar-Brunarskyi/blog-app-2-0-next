import { IUser } from "@/src/types/interfaces/user";
import { api } from "../api";
import { ICreateUserDto, ICreateUserNameDto } from "@/src/types/DTOs/user";

const attorneyAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserByFirebaseUid: builder.query<IUser, string | undefined>({
      query: () => `user/fb-id`,
      providesTags: ["Current-user"],
    }),
    createUser: builder.mutation<IUser, ICreateUserDto>({
      query: (body) => ({
        url: "user",
        method: "POST",
        body,
      }),
    }),
    checkUserName: builder.mutation<boolean, ICreateUserNameDto>({
      query: (body) => ({
        url: "user/check-user-name",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useCheckUserNameMutation,
  useGetUserByFirebaseUidQuery,
} = attorneyAPI;
