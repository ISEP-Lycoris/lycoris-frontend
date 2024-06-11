import styles from "./index.module.css";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {Container} from "@/components/layout/container";
import {Desktop, Mobile} from "@/components/layout/responsive";
import {Breadcrumbs} from "@mui/material";
import {BasicBreadcrumbs} from "@/components/navigation/breadcrumbs";
import Typography from "@mui/material/Typography";
import {EventCard} from "@/components/business/EventCard";
import {Grid} from "@/components/layout/grid";
import {useEffect, useState} from "react";
import {type Event } from "@/API/types/types"

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
              <Grid>
                <EventCard Date={""} Place={""} Title={""}/>
                <EventCard Date={""} Place={""} Title={""}/>
                <EventCard Date={""} Place={""} Title={""}/>
                <EventCard Date={""} Place={""} Title={""}/>
                <EventCard Date={""} Place={""} Title={""}/>
              </Grid>
            </div>
          </div>
          <div>
            <h1>Liste des événements</h1>
            {events.length === 0 ? (
              <p>Aucun événement trouvé.</p>
            ) : (
              <ul>
                {events.map(event => (
                  <li key={event.id}>
                    <h2>{event.name}</h2>
                    <p>Heure de début: {event.begin_time}</p>
                    <p>Heure de fin: {event.end_time}</p>
                    <p>Durée: {event.duration} minutes</p>
                    <h3>Salle: {event.room.name}</h3>
                    <p>Capacité de la salle: {event.room.roomCapacity}</p>
                    <h3>Activité: {event.activity.name}</h3>
                    <h4>Spectateurs:</h4>
                    <ul>
                      {event.activity.spectators.map(spectator => (
                        <li key={spectator.id}>
                          {spectator.firstName} {spectator.lastName} - Rôle: {spectator.role}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Desktop>

        <Mobile>

        </Mobile>

      </Container>
    </>
  )
}
