import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuthStore } from './store/auth.ts';
import { useEffect } from 'react';
import Login from './pages/Login';
import ResourceList from './pages/ResourceList';
import ResourceDetail from './pages/ResourceDetail';
import {HashRouter} from "react-router-dom"

export default function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true }); // Clears history so user can't go back
    }
  }, [isAuthenticated, navigate]);

  return (
    <HashRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      {isAuthenticated ? (
        <>
          <Route path="/resources" element={<ResourceList />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
    </HashRouter>
  );
}
