import React, { useState } from 'react';
import { UserService } from '../../services/UserService';
import { User } from '../../models/User';

const UserForm: React.FC<{ user?: User; onSave: () => void }> = ({ user, onSave }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData: User = { name, email };

    if (user && user.id) {
      await UserService.updateUser(user.id, userData);
    } else {
      await UserService.createUser(userData);
    }

    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
