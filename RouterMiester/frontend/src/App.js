import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import RootElement from "./pages/RootElement";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import ErrorPage from "./pages/ErrorPage";
import { loader as eventDetailLoader } from "./pages/EventDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, },
      {
        path: "/events",
        element: <EventsPage />,
        loader: eventsLoader
      },
      {
        path: "/events/:eventId",
        element: <EventDetailPage />,
        loader: eventDetailLoader
      },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:eventId/edit", element: <EditEventPage /> },

    ]
  },
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;

