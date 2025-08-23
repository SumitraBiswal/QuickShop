
import {useParams} from "react-router-dom";
import subCategories from "../../Component/Data/subCategories";


export default function ProductPage(){
const { id }= useParams();
const product= subCategories.find ((item)=>item.id.toString()===id);

if(!product){
    return<div>Product not found for id :{id}</div>
}
return(
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title}width={300}/>
        <p>price: {product.price}</p>
    </div>
);
}