import  { useRef } from "react";

import category1 from "../../assets/grocery/vegetables.jpeg";
import category2 from "../assets/grocery/grocery/fruits.jpeg";
import category3 from "../assets/grocery/Dairy.jpeg";
import category4 from "../assets/grocery/Bakery.jpeg";
import category5 from "../assets/grocery/Beverages.jpeg";

const cursorimage = [
  { id: 1, title: "Fruits", image: category1 },
  { id: 2, title: "Vegetables", image: category2 },
  { id: 3, title: "Dairy", image: category3 },
  { id: 4, title: "Bakery", image: category4 },
  { id: 5, title: "Beverages", image: category5 },
  { id: 6, title: "Snacks", image: category1 },
  { id: 7, title: "Meat", image: category2 },
  { id: 8, title: "Seafood", image: category3 },
  { id: 9, title: "Frozen", image: category4 },
  { id: 10, title: "Beverages", image: category5 },
  { id: 4, title: "Bakery", image: category4 },
  { id: 5, title: "Beverages", image: category5 },
  { id: 6, title: "Snacks", image: category1 },
  { id: 7, title: "Meat", image: category2 },
  { id: 8, title: "Seafood", image: category3 },
  { id: 9, title: "Frozen", image: category4 },
  { id: 10, title: "Beverages", image: category5 },
];

export default function CircularImageCarousel() {
  const scrollRef = useRef(null);

  const scrollByAmount = 120; 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
       .carousel-wrapper {
  // margin: 100px 0px;  /* 100px top & bottom, 0 left & right */
  position: relative;
  max-width: 100%;
  margin: 0 auto;     /* This overrides previous margin */
  display: flex;
  align-items: center;
}


        .carousel-container {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 20px;
          padding: 10px 0;
          scrollbar-width: none; /* Firefox */
          flex-grow: 1;
          margin:30px
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .carousel-item {
          flex: 0 0 auto;
          border-radius: 50%;
          border: 3px solid #43a047;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          cursor: pointer;
          user-select: none;
          width: 100px;
          height: 100px;
          overflow: hidden;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .arrow-btn {
          background-color: #43a047;
          border: none;
          color: white;
          font-size: 1.5rem;
          padding: 0.5rem 0.8rem;
          border-radius: 50%;
          cursor: pointer;
          margin: 0 10px;
          user-select: none;
          transition: background-color 0.3s ease;
        }

        .arrow-btn:hover {
          background-color: #2e7d32;
        }

        /* Responsive */
        @media (max-width: 850px) {
          .carousel-item {
            width: 80px;
            height: 80px;
            border-width: 2.5px;
          }
          .arrow-btn {
            font-size: 1.3rem;
            padding: 0.4rem 0.7rem;
          }
        }

        @media (max-width: 500px) {
          .carousel-item {
            width: 60px;
            height: 60px;
            border-width: 2px;
          }
          .arrow-btn {
            font-size: 1rem;
            padding: 0.3rem 0.5rem;
          }
        }
      `}</style>

      <div className="carousel-wrapper">
        <div className="carousel-container" ref={scrollRef}>
          {cursorimage.map(({ id, title, image }) => (
            <div key={id} className="carousel-item" title={title}>
              <img src={image} alt={title} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}