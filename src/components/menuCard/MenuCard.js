import styles from "./menuCard.module.css";

const MenuCard = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItemDiv}>
        <div className={styles.itemDiv}>
          <p className={styles.heading}>{title}</p>
          <span className={styles.itemDesc}>
            harissa roasted cauliflower with houmous sample sample sample
          </span>
          <p className={styles.calCount}>344 kcal</p>
          <p className={styles.calCount}>£11.49</p>
        </div>
        <div className={styles.imageDiv}>
          <img src={image} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
