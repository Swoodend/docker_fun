import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:9000');
      const users = await res.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(users, null, 2)}</p>
      </header>
    </div>
  );
}

export default App;
