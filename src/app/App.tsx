import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { menuConfig } from '../config/menu';
import '../global.css';
import { mockUser } from '../mock/mockData';
import AddData from '../pages/AddDataPage/AddDataPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import InfoPage from '../pages/InfoPage/InfoPage';
import NotImplementedPage from '../pages/NotImplementedPage/NotImplementedPage';
import TemplatePage from '../pages/TemplatePage/TemplatePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TemplatePage menuConfig={menuConfig} user={mockUser}>
        <Outlet />
      </TemplatePage>
    ),
    children: [
      {
        path: '/',
        element: <p>general site</p>
      },
      {
        path: '/add-data',
        element: <AddData />
      },
      {
        path: '/info',
        element: <InfoPage />
      },
      {
        path: '/offset',
        element: <NotImplementedPage />
      },
      {
        path: '/browse',
        element: <NotImplementedPage />
      },
      {
        path: '/preferences',
        element: <NotImplementedPage />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <TemplatePage menuConfig={menuConfig} user={mockUser}>
  //     hello
  //   </TemplatePage>
  // );
}

export default App;
