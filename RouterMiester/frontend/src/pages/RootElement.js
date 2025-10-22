import MainNavigation from "./MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

export default function RootElement() {

    const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            <main className="content">
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    );
}