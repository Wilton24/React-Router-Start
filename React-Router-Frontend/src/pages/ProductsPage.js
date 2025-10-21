import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'prod1', name: "Product 1" },
    { id: 'prod2', name: "Product 2" },
    { id: 'prod3', name: "Product 3" },
    { id: 'prod4', name: "Product 4" },
];

export default function ProductsPage() {
    return <div>
        <h1>Welcome to the Products Page</h1>
        <ul>
            {PRODUCTS.map((product) => {
                return <li key={product.id}><Link to={`${product.id}`}>{product.name}</Link> </li>
            })}
        </ul>
    </div>;
}