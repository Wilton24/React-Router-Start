import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import RootElement from "./pages/RootElement";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      { index: true, element: <HomePage />, },
      { path: "/events", element: <EventsPage />, },
      { path: "/events/:eventId", element: <EventDetailPage /> },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:eventId/edit", element: <EventDetailPage /> },

    ]
  },
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;

