import { useParams } from "react-router-dom";
import subCategories from "../../Component/Data/subCategories";
import style from "./ProductPage.module.css"; 

export default function ProductPage() {
  const { Id } = useParams();
  const product = subCategories.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found for id: {id}</div>;
  }

  return (
    <div className={style.pageContainer}>
      {/* Left side: Product Image */}
      <div className={style.imageSection}>
        <img
          src={product.image}
          alt={product.title}
          className={style.productImage}
        />
      </div>

      {/* Right side: Details */}
      <div className={style.detailSection}>
        <h1>{product.title}</h1>

        <div className={style.priceSection}>
          <span className={style.originalPrice}>₹{product.price}</span>
          <span className={style.discountPrice}>
            ₹{product.price - product.discount}
          </span>
        </div>

        <div className={style.qtyControls}>
          <button className={style.qtyBtn}>-</button>
          <span className={style.qtyDisplay}>1</span>
          <button className={style.qtyBtn}>+</button>
        </div>

        <button className={style.addToCartBtnz}>Add to Cart</button>
      </div>
    </div>
  );
}