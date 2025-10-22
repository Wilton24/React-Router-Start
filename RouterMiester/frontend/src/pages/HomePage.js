import { Outlet } from "react-router-dom";
import DialogModal from "../Modals/DialogModal";


export default function HomePage() {
    return (
        <>
            <DialogModal />
            <main className="content">
                <Outlet />
            </main>

            <h1>Welcome to the Event Management App</h1>
            <p>Manage your events efficiently and effectively.</p>
        </>
    );
}