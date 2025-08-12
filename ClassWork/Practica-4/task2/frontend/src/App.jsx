import { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const heandleClick = async () => {
    try {
      const response = await axios.post('/api/save', { name: 'John Doe' });
      setMessage(response.data);
    }
    catch (error) {
      console.error('Error saving data:', error);
      setMessage('Error saving data');
    }
  }
  
  return (
    <div className="App">
      <h1>Frontend this Vite</h1>
      <button onClick={heandleClick}>Send request</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;