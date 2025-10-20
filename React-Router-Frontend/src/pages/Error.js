import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    return <>
        <MainNavigation />
        <main className="content">
            <h1>An error occurred!</h1>
            <p>Could not find the requested page.</p>
        </main>
    </>
}