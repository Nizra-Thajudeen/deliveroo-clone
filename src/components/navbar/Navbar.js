import styles from "./navbar.module.css";
import logo from "../../assets/logo/deliveroo.png";
import PrimaryButton from "../primaryButton/PrimaryButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.innerDiv}>
        <img src={logo} className={styles.logo} />
        <div className={styles.buttonDiv}>
          <PrimaryButton
            icon={
              <ShoppingBasketIcon sx={{ color: "#00ccbc", fontSize: "19px" }} />
            }
            text={"£9.99"}
          />
          <div style={{ width: "10px" }}></div>
          <Link to={"/signin"}>
          <PrimaryButton
            icon={<HomeIcon sx={{ color: "#00ccbc", fontSize: "19px" }} />}
            text={"Sign up or Login"}
          />
          </Link>
          <div style={{ width: "10px" }}></div>
          <PrimaryButton
            icon={<PersonIcon sx={{ color: "#00ccbc", fontSize: "19px" }} />}
            text={"Account"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
