import Navbar from '../../Component/Navbar';
import Card from '../../usablecomponent/Card';
import FruitCard from '../../usablecomponent/FruitCard';
import VegetableCard from '../../usablecomponent/VegetableCard';
import Heading from '../../usablecomponent/Heading';
import categories from '../../Component/Data/CategoriesData';
import SubcategoryList from '../../usablecomponent/SubcategoryList';
import About from './About';
import Contact from './contact';
import subCategories from '../../Component/Data/subCategories';




export default function HomePage({quantities,increment,decrement,totalCartCount}) {
  return (
    <div>
        <Navbar totalCartCount={totalCartCount}/>
        <div > 
            
            <Heading colortitle="shop "noncolortitle="by category"/>
            <Card categories={categories}/>
             <Heading colortitle="Seasonal "noncolortitle="Fruit Collection"/>
             <VegetableCard
             quantities={quantities}
             increment={increment}
             decrement={decrement}
             />
              <Heading colortitle="Seasonal Farmm-Fresh "noncolortitle="Vegetables"/>
              <FruitCard quantities={quantities} increment={increment} decrement={decrement}/>
               <Heading colortitle="find "noncolortitle="what you Need"/>
               <SubcategoryList 
               subCategories={subCategories}
               quantities={quantities}
             increment={increment}
             decrement={decrement}/>

        </div>
        <Contact/>
        <About/>
        
        
        
    </div>
  )
}
/**export default function HomePage({quantities, increment, decrement, totalCartCount}) {
  return (
    <div className={styles.homePage}>
        <Navbar totalCartCount={totalCartCount}/>
        <div className={styles.section}> 
            <Heading className={styles.heading} colortitle="shop " noncolortitle="by category"/>
            <Card className={styles.cardContainer} categories={categories}/>
            <Heading className={styles.heading} colortitle="Seasonal " noncolortitle="Fruit Collection"/>
            <VegetableCard 
                className={styles.vegetableContainer}
                quantities={quantities}
                increment={increment}
                decrement={decrement}
            />
            <Heading className={styles.heading} colortitle="Seasonal Farm-Fresh" noncolortitle="Vegetables"/>
            <FruitCard 
                className={styles.fruitContainer} 
                quantities={quantities} 
                increment={increment} 
                decrement={decrement}
            />
            <Heading className={styles.heading} colortitle="find " noncolortitle="what you Need"/>
            <SubcategoryList 
                className={styles.subcategoryContainer}
                subCategories={subCategories}
                quantities={quantities}
                increment={increment}
                decrement={decrement}
            />
        </div>
        <Contact className={styles.contactSection}/>
        <About className={styles.aboutSection}/>
        <Cart className={styles.cartSection}/>
        <Footer className={styles.footer}/>
    </div>
  )
}
 
**/