
import Card from '../../usablecomponent/Card';
import FruitCard from '../../usablecomponent/FruitCard';
import VegetableCard from '../../usablecomponent/VegetableCard';
import Heading from '../../usablecomponent/Heading';
import categories from '../../Component/Data/CategoriesData';
import SubcategoryList from '../../usablecomponent/SubcategoryList';
import About from './About';
import Contact from './Contact';
import subCategories from '../../Component/Data/subCategories';

import style from './HomePage.module.css'


export default function HomePage({quantities,increment,decrement,totalCartCount}) {
    
  return (
    <>
    <div className={style.container}>
      
        <div className={style.homepage}> 
            <div>
            <img src="/banner/banner11.jpeg" alt="banner" className={style.bannerfull}/>
            </div>
            <div className={style.banner2}>
            <div className={style.text}>
              <h2>Make Healthy Life with <span>Fresh</span> Grocery</h2>
              <p>Choose fresh fruits, vegetable and other grocery to stay healthy and energetic.
                we deliver fresh grocery right to your door step.
              </p>
              <button className={style.shopBtn}>Shop Now  </button>
            </div><div className={style.banner2}>
              <img src="/banner/homepage.jpeg" alt ="homepage" />
            </div></div>
           <div className={style.secondsection}>
            <div className={style.bycategorysection}>
              <Heading colortitle="shop "noncolortitle="by category"/>
            <Card categories={categories}/>  
            </div>
            
             <Heading colortitle="Seasonal "noncolortitle="Fruit Collection"/>
             <VegetableCard
             quantities={quantities}
             increment={increment}
             decrement={decrement}
             />
             
             
              <Heading colortitle="Seasonal Farm-Fresh "noncolortitle="Vegetables"/>
              <FruitCard quantities={quantities} increment={increment} decrement={decrement}/>
               <Heading colortitle="find "noncolortitle="what you Need"/>
               <SubcategoryList 
               subCategories={subCategories}
               quantities={quantities}
             increment={increment}
             decrement={decrement}/>
         </div>
      
        <About/>
        <Contact/>
        
        </div>
    </div>
    </>
  )
}