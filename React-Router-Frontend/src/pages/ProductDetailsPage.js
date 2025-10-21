import { useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
    const { productId } = useParams();

    return <>
        <h1>Product Details</h1>
        <p>Here you can find more information about the product with ID: {productId}</p>
    </>;
}