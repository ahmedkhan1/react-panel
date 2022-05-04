import DashboardLayout from '../components/DashboardLayout';
import AbsenteesList from '../components/Absentees/AbsenteesList';
import NotFound from '../views/NotFound';

const routes = () => [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/absentees', element: <AbsenteesList /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
