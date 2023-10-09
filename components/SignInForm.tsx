"use client"
import { useState } from 'react';

export default function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    // Perform authentication logic here, e.g., make an API request to verify the credentials.
    // For simplicity, we'll just log the entered credentials for demonstration purposes.
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}
