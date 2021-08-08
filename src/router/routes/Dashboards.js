import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  // {
  //   path: '/dashboard/analytics',
  //   component: lazy(() => import('../../views/dashboard/analytics'))
  // },
  // {
  //   path: '/dashboard/ecommerce',
  //   component: lazy(() => import('../../views/dashboard/ecommerce')),
  //   exact: true
  // },
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/MainDashboard/MainDashboard')),
    exact: true
  },
  {
    path: '/dashboard/remainder',
    component: lazy(() => import('../../views/pages/NavLinks/Remainder')),
    exact: true
  },
  {
    path: '/dashboard/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/pages/NavLinks/Chat'))
  },
  {
    path: '/dashboard/endorsement',
    component: lazy(() => import('../../views/Endorsement/Endorsement')),
    exact: true
  },
  {
    path: '/dashboard/endorsement/newendorsement',
    component: lazy(() => import('../../views/Endorsement/NewEndorsement/NewEndorsement')),
    exact: true
  },
  {
    path: '/dashboard/employees',
    component: lazy(() => import('../../views/Employees/EmployeesHome/EmployeesHome')),
    exact: true
  },
  {
    path: '/dashboard/employees/profile',
    component: lazy(() => import('../../views/Employees/EmployeesProfile/Profile')),
    exact: true
  },
  {
    path: '/dashboard/employees/newuser',
    component: lazy(() => import('../../views/Employees/AddNewUser/EmployeesNewUser')),
    exact: true
  },
  {
    path: '/dashboard/policies',
    component: lazy(() => import('../../views/Policies/policies'))
  },
  {
    path: '/policies/plandetails',
    component: lazy(() => import('../../views/Policies/PlanDetails/PlanDetails')),
    exact: true
  },
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/Analytics/Analytics'))
  },
  {
    path: '/dashboard/claims',
    component: lazy(() => import('../../views/Claims/Claims')),
    exact: true
  },
  {
    path: '/dashboard/providers',
    component: lazy(() => import('../../views/Providers/Providers')),
    exact: true
  }
]

export default DashboardRoutes
