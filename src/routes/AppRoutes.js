import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Contact from "../components/editableFields/contact/Contact";
import Experience from "../components/editableFields/experience/Experience";
import Personal from "../components/editableFields/personal/Personal";
import Summary from "../components/editableFields/summary/Summary";
import Education from "../components/editableFields/education/Education";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
};

export default AppRoutes;
