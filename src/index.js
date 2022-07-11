import React from 'react';
import App from './App';

// After react 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);