import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import * as pages from './components/Pages';
import './index.css';

// The site used hash routing before; keep old shared links like /#/work working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: Object.entries(pages).map(([, Element]) => ({
      ...Element,
      element: <Element />,
    })),
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
