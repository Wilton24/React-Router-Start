import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";

export default function EventsRootLayout() {

    return (
        <main>
            <EventsNavigation />
            <main className="content">
                <h1>Sound Check</h1>
                <Outlet />
            </main>
        </main>
    );
}