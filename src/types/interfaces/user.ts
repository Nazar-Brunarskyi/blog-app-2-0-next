import { ISubscription } from "./subscription";

export interface IUser {
  userName: string;
  firebaseId: string;
  email: string;
  subscription: ISubscription;
}
