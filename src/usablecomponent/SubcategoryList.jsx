import style from './SubcategoryList.module.css'

export default function SubcategoryList({subCategories,increment,decrement,quantities}) {
 
  return (
    <>
 
    <div className={style.container}>
      {subCategories.map(({id,title,image,price,discount})=>{
        const discountedPrice= price-discount;
        const qty=quantities[id]||0;

        return (
          <div key = {id} className={style.card}>
            <div className={style.imageSection}>
               <img src={image} alt={title}/>
            </div>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.priceSection}>
              <span className={style.originalPrice}>₹{price}</span>
               <span className={style.discountedPrice}>₹{discountedPrice}</span>
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
           aria-label = {`decrease quantity of ${title}`}>
           -
           </button>
          <span className ={style.qtyDisplay}>{qty} </span>
           <button className={style.qtyBtn }
            onClick={()=> increment(id)}
          aria-label = {`increase quantity of ${title}`}>
         +
         </button>
         </div>)}
          </div>
        ); }
      
      )}

    </div>
    </>
  );
}
{/*
import style from './SubcategoryCard.module.css';


export default function SubcategoryList({ subCategories, increment, decrement, quantities }) {
  return (
    <div className={style.cardsWrapper}>
      {subCategories.map(({ id, title, image, price, discount }) => {
        const discountedPrice = price - discount;
        const qty = quantities[id] || 0;

        return (
          <div key={id} className={style.cardcontainer}>
          
            <div className={style.imagesection}>
              <img src={image} alt={title} />
            </div>

          
            <div className={style.title}>
              <h1>{title}</h1>
            </div>

            
            <div className={style.priceSection}>
              <span className={style.originalPrice}>₹{price}</span>
              <span className={style.discountedPrice}>₹{discountedPrice}</span>
            </div>

            
            {qty === 0 ? (
              <button className={style.addToCartBtn} onClick={() => increment(id)}>
                Add to cart
              </button>
            ) : (
              <div className={style.qtyControls}>
                <button className={style.qtyBtn} onClick={() => decrement(id)}>
                  -
                </button>
                <span>{qty}</span>
                <button className={style.qtyBtn} onClick={() => increment(id)}>
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
*/}
