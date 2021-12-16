import './App.scss';
import React from "react";
import Router from './router';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;

