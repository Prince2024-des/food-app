import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

import "./FoodDisplay.css";
const FoodDisplay = ({ category }) => {
  const { foo_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
