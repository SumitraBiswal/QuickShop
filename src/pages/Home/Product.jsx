

import Footer from "./Footer";
import Heading from "../../usablecomponent/Heading"
import style from "./Product.module.css"

import subCategories from "../../Component/Data/subCategories";
import Navbar from "../../Component/Navbar";
import SubcategoryList from "../../usablecomponent/SubcategoryList";

function shuffledArray(array){
    let shuffled=array.slice();
    for( let i =shuffled.length -1 ;i> 0;i--){
        const j= Math.floor(Math.random()*(i+1));
        [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];

    }
    return shuffled;
}
    

export default function Product({quantities,increament,decrement,totalCartCount}){
    const shuffledSubCategories=shuffledArray(subCategories);
return (
    <div>
        <Navbar totalCartCount={totalCartCount}/>
        <div className={style.mainContent}>
            <Heading colortitle="All" noncolortitle="PRDUCT"/>
            <SubcategoryList
            subCategories={shuffledSubCategories}
            quantities={quantities}
            increament={increament}
            decrement={decrement}/>

        </div>
        <Footer/>
    </div>
);
}