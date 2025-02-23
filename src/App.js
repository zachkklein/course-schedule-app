import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ResultsPage from './resultsPage';
import ScrollToTop from './switchScroll';
import ScheduleEntry from './ScheduleEntry';
import './App.css';

// Import major data
import biomedicalEngineeringData from './biomedicalEngineeringData';
import computerScienceData from './computerScienceData';
import dataScienceData from './dataScienceData';
import electricalEngineeringData from './electricalEngineeringData';
import humanFactorsEngineeringData from './humanFactorsEngineeringData';
import chemicalEngineeringData from './chemicalEngineeringData';
import civilEngineeringData from './civilEngineeringData';
import environmentalEngineeringData from './environmentalEngineeringData';
import architecturalStudiesData from './architecturalStudiesData';
import environmentalHealthData from './environmentalHealthData';
import engineeringPhysicsData from './engineeringPhysicsData';
import mechanicalEngineeringData from './mechanicalEngineeringData';
import engineeringData from './engineeringData';
import engineeringScienceData from './engineeringScienceData';
import noMajorData from './noMajorData';

// Import elective JSON data
import extractedCourses from './extracted_courses.json';
import ethicSocialCourses from './ethic_social.json';
import systemElectivesData from './system_electives.json';
import physBioChem from './phys_bio_chem.json';
import SocialContextData from './cs_social_context.json';
import kCSElectiveData from './k_cs_elective.json';
import jCSElectiveData from './j_cs_electives.json';
import lCSElectiveData from './l_cs_electives.json';
import probStatData from './prob_stat.json';
import breadthElectiveData from './breadth_elective.json';
import mnsElectiveData from './mns_electives.json';
import engCSData from './eng_cs_elective.json';

// Group all majors
const majorsData = {
  "Architectural Studies": architecturalStudiesData,
  "Biomedical Engineering": biomedicalEngineeringData,
  "Chemical Engineering": chemicalEngineeringData,
  "Civil Engineering": civilEngineeringData,
  "Computer Science": computerScienceData,
  "Data Science": dataScienceData,
  "Engineering": engineeringData,
  "Engineering Physics": engineeringPhysicsData,
  "Engineering Science": engineeringScienceData,
  "Electrical Engineering": electricalEngineeringData,
  "Environmental Engineering": environmentalEngineeringData,
  "Environmental Health": environmentalHealthData,
  "Human Factors Engineering": humanFactorsEngineeringData,
  "Mechanical Engineering": mechanicalEngineeringData,
  "No Major": noMajorData,
};

// Helper: map raw courses to react-select options
const prepareOptions = (courses) =>
  courses.map(course => ({
    value: course.code,
    label: `${course.code} - ${course.title}`,
    code: course.code,
    title: course.title,
    credit: course.credit,
  }));

// Prepare options for each elective type
const hassOptions = prepareOptions(extractedCourses);
const ethicSocialOptions = prepareOptions(ethicSocialCourses);
const systemElectivesOptions = prepareOptions(systemElectivesData);
const physBioChemOptions = prepareOptions(physBioChem);
const kCSElectiveOptions = prepareOptions(kCSElectiveData);
const jCSElectiveOptions = prepareOptions(jCSElectiveData);
const lCSElectiveOptions = prepareOptions(lCSElectiveData);
const SocialContextOptions = prepareOptions(SocialContextData);
const probStatOptions = prepareOptions(probStatData);
const breadthElectiveOptions = prepareOptions(breadthElectiveData);
const mnsElectiveOptions = prepareOptions(mnsElectiveData);
const engCSOptions = prepareOptions(engCSData);

// Custom SingleValue component to display only the course code.
const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props.data.code}
  </components.SingleValue>
);

// A reusable component for elective rows with duplicate selection filtering.
const ElectiveCourseRow = ({
  course,
  courseKey,
  completed,
  toggleCourse,
  options,
  selectedCourses,
  selectedValue,
  handleSelect,
  placeholder,
  getSelectedCourseObj,
}) => {
  // Filter out options that have already been selected elsewhere,
  // but always include the currently selected option.
  const filteredOptions = options.filter(option =>
    option.value === selectedValue || !Object.values(selectedCourses).includes(option.value)
  );

  return (
    <tr key={courseKey}>
      <td style={{ textAlign: 'center' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCourse(course.id)}
          disabled={!selectedValue}
        />
      </td>
      <td style={{ width: '200px' }}>
        <Select
          options={filteredOptions}
          value={filteredOptions.find(opt => opt.value === selectedValue)}
          onChange={(option) => handleSelect(courseKey, option.value)}
          components={{ SingleValue }}
          placeholder={placeholder}
        />
      </td>
      <td>{getSelectedCourseObj(selectedValue)?.title || ''}</td>
      <td>{getSelectedCourseObj(selectedValue)?.credit || ''}</td>
    </tr>
  );
};

// Main course-tracking component (uses localStorage for major and completed courses)
function CourseEntry() {
  const getStoredData = (key, defaultValue) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  };

  const [selectedMajor, setSelectedMajor] = useState(
    localStorage.getItem('selectedMajor') || 'Computer Science'
  );
  const [completedCourses, setCompletedCourses] = useState(
    getStoredData('completedCourses', {})
  );

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('selectedMajor', selectedMajor);
    localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
  }, [selectedMajor, completedCourses]);

  const navigate = useNavigate();

  // Elective selections state
  const [selectedHassCourses, setSelectedHassCourses] = useState({});
  const [selectedEthicSocialCourses, setSelectedEthicSocialCourses] = useState({});
  const [selectedSystemElectives, setSelectedSystemElectives] = useState({});
  const [selectedPhysBioChemElectives, setSelectedPhysBioChemElectives] = useState({});
  const [selectedKcsElectives, setSelectedKcsElectives] = useState({});
  const [selectedJcsElectives, setSelectedJcsElectives] = useState({});
  const [selectedLcsElectives, setSelectedLcsElectives] = useState({});
  const [selectedSocialContextElectives, setSelectedSocialContextElectives] = useState({});
  const [selectedProbStatElectives, setSelectedProbStatElectives] = useState({});
  const [selectedBreadthElectives, setSelectedBreadthElectives] = useState({});
  const [selectedMNSElectives, setSelectedMNSElectives] = useState({});
  const [selectedengCSElectives, setSelectedengCSElectives] = useState({});

  // Toggle a course's completed state
  const toggleCourse = (courseId) => {
    const key = `${selectedMajor}_${courseId}`;
    setCompletedCourses(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Generic handler wrapper for elective selections
  const handleSelectWrapper = (stateSetter) => (slotKey, courseCode) => {
    stateSetter(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  // Handlers for each elective type
  const handleHassSelect = handleSelectWrapper(setSelectedHassCourses);
  const handleEthicSocialSelect = handleSelectWrapper(setSelectedEthicSocialCourses);
  const handleSystemElectiveSelect = handleSelectWrapper(setSelectedSystemElectives);
  const handlePhysBioChemSelect = handleSelectWrapper(setSelectedPhysBioChemElectives);
  const handleKcsElectiveSelect = handleSelectWrapper(setSelectedKcsElectives);
  const handleJcsElectiveSelect = handleSelectWrapper(setSelectedJcsElectives);
  const handleLcsElectiveSelect = handleSelectWrapper(setSelectedLcsElectives);
  const handleSocialContextSelect = handleSelectWrapper(setSelectedSocialContextElectives);
  const handleProbStatSelect = handleSelectWrapper(setSelectedProbStatElectives);
  const handleBreadthElectiveSelect = handleSelectWrapper(setSelectedBreadthElectives);
  const handleMNSElectiveSelect = handleSelectWrapper(setSelectedMNSElectives);
  const handleengCSElectiveSelect = handleSelectWrapper(setSelectedengCSElectives);

  // Reset state when the major changes
  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
    setCompletedCourses({});
    setSelectedHassCourses({});
    setSelectedEthicSocialCourses({});
    setSelectedSystemElectives({});
    setSelectedPhysBioChemElectives({});
    setSelectedKcsElectives({});
    setSelectedJcsElectives({});
    setSelectedLcsElectives({});
    setSelectedSocialContextElectives({});
    setSelectedProbStatElectives({});
    setSelectedBreadthElectives({});
    setSelectedMNSElectives({});
    setSelectedengCSElectives({});
  };

  const currentMajorData = majorsData[selectedMajor];

  const parseCredit = (credit) => {
    if (typeof credit === "number") return credit;
    const num = parseFloat(credit);
    return isNaN(num) ? 0 : num;
  };

  // Determine if a course uses an elective dropdown and return its config.
  const getElectiveConfig = (course) => {
    if (
      course.code.includes("Science Elective") ||
      course.code.includes("Humanities Elective")
    ) {
      return {
        options: hassOptions,
        selectedCourses: selectedHassCourses,
        onSelect: handleHassSelect,
        placeholder: "Select a HASS course",
        findSelected: (code) => extractedCourses.find(c => c.code === code),
      };
    } else if (
      course.section === "HASS" &&
      course.code === "Ethics & Social Context Elec."
    ) {
      return {
        options: ethicSocialOptions,
        selectedCourses: selectedEthicSocialCourses,
        onSelect: handleEthicSocialSelect,
        placeholder: "Select an Ethics course",
        findSelected: (code) => ethicSocialCourses.find(c => c.code === code),
      };
    } else if (course.code.includes("Social Cont")) {
      return {
        options: SocialContextOptions,
        selectedCourses: selectedSocialContextElectives,
        onSelect: handleSocialContextSelect,
        placeholder: "Select a Social Context Course",
        findSelected: (code) => SocialContextOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("Systems Elective")) {
      return {
        options: systemElectivesOptions,
        selectedCourses: selectedSystemElectives,
        onSelect: handleSystemElectiveSelect,
        placeholder: "Select a System Elective",
        findSelected: (code) => systemElectivesOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("BIO-CHEM-PHY")) {
      return {
        options: physBioChemOptions,
        selectedCourses: selectedPhysBioChemElectives,
        onSelect: handlePhysBioChemSelect,
        placeholder: "Select a Phys-Bio-Chem course",
        findSelected: (code) => physBioChemOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("CS Elective (k)")) {
      return {
        options: kCSElectiveOptions,
        selectedCourses: selectedKcsElectives,
        onSelect: handleKcsElectiveSelect,
        placeholder: "Select a CS Elective (k)",
        findSelected: (code) => kCSElectiveOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("CS Elective (j)")) {
      return {
        options: jCSElectiveOptions,
        selectedCourses: selectedJcsElectives,
        onSelect: handleJcsElectiveSelect,
        placeholder: "Select a CS Elective (j)",
        findSelected: (code) => jCSElectiveOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("CS Elective (l)")) {
      return {
        options: lCSElectiveOptions,
        selectedCourses: selectedLcsElectives,
        onSelect: handleLcsElectiveSelect,
        placeholder: "Select a CS Elective (l)",
        findSelected: (code) => lCSElectiveOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("Prob & Stat Elective")) {
      return {
        options: probStatOptions,
        selectedCourses: selectedProbStatElectives,
        onSelect: handleProbStatSelect,
        placeholder: "Select a Prob & Stat Elective",
        findSelected: (code) => probStatOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("Breadth Elective")) {
      return {
        options: breadthElectiveOptions,
        selectedCourses: selectedBreadthElectives,
        onSelect: handleBreadthElectiveSelect,
        placeholder: "Select a Breadth Elective",
        findSelected: (code) => breadthElectiveOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("MNS Elective")) {
      return {
        options: mnsElectiveOptions,
        selectedCourses: selectedMNSElectives,
        onSelect: handleMNSElectiveSelect,
        placeholder: "Select an MNS Elective",
        findSelected: (code) => mnsElectiveOptions.find(c => c.value === code),
      };
    } else if (course.code.includes("ES 2")) {
      return {
        options: engCSOptions,
        selectedCourses: selectedengCSElectives,
        onSelect: handleengCSElectiveSelect,
        placeholder: "Select an ENG-CS Elective",
        findSelected: (code) => engCSOptions.find(c => c.value === code),
      };
    }
    return null;
  };

  const getCompletedCredit = (course) => {
    const key = `${selectedMajor}_${course.id}`;
    if (!completedCourses[key]) return 0;
    const config = getElectiveConfig(course);
    if (config) {
      const selectedCode = config.selectedCourses[key];
      if (selectedCode) {
        const selectedCourse = config.findSelected(selectedCode);
        return selectedCourse ? selectedCourse.credit : 0;
      }
      return 0;
    }
    return parseCredit(course.credit);
  };

  const computeTotalCompletedCredits = () => {
    let sum = 0;
    currentMajorData.forEach(section => {
      section.courses.forEach(course => {
        sum += getCompletedCredit(course);
      });
    });
    return sum;
  };

  const totalCompleted = computeTotalCompletedCredits();
  const remainingCredits = 120 - totalCompleted;

  const handleSubmit = () => {
    navigate('/results', { 
      state: { 
        selectedMajor, 
        completedCourses, 
        majorCourses: majorsData[selectedMajor],
        selectedHassCourses,
        selectedEthicSocialCourses,
        selectedSystemElectives,
        selectedPhysBioChemElectives,
        selectedKcsElectives,
        selectedJcsElectives,
        selectedLcsElectives,
        selectedSocialContextElectives,
        selectedProbStatElectives,
        selectedBreadthElectives,
        selectedMNSElectives,
      } 
    });
  };

  return (
    <div className="app-container">
      <h1>Tufts Course Tracker</h1>
      <h2>
        Credits Remaining: {remainingCredits} (Completed: {totalCompleted} / 120)
      </h2>
      <div className="select-major">
        <label>
          Select Major:{' '}
          <select value={selectedMajor} onChange={handleMajorChange}>
            {Object.keys(majorsData).map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {currentMajorData.map((section, sectionIndex) => {
            const sectionCompleted = section.courses.reduce(
              (acc, course) => acc + getCompletedCredit(course),
              0
            );
            const required = parseFloat(section.subtotal);
            const sectionRemaining = Math.max(0, required - sectionCompleted);

            return (
              <React.Fragment key={sectionIndex}>
                <tr className="section-header">
                  <td colSpan="4">
                    {section.section} - Remaining: {sectionRemaining}
                  </td>
                </tr>
                {section.courses.map((course) => {
                  const key = `${selectedMajor}_${course.id}`;
                  const electiveConfig = getElectiveConfig(course);
                  if (electiveConfig) {
                    const selectedCode = electiveConfig.selectedCourses[key] || "";
                    return (
                      <ElectiveCourseRow
                        key={key}
                        course={course}
                        courseKey={key}
                        completed={!!completedCourses[key]}
                        toggleCourse={toggleCourse}
                        options={electiveConfig.options}
                        selectedCourses={electiveConfig.selectedCourses}
                        selectedValue={selectedCode}
                        handleSelect={electiveConfig.onSelect}
                        placeholder={electiveConfig.placeholder}
                        getSelectedCourseObj={(code) => electiveConfig.findSelected(code)}
                      />
                    );
                  }
                  return (
                    <tr key={key}>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={!!completedCourses[key]}
                          onChange={() => toggleCourse(course.id)}
                        />
                      </td>
                      <td>{course.code}</td>
                      <td>{course.title}</td>
                      <td>{course.credit}</td>
                    </tr>
                  );
                })}
                <tr className="section-footer">
                  <td colSpan="4">
                    {`Remaining: ${Math.max(
                      0,
                      parseFloat(section.subtotal) -
                        section.courses.reduce((acc, course) => acc + getCompletedCredit(course), 0)
                    )}`}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="button-container">
  <button
    onClick={() => navigate("/schedule", {})}
    className="button button-schedule"
  >
    Go to Schedule Entry
  </button>
  <button 
    onClick={handleSubmit} 
    className="button button-submit"
  >
    Submit Progress
  </button>
</div>
    </div>
  );
}

// MAIN APP ROUTE STRUCTURE
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CourseEntry />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/schedule" element={<ScheduleEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
