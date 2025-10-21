import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";


export default function HomePage() {
    return (
        <>

            <main className="content">
                <Outlet />
            </main>
        </>
    );
}