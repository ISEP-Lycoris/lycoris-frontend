import axios from 'axios';
import { useEffect, useState } from 'react';


const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get<string>('http://localhost:8080/api/hello')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Response from backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
