
import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';

export default function Card({categories=[]}) {
    const navigate=useNavigate();
    const handleCategoryClick=(categoryId)=>{
        navigate(`/subcategory/${categoryId}`);
    };

  return (
    <div className={style.cardWrapper}>
        {categories.map((category)=>(
            <div className={style.cardContainer}
                key={category.id}
                onClick={()=>handleCategoryClick(category.id)}
                style={{cursor:'pointer'}}
            >
                <div className={style.imagesection}>
                    <img src={category.image} alt={category.title}/>

                </div>
                <div className={style.title}>
<h1>  { category.title}</h1>
                </div>

            </div>
       ) )}
    </div>
  );
}
