import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ResultsPage from './resultsPage';
import ScrollToTop from './switchScroll';
import ScheduleEntry from './ScheduleEntry';


// Import each major’s data from its own file.
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

// Import JSON data for various electives.
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
// New: Import the MNS Elective data.
import mnsElectiveData from './mns_electives.json';

// Group all majors together.
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



// Prepare options for react-select for each elective type.
const hassOptions = extractedCourses.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const ethicSocialOptions = ethicSocialCourses.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const systemElectivesOptions = systemElectivesData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const physBioChemOptions = physBioChem.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const kCSElectiveOptions = kCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const jCSElectiveOptions = jCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const lCSElectiveOptions = lCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const SocialContextOptions = SocialContextData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const probStatOptions = probStatData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

const breadthElectiveOptions = breadthElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

// New: Prepare options for react-select for MNS electives.
const mnsElectiveOptions = mnsElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
  code: course.code,
  title: course.title,
  credit: course.credit,
}));

// Custom SingleValue component to display only the course code.
const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props.data.code}
  </components.SingleValue>
);

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


  //const [selectedMajor, setSelectedMajor] = useState("Computer Science");
  //const [completedCourses, setCompletedCourses] = useState({});
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
  // New: State for MNS Electives.
  const [selectedMNSElectives, setSelectedMNSElectives] = useState({});

  const toggleCourse = (courseId) => {
    const key = `${selectedMajor}_${courseId}`;
    setCompletedCourses(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handlers for each dropdown type.
  const handleHassSelect = (slotKey, courseCode) => {
    setSelectedHassCourses(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleEthicSocialSelect = (slotKey, courseCode) => {
    setSelectedEthicSocialCourses(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleSystemElectiveSelect = (slotKey, courseCode) => {
    setSelectedSystemElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handlePhysBioChemSelect = (slotKey, courseCode) => {
    setSelectedPhysBioChemElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleKcsElectiveSelect = (slotKey, courseCode) => {
    setSelectedKcsElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleJcsElectiveSelect = (slotKey, courseCode) => {
    setSelectedJcsElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleLcsElectiveSelect = (slotKey, courseCode) => {
    setSelectedLcsElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleSocialContextSelect = (slotKey, courseCode) => {
    setSelectedSocialContextElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleProbStatSelect = (slotKey, courseCode) => {
    setSelectedProbStatElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  const handleBreadthElectiveSelect = (slotKey, courseCode) => {
    setSelectedBreadthElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

  // New: Handler for MNS Electives.
  const handleMNSElectiveSelect = (slotKey, courseCode) => {
    setSelectedMNSElectives(prev => ({ ...prev, [slotKey]: courseCode }));
  };

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
  };
  const submitButton = () => {
    navigate('/results', { state: { selectedMajor, completedCourses } });
  }
  

  const currentMajorData = majorsData[selectedMajor];

  const parseCredit = (credit) => {
    if (typeof credit === "number") return credit;
    const num = parseFloat(credit);
    return isNaN(num) ? 0 : num;
  };

  // Compute global completed credits.
  const computeTotalCompletedCredits = () => {
    let sum = 0;
    currentMajorData.forEach(section => {
      section.courses.forEach(course => {
        const key = `${selectedMajor}_${course.id}`;
        if (completedCourses[key]) {
          if (
            section.section === "HASS" &&
            course.code.includes("Elective") &&
            course.code !== "Ethics & Social Context Elec." &&
            !course.code.includes("Social Cont")
          ) {
            const selectedCode = selectedHassCourses[key];
            if (selectedCode) {
              const selCourse = extractedCourses.find(c => c.code === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (section.section === "HASS" && course.code === "Ethics & Social Context Elec.") {
            const selectedCode = selectedEthicSocialCourses[key];
            if (selectedCode) {
              const selCourse = ethicSocialCourses.find(c => c.code === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("Social Cont")) {
            const selectedCode = selectedSocialContextElectives[key] || "";
            const selCourse = SocialContextOptions.find(c => c.value === selectedCode);
            if (selCourse) sum += selCourse.credit;
          } else if (course.code.includes("Systems Elective")) {
            const selectedCode = selectedSystemElectives[key];
            if (selectedCode) {
              const selCourse = systemElectivesOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("BIO-CHEM-PHY")) {
            const selectedCode = selectedPhysBioChemElectives[key];
            if (selectedCode) {
              const selCourse = physBioChemOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("CS Elective (k)")) {
            const selectedCode = selectedKcsElectives[key];
            if (selectedCode) {
              const selCourse = kCSElectiveOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("CS Elective (j)")) {
            const selectedCode = selectedJcsElectives[key];
            if (selectedCode) {
              const selCourse = jCSElectiveOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("CS Elective (l)")) {
            const selectedCode = selectedLcsElectives[key];
            if (selectedCode) {
              const selCourse = lCSElectiveOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("Prob & Stat Elective")) {
            const selectedCode = selectedProbStatElectives[key];
            if (selectedCode) {
              const selCourse = probStatOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else if (course.code.includes("Breadth Elective")) {
            const selectedCode = selectedBreadthElectives[key];
            if (selectedCode) {
              const selCourse = breadthElectiveOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          }
          // New: MNS Elective branch.
          else if (course.code.includes("MNS Elective")) {
            const selectedCode = selectedMNSElectives[key];
            if (selectedCode) {
              const selCourse = mnsElectiveOptions.find(c => c.value === selectedCode);
              if (selCourse) sum += selCourse.credit;
            }
          } else {
            sum += parseCredit(course.credit);
          }
        }
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
    <div style={{ padding: '20px' }}>
      <h1>Course Tracker</h1>
      <h2>
        Credits Remaining: {remainingCredits} (Completed: {totalCompleted} / 120)
      </h2>
      <div style={{ marginBottom: '20px' }}>
        <label>
          Select Major:{" "}
          <select value={selectedMajor} onChange={handleMajorChange}>
            {Object.keys(majorsData).map(major => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table
        border="1"
        cellPadding="5"
        cellSpacing="0"
        style={{ width: '100%', borderCollapse: 'collapse' }}
      >
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Completed</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {currentMajorData.map((section, sectionIndex) => {
            // Compute section remaining credits.
            let sectionCompleted = 0;
            section.courses.forEach(course => {
              const key = `${selectedMajor}_${course.id}`;
              if (completedCourses[key]) {
                if (
                  section.section === "HASS" &&
                  course.code.includes("Elective") &&
                  course.code !== "Ethics & Social Context Elec." &&
                  !course.code.includes("Social Cont")
                ) {
                  const selectedCode = selectedHassCourses[key];
                  if (selectedCode) {
                    const selCourse = extractedCourses.find(c => c.code === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (section.section === "HASS" && course.code === "Ethics & Social Context Elec.") {
                  const selectedCode = selectedEthicSocialCourses[key];
                  if (selectedCode) {
                    const selCourse = ethicSocialCourses.find(c => c.code === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("Social Cont")) {
                  const selectedCode = selectedSocialContextElectives[key] || "";
                  const selCourse = SocialContextOptions.find(c => c.value === selectedCode);
                  if (selCourse) sectionCompleted += selCourse.credit;
                } else if (course.code.includes("Systems Elective")) {
                  const selectedCode = selectedSystemElectives[key];
                  if (selectedCode) {
                    const selCourse = systemElectivesOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("BIO-CHEM-PHY")) {
                  const selectedCode = selectedPhysBioChemElectives[key];
                  if (selectedCode) {
                    const selCourse = physBioChemOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("CS Elective (k)")) {
                  const selectedCode = selectedKcsElectives[key];
                  if (selectedCode) {
                    const selCourse = kCSElectiveOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("CS Elective (j)")) {
                  const selectedCode = selectedJcsElectives[key];
                  if (selectedCode) {
                    const selCourse = jCSElectiveOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("CS Elective (l)")) {
                  const selectedCode = selectedLcsElectives[key];
                  if (selectedCode) {
                    const selCourse = lCSElectiveOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("Prob & Stat Elective")) {
                  const selectedCode = selectedProbStatElectives[key];
                  if (selectedCode) {
                    const selCourse = probStatOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else if (course.code.includes("Breadth Elective")) {
                  const selectedCode = selectedBreadthElectives[key];
                  if (selectedCode) {
                    const selCourse = breadthElectiveOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } 
                // New: MNS Elective branch.
                else if (course.code.includes("MNS Elective")) {
                  const selectedCode = selectedMNSElectives[key];
                  if (selectedCode) {
                    const selCourse = mnsElectiveOptions.find(c => c.value === selectedCode);
                    if (selCourse) sectionCompleted += selCourse.credit;
                  }
                } else {
                  sectionCompleted += parseCredit(course.credit);
                }
              }
            });
            const required = parseFloat(section.subtotal);
            const sectionRemaining = Math.max(0, required - sectionCompleted);
            return (
              <React.Fragment key={sectionIndex}>
                <tr style={{ backgroundColor: '#ddd' }}>
                  <td colSpan="4">
                    <strong>{section.section}</strong> - Remaining: {sectionRemaining}
                  </td>
                </tr>
                {section.courses.map(course => {
                  const key = `${selectedMajor}_${course.id}`;
                  // HASS electives (non-ethics)
                  if (section.section === "HASS" && course.code.includes("Elective") && course.code !== "Ethics & Social Context Elec." && !course.code.includes("Social Cont")) {
                    const selectedCode = selectedHassCourses[key] || "";
                    const selectedCourseObj = extractedCourses.find(c => c.code === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={hassOptions}
                            value={hassOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleHassSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a HASS course"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // Ethics & Social elective dropdown.
                  else if (section.section === "HASS" && course.code === "Ethics & Social Context Elec.") {
                    const selectedCode = selectedEthicSocialCourses[key] || "";
                    const selectedCourseObj = ethicSocialCourses.find(c => c.code === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={ethicSocialOptions}
                            value={ethicSocialOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleEthicSocialSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select an Ethics course"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // Social Context elective dropdown.
                  else if (course.code.includes("Social Cont")) {
                    const selectedCode = selectedSocialContextElectives[key] || "";
                    const selectedCourseObj = SocialContextOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={SocialContextOptions}
                            value={SocialContextOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleSocialContextSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a Social Context Course"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // System Elective dropdown.
                  else if (course.code.includes("Systems Elective")) {
                    const selectedCode = selectedSystemElectives[key] || "";
                    const selectedCourseObj = systemElectivesOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={systemElectivesOptions}
                            value={systemElectivesOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleSystemElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a System Elective"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // Phys-Bio-Chem elective dropdown.
                  else if (course.code.includes("BIO-CHEM-PHY")) {
                    const selectedCode = selectedPhysBioChemElectives[key] || "";
                    const selectedCourseObj = physBioChemOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={physBioChemOptions}
                            value={physBioChemOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handlePhysBioChemSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a Phys-Bio-Chem course"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // CS Elective (k) dropdown.
                  else if (course.code.includes("CS Elective (k)")) {
                    const selectedCode = selectedKcsElectives[key] || "";
                    const selectedCourseObj = kCSElectiveOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={kCSElectiveOptions}
                            value={kCSElectiveOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleKcsElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a CS Elective (k)"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // CS Elective (j) dropdown.
                  else if (course.code.includes("CS Elective (j)")) {
                    const selectedCode = selectedJcsElectives[key] || "";
                    const selectedCourseObj = jCSElectiveOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={jCSElectiveOptions}
                            value={jCSElectiveOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleJcsElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a CS Elective (j)"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // CS Elective (l) dropdown.
                  else if (course.code.includes("CS Elective (l)")) {
                    const selectedCode = selectedLcsElectives[key] || "";
                    const selectedCourseObj = lCSElectiveOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={lCSElectiveOptions}
                            value={lCSElectiveOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleLcsElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a CS Elective (l)"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // Prob & Stat elective dropdown.
                  else if (course.code.includes("Prob & Stat Elective")) {
                    const selectedCode = selectedProbStatElectives[key] || "";
                    const selectedCourseObj = probStatOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={probStatOptions}
                            value={probStatOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleProbStatSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a Prob & Stat Elective"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // New: Breadth Elective dropdown.
                  else if (course.code.includes("Breadth Elective")) {
                    const selectedCode = selectedBreadthElectives[key] || "";
                    const selectedCourseObj = breadthElectiveOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={breadthElectiveOptions}
                            value={breadthElectiveOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleBreadthElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select a Breadth Elective"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  }
                  // New: MNS Elective dropdown.
                  else if (course.code.includes("MNS Elective")) {
                    const selectedCode = selectedMNSElectives[key] || "";
                    const selectedCourseObj = mnsElectiveOptions.find(c => c.value === selectedCode);
                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={!!completedCourses[key]} 
                            onChange={() => toggleCourse(course.id)} 
                          />
                        </td>
                        <td style={{ width: '200px' }}>
                          <Select
                            options={mnsElectiveOptions}
                            value={mnsElectiveOptions.find(opt => opt.value === selectedCode)}
                            onChange={(option) => handleMNSElectiveSelect(key, option.value)}
                            components={{ SingleValue }}
                            placeholder="Select an MNS Elective"
                          />
                        </td>
                        <td>{selectedCourseObj ? selectedCourseObj.title : ""}</td>
                        <td>{selectedCourseObj ? selectedCourseObj.credit : ""}</td>
                      </tr>
                    );
                  } else {
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
                  }
                })}
                <tr style={{ fontStyle: 'italic' }}>
                  <td colSpan="4">
                    {(() => {
                      let sectionCompleted = 0;
                      section.courses.forEach(course => {
                        const key = `${selectedMajor}_${course.id}`;
                        if (completedCourses[key]) {
                          if (
                            section.section === "HASS" &&
                            course.code.includes("Elective") &&
                            course.code !== "Ethics & Social Context Elec." &&
                            !course.code.includes("Social Cont")
                          ) {
                            const selectedCode = selectedHassCourses[key];
                            if (selectedCode) {
                              const selCourse = extractedCourses.find(c => c.code === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (section.section === "HASS" && course.code === "Ethics & Social Context Elec.") {
                            const selectedCode = selectedEthicSocialCourses[key];
                            if (selectedCode) {
                              const selCourse = ethicSocialCourses.find(c => c.code === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("Social Cont")) {
                            const selectedCode = selectedSocialContextElectives[key] || "";
                            const selCourse = SocialContextOptions.find(c => c.value === selectedCode);
                            if (selCourse) sectionCompleted += selCourse.credit;
                          } else if (course.code.includes("Systems Elective")) {
                            const selectedCode = selectedSystemElectives[key];
                            if (selectedCode) {
                              const selCourse = systemElectivesOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("BIO-CHEM-PHY")) {
                            const selectedCode = selectedPhysBioChemElectives[key];
                            if (selectedCode) {
                              const selCourse = physBioChemOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("CS Elective (k)")) {
                            const selectedCode = selectedKcsElectives[key];
                            if (selectedCode) {
                              const selCourse = kCSElectiveOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("CS Elective (j)")) {
                            const selectedCode = selectedJcsElectives[key];
                            if (selectedCode) {
                              const selCourse = jCSElectiveOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("CS Elective (l)")) {
                            const selectedCode = selectedLcsElectives[key];
                            if (selectedCode) {
                              const selCourse = lCSElectiveOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("Prob & Stat Elective")) {
                            const selectedCode = selectedProbStatElectives[key];
                            if (selectedCode) {
                              const selCourse = probStatOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else if (course.code.includes("Breadth Elective")) {
                            const selectedCode = selectedBreadthElectives[key];
                            if (selectedCode) {
                              const selCourse = breadthElectiveOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          }
                          // New: MNS Elective branch.
                          else if (course.code.includes("MNS Elective")) {
                            const selectedCode = selectedMNSElectives[key];
                            if (selectedCode) {
                              const selCourse = mnsElectiveOptions.find(c => c.value === selectedCode);
                              if (selCourse) sectionCompleted += selCourse.credit;
                            }
                          } else {
                            sectionCompleted += parseCredit(course.credit);
                          }
                        }
                      });
                      const required = parseFloat(section.subtotal);
                      const remaining = Math.max(0, required - sectionCompleted);
                      return `Remaining: ${remaining}`;
                    })()}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
        {/* Add the Schedule Entry Button */}
        <button
  onClick={() =>
    navigate("/schedule", {
    })
  }
  style={{
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    marginRight: "10px",
  }}
>
  Go to Schedule Entry
</button>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '16px'
        }}>
        Submit Progress

      </button>
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
