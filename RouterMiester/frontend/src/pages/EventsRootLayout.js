import { Outlet, useNavigation } from "react-router-dom";

export default function EventsRootLayout() {
    const navigation = useNavigation();

    return (
        <main>
            <main className="content">
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </main>
    );
}