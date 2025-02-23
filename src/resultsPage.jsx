import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import FractionSlider from "./slider"; // Ensure correct path

// If not already imported, import your elective options here.
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

// Build options arrays (adjust formatting as needed)
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
// Updated to always show the dropdown without a toggle button.
function RequirementDropdown({ label, options, selectedValue, onSelect }) {
  return (
    <div style={{ marginTop: '5px' }}>
      <Select
        options={options}
        value={options.find(opt => opt.value === selectedValue)}
        onChange={(option) => onSelect(option.value)}
        placeholder={`View Options For ${label}`}
      />
    </div>
  );
}

// Helper function to decide which options array to use based on the course requirement.
function getOptionsForCourse(course) {
  // Check based on course code and/or section.
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
  // Default: return an empty array if no matching requirement found.
  return [];
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: '"Verdana", sans-serif',
    backgroundColor: '#E6F7FF', // Soft light blue background
    minHeight: '100vh',
  },
  header: {
    color: '#0a1f44', // Navy blue
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    border: '2px solid #0a1f44', // Navy blue border
  },
  sectionHeader: {
    backgroundColor: '#B3C7E6', // Light complementary blue
    padding: '12px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  courseList: {
    listStyleType: 'none',
    padding: '10px',
  },
  finishedCourse: {
    marginBottom: '5px',
    color: '#6c757d',
    fontWeight: 'bold',
  },
  remainingLabel: {
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#0a1f44', // Navy blue
  },
  remainingCourse: {
    marginBottom: '15px',
  },
  separator: {
    margin: '10px 0',
    borderBottom: '1px solid #bbb',
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#472e02 ', // Brown background
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#774e05 ', // Lighter brown on hover
  },
};

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the passed data from CourseEntry
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

  // Handle case where no data is passed
  if (!selectedMajor || !completedCourses || !majorCourses) {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Results Page</h1>
        <p>No course selection data found. Please go back and enter your courses.</p>
        <button
          onClick={() => navigate('/')}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}> {selectedMajor} Degree Progress </h1>

      {/* Loop through each section */}
      {majorCourses.map((section, sectionIndex) => {
        const totalCourses = section.courses.length;
        const completedCount = section.courses.reduce((count, course) => {
          const key = `${selectedMajor}_${course.id}`;
          return completedCourses[key] ? count + 1 : count;
        }, 0);

        const finishedCourses = section.courses.filter(course => completedCourses[`${selectedMajor}_${course.id}`]);
        const remainingCourses = section.courses.filter(course => !completedCourses[`${selectedMajor}_${course.id}`]);

        return (
          <div key={sectionIndex} style={styles.section}>
            {/* Section Header with Completion Count and FractionSlider */}
            <div style={styles.sectionHeader}>
              <h2 style={{ margin: 0 }}>{section.section}</h2>
              <div style={{ width: '180px', marginLeft: '10px' }}>
                <FractionSlider numerator={completedCount} denominator={totalCourses} speed={2000} />
              </div>
            </div>

            <ul style={styles.courseList}>
              {/* Finished Courses - Greyed Out */}
              {finishedCourses.map(course => {
                const key = `${selectedMajor}_${course.id}`;
                return (
                  <li key={key} style={styles.finishedCourse}>
                    {course.code} - {course.title}
                  </li>
                );
              })}

              {/* Separator */}
              {finishedCourses.length > 0 && remainingCourses.length > 0 && <li style={styles.separator}></li>}

              {/* Remaining Courses Label */}
              {remainingCourses.length > 0 && <h3 style={styles.remainingLabel}>Remaining Requirements:</h3>}

              {/* Remaining Courses with always-visible dropdowns */}
              {remainingCourses.map(course => {
                const key = `${selectedMajor}_${course.id}`;
                // Get the options for this particular requirement based on its course code/section.
                const optionsForCourse = getOptionsForCourse({ ...course, section: section.section });
                return (
                  <li key={key} style={styles.remainingCourse}>
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

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Go Back and Edit
      </button>
    </div>
  );
}

export default ResultsPage;
