import { IExtendedSubscription } from '@/app/subscription/page';
import { ISubscriptionType } from '@/src/types/interfaces/subscription';
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { FC } from 'react';

interface Props {
  subscription: IExtendedSubscription
}

export const SubscriptionCard: FC<Props> = ({subscription}) => {
  const { name, price, features, onChoose, isLoading } = subscription;
  return (
    <Card sx={{ minWidth: 275, maxWidth: 345, maxHeight: 380 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Subscription Plan
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        ${price} / month
      </Typography>
      <Typography component={'div'} variant="body2">
        Features:
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        sx={{margin: '0 10px', minWidth: '150px'}} 
        variant="contained" 
        size="small"
        onClick={onChoose}
      >
        {
          isLoading ? <CircularProgress size={20} color="inherit" /> : 'Choose Plan'
        }
      </Button>
    </CardActions>
  </Card>
    );
  };
