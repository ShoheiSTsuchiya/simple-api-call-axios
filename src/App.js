import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
             {/* Added <br /> to display email on a new line */}
            <br /> Email: {user.email}
             {/* Added <br /> to display city on a new line */}
            <br /> City: {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersComponent;
