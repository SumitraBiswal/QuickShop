

import Navbar from '../../Component/Navbar';
import Card from '../../usablecomponent/Card';
import FruitCard from '../../usablecomponent/FruitCard';
import VegetableCard from '../../usablecomponent/VegetableCard';
import Heading from '../../usablecomponent/Heading';
import categories from '../../Component/Data/CategoriesData';
import SubcategoryList from '../../usablecomponent/SubcategoryList';

import Cart from '../Cart/Cart';
import About from './About';
import Contact from './contact';

import Footer from './Footer';
import subCategories from '../../Component/Data/subCategories';


export default function HomePage({quantities,increment,decrement,totalCartCount}) {
  return (
    <div>
        <Navbar totalCartCount={totalCartCount}/>
        <div > 
            
            <Heading colortitle="shop"noncolortitle="by category"/>
            <Card categories={categories}/>
             <Heading colortitle="Seasonl"noncolortitle="Fruit Collection"/>
             <VegetableCard
             quantities={quantities}
             increment={increment}
             decrement={decrement}
             />
              <Heading colortitle="Seasonal Fram-Fresh "noncolortitle="Vegetables"/>
              <FruitCard quantities={quantities} increment={increment} decrement={decrement}/>
               <Heading colortitle="find"noncolortitle="what you Need"/>
               <SubcategoryList 
               subCategories={subCategories}
               quantities={quantities}
             increment={increment}
             decrement={decrement}/>

        </div>
        <Contact/>
        <About/>
        <Cart/>
        <Footer/>
        
    </div>
  )
}
