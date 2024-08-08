import React from 'react';
import Form from './Components/Form';
import './form.css';
import RespondedMessage from './Components/Responded';
import Tables from './Components/Table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './Components/notFound';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Authenticate from './Components/Authentication';
// Layout component for authenticated routes
function AdminLayout() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path='/' element={<PrivateRoute element={<Tables />} />} />
        {/* Add more admin-related routes here if needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
function Login() {
  return (
    <AuthProvider>
      <Routes>
      <Route  path='/' element={<Authenticate />} />
        {/* Add more admin-related routes here if needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route exact path='/' element={<Form />} />
        <Route exact path='/submit' element={<RespondedMessage />} />
        <Route  path='/login/*' element={<Login />} />
        {/* Admin Routes - Protected and Wrapped with AuthProvider */}
        <Route path="/details/*" element={<AdminLayout />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
