import { createBrowserRouter } from 'react-router';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/HomePage/HomePage';
import IndentPage from '../pages/IndentPage/IndentPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import MyPage from '../pages/MyPage/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/indent',
        element: <IndentPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/my',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
