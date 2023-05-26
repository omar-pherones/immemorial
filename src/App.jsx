import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Main from './components/Layout/Main';
import { useSmoothScroll } from './hook/useSmoothScroll';
import Featured from './components/Featured/Featured';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Favourites from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';

const App = () => {
    useSmoothScroll();
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/featured',
                    element: <Featured></Featured>,
                },
                {
                    path: '/about',
                    element: <About></About>,
                },
                {
                    path: '/gallery',
                    element: <Gallery></Gallery>,
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>,
                },
                {
                    path: '*',
                    element: <NotFound></NotFound>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
