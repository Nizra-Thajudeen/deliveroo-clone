import MenuCard from "../menuCard/MenuCard";
import styles from "./menusection.module.css";

const MenuSection = ({ title, products }) => {
  return (
    <div className={styles.menuSection}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div className={styles.section}>
        {products.map((menuItem) => {
          return <MenuCard title={menuItem.name} image={menuItem.image} />;
        })}
      </div>
    </div>
  );
};

export default MenuSection;
