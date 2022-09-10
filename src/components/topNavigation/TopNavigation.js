// import { Link } from "react-router-dom";
import "./topNavigation.css";

import { useState } from "react";
const TopNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="navbar">
      <h2 className="navHeroHeading">RESUME BUILDER</h2>

      <div className={menuVisible ? "navItemsContainerM" : "navItemsContainer"}>
        <ul>
          <li>
            {/* <Link to="/" className="link"> */}
            VIEW RESUME
            {/* </Link> */}
          </li>

          <li>
            {/* <Link to="/Donate" className="link"> */}
            BUY ME A COFFEE
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
