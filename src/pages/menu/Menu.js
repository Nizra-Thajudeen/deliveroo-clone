import { useDispatch, useSelector } from "react-redux";
import styles from "./menu.module.css";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useEffect, useState } from "react";
import { getMenuData } from "../../redux/slice/menuSlice";
import Navbar from "../../components/navbar/Navbar";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuButton from "../../components/menuButton/MenuButton";

import StarIcon from '@mui/icons-material/Star';
import MenuSection from "../../components/menuSection/MenuSection";


const Menu = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu);
  
  useEffect(() => {
    dispatch(getMenuData());
  }, []);

  return (
    <div>
      <Navbar />
    <div className={styles.mainMenu}>
      <div className={styles.menuContainer}>
        <div className={styles.backBtn}>
          <ArrowBackIcon />
          <p>Back</p>
        </div>
  
        <div className={styles.rowContainer}>
          <div className={styles.imageDiv}>
            <img
              className={styles.menuImage}
              src="https://rs-menus-api.roocdn.com/images/854f3839-097c-4dab-aa93-945f662859b1/image.jpeg?width=540&height=333&auto=webp&format=jpg&fit=crop&quot"
            />
          </div>
          <div className={styles.menuHighlight}>
            <h1 className={styles.menuHeading}>
              Tossed - St Martin's Lane
            </h1>
            <p className={styles.desc}>
              10 - 20 min · Chicken · Salads · Healthy
            </p>
            <p className={styles.info}>
              0.20 miles away · Closes at 15:00 · £7.00 minimum · £0.99 delivery
            </p>
            <MenuButton icon={<InfoOutlinedIcon />} title={"Info"} description={"Map, allergens and hygiene rating"} isColor={false} />
            <MenuButton icon={<StarIcon />} title={"4.7 Excellent"} description={"See all 500 reviews"} isColor={true} />
          </div>
          <div>
            <PrimaryButton
              icon={
                <PeopleOutlineIcon
                  sx={{ color: "#00ccbc", fontSize: "19px" }}
                />
              }
              text={"Start group order"}
            />
          </div>
        </div>
      </div>
      <div className={styles.areas}>
        <div className={styles.menuSection}>
        {menu.map((section) => {
          return <MenuSection title={section.sectionTitle} products={section.products} />;
        })}
        </div>
        <div className={styles.cartSection}>
          <div className={styles.cart}>
            <ShoppingBasketIcon sx={{ color: "#abadad", fontSize: "45px" }} />
            <p className={styles.cartText}>Your basket is empty</p>
            <button className={styles.checkouteBtn}>Go to checkout</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
