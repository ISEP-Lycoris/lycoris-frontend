import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Event} from "@/API/types/types";
import {Container} from "@/components/layout/container";
import {Desktop, Mobile} from "@/components/layout/responsive";
import {BasicBreadcrumbs} from "@/components/navigation/breadcrumbs";
import Typography from "@mui/material/Typography";
import {Grid} from "@/components/layout/grid";
import {EventCard} from "@/components/business/EventCard";
import {AddEventCard} from "@/pages";
import Link from "@mui/material/Link";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function EventPage() {
  const router = useRouter()
  const { id } = router.query
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:8081/events/${id}`);
        const data: Event = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchEvents();
  }, []);

  console.log('Events : ', event)
  return (
    <>
      <Container>

        <Desktop>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            <div>
              <BasicBreadcrumbs>
                <Link underline="hover" color="inherit" href={'http://localhost:3000'}>
                  Evenements
                </Link>
                <Typography color="text.primary">{event?.name}</Typography>
              </BasicBreadcrumbs>
            </div>
            <h1>{event?.name}</h1>
            {
              event?.activity?.spectators! != undefined ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableCell >
                      <Typography variant={'h5'}>Joueurs</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    {
                      event?.activity.spectators.map(sct => (<TableRow key={sct.id}>
                        <TableCell>
                          <Typography variant={'subtitle2'}>
                            {sct.firstName} {sct.lastName}
                          </Typography>
                        </TableCell>
                      </TableRow>))
                    }
                  </TableBody>

                </Table>
              </TableContainer>
                : (<h4>No players</h4>)
            }
            <div style={{ height: '18px', }}/>

            {
            event?.activity?.animators! != undefined ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableCell >
                      <Typography variant={'h5'}>Animateur</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    {
                      event?.activity.animators.map(an => (<TableRow key={an.id}>
                        <TableCell>
                          <Typography variant={'subtitle2'}>
                            {an.firstName} {an.lastName}
                          </Typography>
                        </TableCell>
                      </TableRow>))
                    }
                  </TableBody>

                </Table>
              </TableContainer>
              : (<h4>No animators</h4>)
          }
          <div style={{ height: '18px', }}/>
          {
            event?.room != undefined ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableCell >
                      <Typography variant={'h5'}>Salle</Typography>
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant={'subtitle2'}>
                          {event.room.name}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>

                </Table>
              </TableContainer>
              : (<h4>No room</h4>)
          }
            <div style={{ height: '18px', }}/>
            {
              event?.duration != undefined ? <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableCell >
                        <Typography variant={'h5'}>Temps</Typography>
                      </TableCell>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography variant={'subtitle2'}>
                            {event.duration} minutes -  de {event.begin_time} à {event.end_time}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>

                  </Table>
                </TableContainer>
                : (<h4>No room</h4>)
            }
          </div>
        </Desktop>

        <Mobile>

        </Mobile>

      </Container>
    </>
  )
}
