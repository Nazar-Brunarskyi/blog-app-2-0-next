import { SUBSCRIPTION_TYPE } from "../enums/subscription";

export interface ISubscriptionType {
  name: string;
  price: number;
  features: string[];
};

export interface ISubscription {
  _id: string;
  stripeSubscriptionId: string;
  customerId: string;
  validUntil: string;
  userId: string;
  type: SUBSCRIPTION_TYPE;
}

