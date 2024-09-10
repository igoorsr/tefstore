import styles from "./navbar.module.css";
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <Link to={"/"}>
          <img
            className={styles.logo}
            src="/logoassinatura.png"
            alt="Logo TEF Store"
          />
        </Link>
        <div className={styles.navbarLinksContainer}>
          <Link to={"/"} className={styles.navbarLink}>
            Home
          </Link>
          <Link to={"/products"} className={styles.navbarLink}>
            Products
          </Link>
          <Link to={"/cart"}>
            <LuShoppingCart className={styles.navbarLink} />
          </Link>
          <Link to={"/profile"}>
            <LuUserCircle className={styles.navbarLink} />
          </Link>
        </div>
      </div>

      <div className={styles.mobileNavbarItems}>
        <img
          className={styles.logo}
          src="/logoassinatura.png"
          alt="Logo TEF Store"
        />
        <div className={styles.mobileNavbarBtns}>
          <LuShoppingCart className={styles.navbarLink} />
          <LuMenu className={styles.navbarLink} onClick={handleOpenMenu} />
        </div>
      </div>
      <Drawer anchor="right" open={openMenu} onClose={handleOpenMenu}>
        <div className={styles.drawer}>
          <Link to={"/"} className={styles.navbarLink} href="">
            Home
          </Link>
          <Link to={"/products"} className={styles.navbarLink} href="">
            Products
          </Link>
          <Link to={"/profile"} className={styles.navbarLink} href="">
            Profile
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
