import React, { useState } from 'react';
import UserList from '../components/User/UserList';
import UserForm from '../components/User/UserForm';

const UserPage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSave={handleSave} />
      <UserList key={refresh ? 'refresh' : 'normal'} />
    </div>
  );
};

export default UserPage;
