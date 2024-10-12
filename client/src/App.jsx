import React from 'react';
import Form from './Components/Organism/Form';
import './form.css';
import RespondedMessage from './Components/Responded';
import Tables from './Components/Organism/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/Organism/notFound';
import PrivateRoute from './Components/PrivateRoute';
import Authenticate from './Components/Organism/Authentication';

// Layout component for authenticated routes
function AdminLayout() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Tables />} />} />
      {/* Add more admin-related routes here if needed */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Login() {
  return (
    <Routes>
      <Route path="/" element={<Authenticate />} />
      {/* Add more login-related routes here if needed */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Form />} />
        <Route path="/submit" element={<RespondedMessage />} />
        <Route path="/login/*" element={<Login />} />
        {/* Admin Routes - Protected and Wrapped with AuthProvider */}
        <Route path="/details/*" element={<AdminLayout />} />
        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
