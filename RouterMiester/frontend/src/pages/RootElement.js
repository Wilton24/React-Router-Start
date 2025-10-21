import MainNavigation from "./MainNavigation"
import { Outlet } from "react-router-dom"
export default function RootElement() {
    return (
        <>
            <MainNavigation />
            <main className="content">
                <Outlet />
            </main>
        </>)
}