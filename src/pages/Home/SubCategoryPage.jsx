
import { useParams } from "react-router-dom";
import Navbar from '../../Component/Navbar';
import subCategories from '../../Component/Data/subCategories';
import SubcategoryList from '../../usablecomponent/SubcategoryList';
import style from './SubCategoryPage.module.css';
import Heading from'../../usablecomponent/Heading';




export default function SubCategoryPage({quantities,increment,decrement}) {
    const {categoryId}=useParams();
   const filterSubs=subCategories.filter(
        (sub)=>sub.categoryId===Number(categoryId)
    );
    const totalCartCount= Object.values(quantities).reduce((a, b)=>a + b,0);
  return (
    <div className={style.subcategoryPage}>
<Navbar totalCartCount={totalCartCount}/>
<Heading colortitle="Item" noncolortitle=" related to your search"/>
<SubcategoryList
subCategories={filterSubs}
quantities={quantities}
increment={increment}
decrement={decrement}
/>

</div>
  );
}
