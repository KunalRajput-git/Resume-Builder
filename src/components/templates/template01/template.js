import "./template.css";
const Template = () => {
  return (
    <div className="view">
      <div className="view innerView">
        <div className="leftViewContainer"></div>
        <div className="rightViewContainer">
          <div className="rigthViewContentContainer">
            <div>
              <h1 style={{ fontWeight: "lighter" }}>Kunal Rajput</h1>
              <h4 style={{ fontWeight: "lighter", marginTop: "0.5rem" }}>
                FRONTEND DEVELOPER
              </h4>
              <hr style={{ border: "1px solid black", marginTop: "1rem" }} />
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontWeight: "lighter", marginTop: "0.5rem" }}>
                OBJECTIVE
              </h3>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontWeight: "lighter", marginTop: "0.5rem" }}>
                EDUCATION
              </h3>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontWeight: "lighter", marginTop: "0.5rem" }}>
                EXPERINCE
              </h3>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontWeight: "lighter", marginTop: "0.5rem" }}>
                PROJECTS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
