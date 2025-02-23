import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import FractionSlider from "./slider"; // Ensure correct path
import './results.css'; // Import external CSS

// Import elective options
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

// Build options arrays
const hassOptions = extractedCourses.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const ethicSocialOptions = ethicSocialCourses.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const systemElectivesOptions = systemElectivesData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const physBioChemOptions = physBioChem.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const kCSElectiveOptions = kCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const jCSElectiveOptions = jCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const lCSElectiveOptions = lCSElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const SocialContextOptions = SocialContextData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const probStatOptions = probStatData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const breadthElectiveOptions = breadthElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

const mnsElectiveOptions = mnsElectiveData.map(course => ({
  value: course.code,
  label: `${course.code} - ${course.title}`,
}));

// A reusable dropdown component for a requirement.
function RequirementDropdown({ label, options, selectedValue, onSelect }) {
  return (
    <div className="requirement-dropdown">
      <Select
        options={options}
        value={options.find(opt => opt.value === selectedValue)}
        onChange={(option) => onSelect(option.value)}
        placeholder={`View Options For ${label}`}
      />
    </div>
  );
}

// Helper function to choose the correct options array based on a course's requirement.
function getOptionsForCourse(course) {
  if (course.section === "HASS") {
    if (course.code.includes("Elective") && course.code !== "Ethics & Social Context Elec." && !course.code.includes("Social Cont")) {
      return hassOptions;
    } else if (course.code === "Ethics & Social Context Elec.") {
      return ethicSocialOptions;
    } else if (course.code.includes("Social Cont")) {
      return SocialContextOptions;
    }
  }
  if (course.code.includes("Systems Elective")) {
    return systemElectivesOptions;
  }
  if (course.code.includes("BIO-CHEM-PHY")) {
    return physBioChemOptions;
  }
  if (course.code.includes("CS Elective (k)")) {
    return kCSElectiveOptions;
  }
  if (course.code.includes("CS Elective (j)")) {
    return jCSElectiveOptions;
  }
  if (course.code.includes("CS Elective (l)")) {
    return lCSElectiveOptions;
  }
  if (course.code.includes("Prob & Stat Elective")) {
    return probStatOptions;
  }
  if (course.code.includes("Breadth Elective")) {
    return breadthElectiveOptions;
  }
  if (course.code.includes("MNS Elective")) {
    return mnsElectiveOptions;
  }
  // Default: return an empty array if no matching requirement is found.
  return [];
}

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve passed data from the previous page.
  const { 
    selectedMajor, 
    completedCourses, 
    majorCourses,
    // (other states omitted for brevity)
  } = location.state || {};

  // Local state to hold dropdown selections for remaining requirements.
  const [selectedRequirements, setSelectedRequirements] = useState({});

  const handleRequirementSelect = (courseKey, courseCode) => {
    setSelectedRequirements(prev => ({ ...prev, [courseKey]: courseCode }));
  };

  // If no data is passed, inform the user.
  if (!selectedMajor || !completedCourses || !majorCourses) {
    return (
      <div className="app-container">
        <h1>Results Page</h1>
        <p>No course selection data found. Please go back and enter your courses.</p>
        <div className="back-button-container">
          <button onClick={() => navigate('/')} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>{selectedMajor} Degree Progress</h1>

      {majorCourses.map((section, sectionIndex) => {
        const totalCourses = section.courses.length;
        const completedCount = section.courses.reduce((count, course) => {
          const key = `${selectedMajor}_${course.id}`;
          return completedCourses[key] ? count + 1 : count;
        }, 0);

        const finishedCourses = section.courses.filter(course => completedCourses[`${selectedMajor}_${course.id}`]);
        const remainingCourses = section.courses.filter(course => !completedCourses[`${selectedMajor}_${course.id}`]);

        return (
          <div key={sectionIndex} className="results-section">
            <div className="results-section-header">
              <h2>{section.section}</h2>
              <div className="slider-container">
                <FractionSlider numerator={completedCount} denominator={totalCourses} speed={2000} />
              </div>
            </div>

            <ul className="results-course-list">
              {finishedCourses.length > 0 && (
                <h3 className="results-remaining-label">Completed Courses:</h3>
              )}
              {finishedCourses.map(course => {
                const key = `${selectedMajor}_${course.id}`;
                return (
                  
                  <li key={key} className="results-finished-course">
                    {course.code} - {course.title}
                  </li>
                );
              })}

              {finishedCourses.length > 0 && remainingCourses.length > 0 && (
                <li className="results-separator"></li>
              )}

              {remainingCourses.length > 0 && (
                <h3 className="results-remaining-label">Remaining Requirements:</h3>
              )}

              {remainingCourses.map(course => {
                const key = `${selectedMajor}_${course.id}`;
                const optionsForCourse = getOptionsForCourse({ ...course, section: section.section });
                return (
                  <li key={key} className="results-remaining-course">
                    <div>
                      {course.code} - {course.title}
                    </div>
                    {optionsForCourse.length > 0 && (
                      <RequirementDropdown 
                        label={course.code} 
                        options={optionsForCourse}
                        selectedValue={selectedRequirements[key] || ''}
                        onSelect={(courseCode) => handleRequirementSelect(key, courseCode)}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className="back-button-container">
        <button onClick={() => navigate('/')} className="back-button">
          Go Back and Edit
        </button>
      </div>
    </div>
  );
}

export default ResultsPage;
