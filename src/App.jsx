import React from 'react';

// UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <p><strong>{name}</strong></p>
      <p>Email: {email}</p>
    </div>
  );
};

// UserList Component
const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
};

// LoginButton Component
const LoginButton = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* UserList Section */}
      <UserList users={users} />

      <hr style={{ margin: '20px 0' }} /> {/* فاصل بين الجزئين */}

      {/* Login/Logout Buttons Section */}
      <p>Welcome to the website</p>
      <LoginButton isLoggedIn={true} />

      <br />

      <p>Welcome to the website</p>
      <LoginButton isLoggedIn={false} />
    </div>
  );
};

export default App;