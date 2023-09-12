import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styles from "./primaryButton.module.css";
const PrimaryButton = ({ icon, text }) => {
  return (
    <button className={styles.primaryButton}>
      <div className={styles.buttonDiv}>
        {/* <ShoppingBasketIcon height={10} color="green" /> */}
        {icon}
        <p className={styles.text}>{text}</p>
      </div>
    </button>
  );
};

export default PrimaryButton;
