import { Link } from "react-router-dom";
import "./sideNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faContactBook,
  faDiceD6,
  faGraduationCap,
  faLayerGroup,
  faComputer,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SideNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="sideNavbar">
      <div>
        <ul>
          <Link to="/personal" className="link">
            <li>
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div> Personal</div>
            </li>
          </Link>

          <Link to="/contact" className="link">
            <li>
              <div>
                <FontAwesomeIcon icon={faContactBook} />
              </div>
              <div>Contact</div>
            </li>
          </Link>

          <Link to="/summary" className="link">
            <li>
              <div>
                {" "}
                <FontAwesomeIcon icon={faDiceD6} />
              </div>{" "}
              <div> Summary</div>{" "}
            </li>
          </Link>

          <Link to="/experience" className="link">
            <li>
              <FontAwesomeIcon icon={faUserTie} /> Experience
            </li>
          </Link>
          <Link to="/education" className="link">
            <li>
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </li>
          </Link>
          <Link to="/projects" className="link">
            <li>
              <div>
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <div> Projects </div>
            </li>
          </Link>
          <Link to="/skills" className="link">
            <li>
              <div>
                <FontAwesomeIcon icon={faComputer} />
              </div>
              <div> Skills</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
