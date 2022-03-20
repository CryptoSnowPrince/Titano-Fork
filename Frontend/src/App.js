import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import AppLayout from "./layout/AppLayout";
import NotFound from './pages/error/NotFound';

import { frontRoutes } from './routes/routes';

function App() {
  const routes = [...frontRoutes];

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {routes.map((route, idx) => (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact ?? false}
                name={route.name}
                element={<route.component />}
              />
            )
          ))}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
