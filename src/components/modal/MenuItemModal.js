import { useSelector } from "react-redux";
import styles from "./menuItemModal.module.css";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";

const MenuItemModal = ({ isOpen, handleClose }) => {
  const selectedItem = useSelector((state) => state.menu.selectedMenuData);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.modalDiv}>
        <div className={styles.innerModalDiv}>
          <div onClick={() => handleClose()} className={styles.cancelIcon}>
            <CancelIcon sx={{ fontSize: "40px" }} />
          </div>
          <img src={selectedItem.image} className={styles.selectedItemImg} />
          <h1 className={styles.title}>{selectedItem.name}</h1>
          <div className={styles.countDiv}>
            <p>-</p>
            <p className={styles.numberText}>1</p>
            <p>+</p>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.addToCartBtn}>Add for $9</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MenuItemModal;
