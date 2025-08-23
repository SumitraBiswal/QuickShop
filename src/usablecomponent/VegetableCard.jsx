
import subCategories from '../Component/Data/subCategories';
import style from './VegetableCard.module.css'


export default function VegetableCard({quantities,increment,decrement}) {
    const vegetables=subCategories.filter(item=>item.categoryId===1);
  return (
    <div className={style.container}>
        {vegetables.map(({id,title,image,price,discount})=>{
            const discountedPrice= price-discount;
            const qty=quantities[id]||0;

            return(
                <div className={style.card} key={id}>

                    <div className={style.imageSection}>
                        <img src={image} alt={title}/>
                    </div>
                   <div className={style.title}>{title}</div>
                     <div className={style.priceSection}>
                        <span className={style.originalPrice}>₹{price}</span>
                        <span className={style.discountedPrice}> ₹{discountedPrice}</span>
                     </div>
                     {qty === 0 ? (
                        <button className={style.addToCartBtn }
                        onClick={()=> increment(id)}>
                          Add to cart
                        </button>
                    ):(
                        <div className={style.qtyControls}>
                             <button className={style.qtyBtn }
                        onClick={()=> decrement(id)}
                        aria-label = {'decrease quantity of $ {title}'}>
                          -
                        </button>
                        <span className ={style.qtyDisplay}>{qty} </span>
                         <button className={style.qtyBtn }
                        onClick={()=> increment(id)}
                         aria-label = {'decrease quantity of $ {title}'}>
                           +
                        </button>
                        </div>
                    

                
                )}
                </div>
            );
        })}
        </div>
  );
}
