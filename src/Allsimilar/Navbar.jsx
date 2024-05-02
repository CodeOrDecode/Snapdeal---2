import React from "react";
import style from "../Css/Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className={style.navpri}>
      <div className={style.nav1}>
        <div className={style.navp1}>
          Brand Waali Quality, Bazaar Waali Deal!
        </div>
        <div className={style.nav2}>
          <div>Impact@Snapdeal</div>
          <div>Help Center</div>
          <div>Sell On Snapdeal</div>
          <div className={style.nav3}>
            <img
              className={style.navimg}
              src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"
              alt=""
            />
            <div>Download App</div>
          </div>
          <div>Donate for elderly</div>
        </div>
      </div>

      <div className={style.navpart2}>
        <div className={style.divlogo}>
          <img
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </div>
        <div className={style.inputone}>
          <input type="text" placeholder="Search products &amp; brands" />
          <button className={style.navbutton}>
            <IoSearch className={style.search1} />
            Search
          </button>
        </div>
        <div className={style.cart}>
          <div className={style.cartp}>Cart</div>
          <IoCartOutline className={style.carticon} />
        </div>
        <div className={style.signin}>
          <div className={style.signinp}>SignIn</div>
          <div className={style.account}>
            <BiSolidUser className={style.accountsmall} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
