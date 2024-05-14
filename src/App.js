import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskList from './components/Todo/TaskList';


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <TaskList/>}
    </div>
  );
}

export default App;
