import styles from "./menuCard.module.css";

const MenuCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItemDiv}>
        <div className={styles.itemDiv}>
          <p className={styles.heading}>Harissa Cauliflower salad</p>
          <span className={styles.itemDesc}>
            harissa roasted cauliflower with houmous sample sample sample
          </span>
          <p className={styles.calCount}>344 kcal</p>
          <p className={styles.calCount}>£11.49</p>
        </div>
        <div className={styles.imageDiv}>
          <img
            src={
              "https://rs-menus-api.roocdn.com/images/3b0b5645-a883-4dd7-bf9c-859c4db0ec20/image.jpeg?width=148.5&height=148.5&auto=webp&format=jpg&fit=crop&quot"
            }
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
