import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {type Event } from "@/API/types/types"


export const EventCard = ({
  event
}: {
  event: Event
}) => {

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant={'h5'}>
            {event.name}
          </Typography>
          <Typography mt={2}>
            {event.room.name}
          </Typography>
          <Typography variant={'subtitle2'}>
            {event.begin_time} - {event.end_time}
          </Typography>
          <div style={{ width: '100%', height: '4px', }}/>
          <Button href={`/event/${event.id}`}>
            en voir plus
          </Button>
        </div>
      </CardContent>
    </Card>
    )
}
