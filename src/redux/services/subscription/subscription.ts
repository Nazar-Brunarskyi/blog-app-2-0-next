import { api } from "../api";
import { ICreateUserDto, ICreateUserNameDto } from "@/src/types/DTOs/user";

const subscriptionAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    startPrimeSubscription: builder.mutation<{url: string}, undefined>({
      query: () => ({
        url: 'subscription/start-prime-subscription',
        method: "POST",
      })
    })
  }),
  overrideExisting: false,
});

export const { useStartPrimeSubscriptionMutation } = subscriptionAPI;
