import SideNavigation from "../../sideNavigation/SideNavigation";
import TopNavigation from "../../topNavigation/TopNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./personal.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Template from "../../templates/template01/template";
const Contact = () => {
  const [title, setTitle] = useState("Contact");
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

            <input
              className="personalInput professionInput"
              placeholder="Email"
            />
            <input
              className="personalInput professionInput"
              placeholder="Phone"
            />

            <input
              className="personalInput professionInput"
              placeholder="Location"
            />
            <div className="fullNameContainer">
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="personalInput"
                placeholder="linkedIn "
              />
              <input className="personalInput" placeholder="Website" />
            </div>

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

export default Contact;
