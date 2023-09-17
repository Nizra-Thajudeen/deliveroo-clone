import { useDispatch } from "react-redux";
import styles from "./menuCard.module.css";
import { setSelectedMenu } from "../../redux/slice/menuSlice";

const MenuCard = ({ title, image, handleOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.card}
      onClick={() => {
        dispatch(setSelectedMenu({ name: title, image: image }));
        handleOpen();
      }}
    >
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
