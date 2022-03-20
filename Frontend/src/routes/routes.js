import React from 'react';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Account = React.lazy(() => import('../pages/Account'));
const Calculator = React.lazy(() => import('../pages/Calculator'));

const frontRoutes = [
  { path: '/', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/Account', name: 'Account', component: Account, exact: true },
  { path: '/Calculator', name: 'Calculator', component: Calculator, exact: true },
];

const adminRoutes = [
];

export { frontRoutes, adminRoutes };
