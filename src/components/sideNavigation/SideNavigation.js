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
          <li>
            <Link to="/personal" className="link">
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div> Personal</div>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link">
              <div>
                <FontAwesomeIcon icon={faContactBook} />
              </div>
              <div>Contact</div>
            </Link>
          </li>

          <li>
            <Link to="/summary" className="link">
              <div>
                {" "}
                <FontAwesomeIcon icon={faDiceD6} />
              </div>{" "}
              <div> Summary</div>{" "}
            </Link>
          </li>

          <li>
            <Link to="/experience" className="link">
              <FontAwesomeIcon icon={faUserTie} /> Experience
            </Link>
          </li>
          <li>
            <Link to="/education" className="link">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link">
              <div>
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <div> Projects </div>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="link">
              <div>
                <FontAwesomeIcon icon={faComputer} />
              </div>
              <div> Skills</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
