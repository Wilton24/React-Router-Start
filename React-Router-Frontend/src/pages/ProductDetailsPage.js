import { Link, useParams } from 'react-router-dom';
export default function ProductDetailsPage() {
    const { productId } = useParams();

    return <>
        <h1>Product Details</h1>
        <h2>Product with ID: <strong>{productId}</strong></h2>
        <h2>Product Details:</h2>
        <Link to="shamanCat">View Shaman Cat Details</Link>
    </>;
}
