import { Link } from "react-scroll";
import styles from "./menubar.module.css";
import { useSelector } from "react-redux";

const MenuBar = ({icon, isColor, title, description}) => {

  const menu = useSelector((state) => state.menu);

    return (
        <div className={styles.navbarContainer}>
          <div className={styles.innerDiv}>
            {menu.map(menu => {
              return (<Link className={styles.menulink} activeClass={styles.activeLink} offset={-180} to={menu.sectionTitle.split(' ').join('')} spy={true} smooth={true} duration={500}>
                       {menu.sectionTitle}
                  </Link>);
            })}
          </div>
        </div>
      );
};

export default MenuBar;
