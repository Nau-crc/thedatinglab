import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import RegisterPage from '../pages/register/RegisterPage';
import LoginPage from '../pages/login/LoginPage'
import Dashboard from '../pages/admin/Dashboard';
import DashboardEvents from '../pages/admin/DashboardEvents';
import DashboardUsers from '../pages/admin/DashboardUsers';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage />
   },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },

  {
    path: '/dashboard',
    element: <Dashboard />
  },

  {
    path: '/dashboard/events',
    element: <DashboardEvents />
  },

  {
    path: '/dashboard/users',
    element: <DashboardUsers />
  }
])

export default router;
