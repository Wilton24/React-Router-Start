import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";


export default function HomePage() {
    return (
        <>

            <main className="content">
                <Outlet />
            </main>

            <h1>Welcome to the Event Management App</h1>
            <p>Manage your events efficiently and effectively.</p>
        </>
    );
}