import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
const Authorizer = React.lazy(()=> import('./views/Authorizer'));


const Forms = React.lazy(() => import('./views/forms/Form'))
const WithinForms = React.lazy(() => import('./views/forms/WithinForm'))
const CrossForms = React.lazy(() => import('./views/forms/CrossForm'))
const CountryForms = React.lazy(() => import('./views/forms/CountryForm'))



const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));

const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));

const Transaction = React.lazy(()=> import('./views/Transaction'));
const testingForm = React.lazy(()=> import('./views/forms/testingForm'))




const routes = [
  
  { path: '/authorizer', name: 'Authorizer', component: Authorizer , exact: true },
  { path: '/theme', name: 'Theme', component: Transaction, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Transaction },
  { path: '/transaction  ', name: 'Transaction', component: Transaction },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: '', component: Forms },
  { path: '/withinBankForm', name: 'WithinForms', component: WithinForms },
  { path: '/crossBankForm', name: 'CrossForms', component: CrossForms },
  { path: '/crossCountryForm', name: 'CountryForms', component: CountryForms },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/teller', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },

 
];

export default routes;
