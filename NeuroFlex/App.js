import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { UserProvider } from './UserContext'; // Import context

export default function App() {
  // Wrap your app inside UserProvider
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
