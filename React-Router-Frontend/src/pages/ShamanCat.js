import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";



export default function ShamanCat() {

    const { productId } = useParams();
    return <>
        <h1>SHAMAN CAT! with the ID of {productId}</h1>
        <button><Link to=".." relative="path" >Back</Link></button>
    </>

}