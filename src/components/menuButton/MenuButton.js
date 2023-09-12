import styles from "./menuButton.module.css";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const MenuButton = ({icon, isColor, title, description}) => {
  return (
    <div className={styles.menuContainer} >
        <div className={styles.icon} style={{color: isColor? "#4d7c1b" : "#abadad"}}>
            {icon}
        </div>
        <div className={styles.content}>
            <p className={styles.title} style={{color: isColor? "#4d7c1b" : "#000000"}}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.arrow}>
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 15 }}/>
        </div>
    </div>
  );
};

export default MenuButton;
