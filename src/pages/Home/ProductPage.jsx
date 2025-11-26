import { useParams } from "react-router-dom";
import { useState } from "react";
import subCategories from "../../Component/Data/subCategories";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const { Id } = useParams();
  const product = subCategories.find((item) => item.id.toString() === Id);

  // FIX: Stable quantity state
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div>Product not found for id: {Id}</div>;
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

      {/* Right side */}
      <div className={style.detailSection}>
        <h1>{product.title}</h1>

        <div className={style.priceSection}>
          <span className={style.originalPrice}>₹{product.price}</span>
          <span className={style.discountPrice}>
            ₹{product.price - product.discount}
          </span>
        </div>

        {/* FIX: Stable qty buttons */}
        <div className={style.qtyControls}>
          <button
            className={style.qtyBtn}
            onClick={() => setQty(q => Math.max(1, q - 1))}
          >
            -
          </button>

          <span className={style.qtyDisplay}>{qty}</span>

          <button
            className={style.qtyBtn}
            onClick={() => setQty(q => q + 1)}
          >
            +
          </button>
        </div>

        {/* FIX: Stable Add to Cart */}
        <button
          className={style.addToCartBtnz}
          onClick={() => alert("Added to cart")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}