import SideNavigation from "../../sideNavigation/SideNavigation";
import TopNavigation from "../../topNavigation/TopNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./personal.css";
import {
  faEdit,
  faPlus,
  faPlusCircle,
  faplus,
} from "@fortawesome/free-solid-svg-icons";

import Template from "../../templates/template01/template";
import AddNew from "../simpleComponent/AddNew";
import { useState } from "react";
const Experience = () => {
  const [title, setTitle] = useState("Experience");
  const [isEditable, setIsEditable] = useState(false);

  // console.log(isChecked);
  return (
    <>
      <TopNavigation />
      <div className="personalContainer">
        <SideNavigation />
        <div className="personalEditContainer">
          <div className="personalContainerEditable">
            {!isEditable ? (
              <h3>
                {title}{" "}
                <FontAwesomeIcon
                  onClick={() => setIsEditable(true)}
                  icon={faEdit}
                />
              </h3>
            ) : (
              <input
                value={title}
                onKeyPress={(e) => {
                  if (e.key == "Enter") {
                    setIsEditable(false);
                  }
                }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="personalInput"
                placeholder="eg: Title "
              />
            )}

            {/* Add Container Starts Here */}
            <AddNew
              inputFirstPlaceHolder="Position"
              inputSecondPlaceHolder="Company"
            />
            {/* Add Conatiner Ends Here */}
          </div>
        </div>

        {/* View Container */}
        <div className="viewContainer">
          <Template />
        </div>
      </div>
    </>
  );
};

export default Experience;
