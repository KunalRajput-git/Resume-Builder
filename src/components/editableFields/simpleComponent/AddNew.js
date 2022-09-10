import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlus,
  faPlusCircle,
  faplus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AddNew = ({ inputFirstPlaceHolder, inputSecondPlaceHolder }) => {
  const [add, setAdd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isAddNew, setIsAddNew] = useState(false);
  return (
    <>
      {isAddNew ? (
        <div className="add">
          <input
            placeholder={inputFirstPlaceHolder}
            className="personalInput"
          />
          <input
            placeholder={inputSecondPlaceHolder}
            className="personalInput"
          />
          <div className="addSpan">
            <div className="SpanContainer">
              <span>Date From</span>
              <span>Date To</span>
            </div>
          </div>
          <div className="addSelect">
            <select>
              <option disabled>MM</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>March</option>
              <option>April</option>
            </select>

            <select disabled={isChecked ? true : false}>
              <option disabled>YYYY</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>

          <div className="checkedContainer">
            <input
              className="check"
              value="Present"
              onClick={(e) => setIsChecked(e.target.checked)}
              type="checkbox"
            />
            Present
          </div>
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
        </div>
      ) : null}

      {!isAddNew ? (
        <button
          onClick={() => setIsAddNew(true)}
          style={{ width: "60%" }}
          className="personalContactBtn"
        >
          <FontAwesomeIcon icon={faPlusCircle} /> Add New
        </button>
      ) : (
        <button
          onClick={() => {
            setIsAddNew(false);
            setIsChecked(false);
          }}
          style={{ width: "60%" }}
          className="personalContactBtn"
        >
          <FontAwesomeIcon icon={faSave} /> Save
        </button>
      )}
    </>
  );
};

export default AddNew;
