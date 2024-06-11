import styles from "./index.module.css";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {Container} from "@/components/layout/container";
import {Desktop, Mobile} from "@/components/layout/responsive";
import {Breadcrumbs, Button} from "@mui/material";
import {BasicBreadcrumbs} from "@/components/navigation/breadcrumbs";
import Typography from "@mui/material/Typography";
import {EventCard} from "@/components/business/EventCard";
import {Grid} from "@/components/layout/grid";
import {useEffect, useState} from "react";
import {type Event } from "@/API/types/types"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/events');
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchEvents();
  }, []);

  console.log('Events : ', events)
  return (
    <>
      <Container>

        <Desktop>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <div>
              <BasicBreadcrumbs>
                <Typography color="text.primary">Evenements</Typography>
              </BasicBreadcrumbs>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', paddingTop: '36px', }}>
              {events.length === 0 ? (
                <p>Aucun événement trouvé.</p>
              ) : (
                <Grid>
                  {
                    events.map((event) => (<EventCard key={event.id} event={event}/>))
                  }
                  <AddEventCard/>
                </Grid>
              )}
            </div>
          </div>
        </Desktop>

        <Mobile>

        </Mobile>

      </Container>
    </>
  )
}

export const AddEventCard = () => {

  return <Card>
    <CardContent>
      <div  style={{ display: 'flex', flexDirection: 'column' }}>
        <Button href={'/event/add'}>
          <Typography variant={'h1'}>
            +
          </Typography>
        </Button>
      </div>
    </CardContent>
  </Card>
}
