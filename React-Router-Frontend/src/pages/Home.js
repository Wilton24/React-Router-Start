import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/products");
    };

    return <div>
        Welcome to the Home Page
        <p>
            <button onClick={handleNavigation}>Go to Products</button>
        </p>

    </div>;
};