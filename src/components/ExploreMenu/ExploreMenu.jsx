import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dicta
        quisquam ratione nobis error aperiam, perferendis blanditiis voluptatum
        culpa magnam.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((preve) =>
                  preve === item.menu_name ? " All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? "active" : ""}
              />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
export default ExploreMenu;
