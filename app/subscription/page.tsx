'use client'
import withAuth from "@/src/hocs/withAuth/withAuth";
import { Button, Container, Typography } from "@mui/material";
import { styles } from "./styles";
import { SubscriptionCard } from "@/src/components/subscriptionCard";
import { ISubscriptionType } from "@/src/types/interfaces/subscription";
import useUserInfo from "@/src/hooks/auth/useUserInfo";
import { useStartPrimeSubscriptionMutation } from "@/src/redux/services/subscription/subscription";
import { useRouter } from "next/navigation";

export interface IExtendedSubscription extends ISubscriptionType {
  onChoose: () => undefined;
  isLoading?: boolean;
}

function Subscription() {
  const router = useRouter();
  const [ startPrimeSubscription, { isLoading: isPrimeSubscriptionLoading } ] = useStartPrimeSubscriptionMutation();

  const onStartPrimeSubscription = async () => {
    try {
      const res = await startPrimeSubscription(undefined).unwrap();
      router.push(res.url)
    } catch (error) {
      console.error(error);
    }
  }

  const subscriptions: IExtendedSubscription[] = [
    {
      name: 'Basic',
      price: 0,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      onChoose: () => { router.push('/') }
    },
    {
      name: 'Premium',
      price: 20,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      onChoose: () => { onStartPrimeSubscription() },
      isLoading: isPrimeSubscriptionLoading,
    }
  ]



  return (
    <Container sx={styles.container} component="main" maxWidth="xl">
      {
        subscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.name}
            subscription={subscription}
          />
        ))
      }
    </Container>
  )
}


export default withAuth(Subscription)