import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'myApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'myApp.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'myApp.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'myApp.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'myApp.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'myApp.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'myApp.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'myApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'myApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
