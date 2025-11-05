import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import RootElement from "./pages/RootElement";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import ErrorPage from "./pages/ErrorPage";
import { loader as eventDetailLoader } from "./pages/EventDetailPage";
import EventsRootLayout from "./pages/EventsRootLayout";
import { manipulateEventAction, deleteEventAction } from "./api/actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // 👇 NEW PARENT ROUTE FOR ALL EVENT PAGES 👇
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: 'event-detail',
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
              {
                path: "delete",
                action: deleteEventAction
              }
            ]
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;

