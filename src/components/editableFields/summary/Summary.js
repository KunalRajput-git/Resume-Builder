import SideNavigation from "../../sideNavigation/SideNavigation";
import TopNavigation from "../../topNavigation/TopNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./personal.css";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Template from "../../templates/template01/template";
const Summary = () => {
  const [title, setTitle] = useState("Summary");
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
              <textarea
                placeholder="I am Frontend Developer Skilled @React.js"
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  width: "100%",
                  resize: "none",
                  overflow: "scroll",
                  height: "40vh",
                  border: "inherit",
                  padding: "15px",
                  outline: "none",
                  borderRadius: "5px",
                }}
              />
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

export default Summary;
