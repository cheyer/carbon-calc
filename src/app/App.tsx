import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { menuConfig } from '../config/menu';
import '../global.css';
import { mockUser } from '../mock/mockData';
import AddData from '../pages/AddDataPage/AddDataPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import InfoPage from '../pages/InfoPage/InfoPage';
import NotImplementedPage from '../pages/NotImplementedPage/NotImplementedPage';
import TemplatePage from '../pages/TemplatePage/TemplatePage';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: routes.index,
    element: (
      <TemplatePage menuConfig={menuConfig} user={mockUser}>
        <Outlet />
      </TemplatePage>
    ),
    children: [
      {
        path: routes.index,
        element: <p>general site</p>
      },
      {
        path: routes.addData,
        element: <AddData />
      },
      {
        path: routes.info,
        element: <InfoPage />
      },
      {
        path: routes.offset,
        element: <NotImplementedPage />
      },
      {
        path: routes.browse,
        element: <NotImplementedPage />
      },
      {
        path: routes.preferences,
        element: <NotImplementedPage />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
