import SideNavigation from "../../sideNavigation/SideNavigation";
import TopNavigation from "../../topNavigation/TopNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./personal.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Template from "../../templates/template01/template";
const Personal = () => {
  const [title, setTitle] = useState("Personal");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    profession: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  // console.log(personal);
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

            <div className="fullNameContainer">
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="personalInput"
                placeholder="eg: Kunal "
              />
              <input className="personalInput" placeholder="eg: Rajput" />
            </div>
            <input
              className="personalInput professionInput"
              placeholder="eg: Frontend Developer"
            />
            <button
              onClick={() => {
                setPersonal({
                  ...personal,
                  firstName: firstName,
                });
              }}
              className="personalContactBtn"
            >
              Save
            </button>
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

export default Personal;
