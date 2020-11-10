import Starter from '../views/starter/starter.jsx';
// ui components

import LayoutComponent from '../views/ui-components/layout.jsx';
import LayoutComponent1 from '../views/ui-components/layout1.jsx';
import LayoutComponent2 from '../views/ui-components/layout2.jsx';
import LayoutComponent3 from '../views/ui-components/layout3.jsx';
import LayoutComponent4 from '../views/ui-components/layout4.jsx';
import LayoutComponent5 from '../views/ui-components/layout5.jsx';

var ThemeRoutes = [
 
 /* Future project on dashboard, do not delete HN 11-09-2020
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },

  */
  
  {
    path: '/grid',
    name: 'Community Resources_English',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },

  {
    path: '/grid1',
    name: 'Dementia Info_English',
    icon: 'mdi mdi-apps',
    component: LayoutComponent1
  },

  {
    path: '/grid2',
    name: 'Community Resources_Korean',
    icon: 'mdi mdi-apps',
    component: LayoutComponent2
  },

  {
    path: '/grid3',
    name: 'Dementia Info_Korean',
    icon: 'mdi mdi-apps',
    component: LayoutComponent3
  },

  {
    path: '/grid4',
    name: 'Community Resources_Chinese',
    icon: 'mdi mdi-apps',
    component: LayoutComponent4
  },

  {
    path: '/grid5',
    name: 'Community Resources_Chinese',
    icon: 'mdi mdi-apps',
    component: LayoutComponent5
  },

  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
