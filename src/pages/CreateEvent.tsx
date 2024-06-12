import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
interface Person {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
}
interface Room {
  id: number;
  name: string;
  roomCapacity: number;
  disponible: boolean;
  ouvertureTime: any;
  fermetureTime: any;
  lastEventEndTime: number;
}
interface Animator {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
}

interface Spectator {
  id: number;
  lastName: string;
  firstName: string;
  role: string;
  firstChoice: string;
  secondChoice: string;
  thirdChoice: string;
}

interface Activity {
  id: number;
  animators: Animator[];
  spectators: Spectator[];
  name: string;
}


const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [time, setTime] = useState<number>(0);
  const [persons, setPersons] = useState<Person[]>([]);
  const [room, setRoom] = React.useState('');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activity, setActivity] = useState('');

 
  useEffect(() => {
    axios.get('http://localhost:8081/activities')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8081/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
  
  useEffect(() => {
    axios.get('http://localhost:8081/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const history = useHistory();
  
    const newEvent = {
      name: title,
      roomId: parseInt(room), // this should be the id of the selected room
      activityId: parseInt(activity), // this should be the id of the selected activity
      duration: time,
      beginTime: null,
      endTime: null
    };
    console.log(newEvent); // for debugging purposes, remove this line before deploying to production
    console.log("room and activity", room, activity); // for debugging purposes, remove this line before deploying to production
    console.log(typeof room, typeof activity, time); // for debugging purposes, remove this line before deploying to productiontivity);
    
  
    axios.post('http://localhost:8081/event', newEvent)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      history.push('/');
  };

return (
  <div className="container">
    <h1>Create New Event</h1>
    <form className="create-event-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Estimated time needed (in minutes):</label>
        <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
      </div>
      <div className="input-group">
        <label>Room:</label>
        <select value={room} onChange={e => {
    console.log("Selected room: ", e.target.value);
    setRoom(e.target.value);
}}>
    {rooms.map((room, index) => (
        <option key={index} value={room.id}>{room.name}</option>
    ))}
</select>
      </div>
      <div className="input-group">
        <label>Activity:</label>
        <select value={activity} onChange={e => setActivity(e.target.value)}>
          {activities.map((activity, index) => (
            <option key={index} value={activity.id}>{activity.name}</option>
          ))}
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
);
};

export default CreateEvent;