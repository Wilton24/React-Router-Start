import { Link } from "react-router-dom";

export default function Home() {
    return <div>
        Welcome to the Home Page
        <p> Go to <Link to="/about">About</Link></p>
    </div>;
}