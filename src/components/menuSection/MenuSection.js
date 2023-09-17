import { Element } from "react-scroll";
import MenuCard from "../menuCard/MenuCard";
import styles from "./menusection.module.css";

const MenuSection = ({title, products, handleOpen}) => {
  return (
    <div className={styles.menuSection}>
      <Element name={title.split(' ').join('')} className="element">
        <h1 className={styles.sectionTitle}>{title}</h1>
              <div className={styles.section}>
              {products.map((menuItem) => {
                  return <MenuCard
                  title={menuItem.name}
                  image={menuItem.image}
                  handleOpen={handleOpen}
                />;
              })}
              </div>
            </Element>
    </div>
    
  );
};

export default MenuSection;