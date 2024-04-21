// layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import LogIn from '~/pages/LogIn';
import SignUp from '~/pages/SignUp';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/signup', component: SignUp, layout: HeaderOnly },
  { path: '/login', component: LogIn, layout: null },
  // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
