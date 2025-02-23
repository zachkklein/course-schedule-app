import React, { useState, useEffect } from "react";
import Select from "react-select";
import FractionSlider from "./slider";
import { useNavigate } from "react-router-dom";

// Import all elective options
import extractedCourses from "./extracted_courses.json";
import ethicSocialCourses from "./ethic_social.json";
import systemElectivesData from "./system_electives.json";
import physBioChem from "./phys_bio_chem.json";
import SocialContextData from "./cs_social_context.json";
import kCSElectiveData from "./k_cs_elective.json";
import jCSElectiveData from "./j_cs_electives.json";
import lCSElectiveData from "./l_cs_electives.json";
import probStatData from "./prob_stat.json";
import breadthElectiveData from "./breadth_elective.json";
import mnsElectiveData from "./mns_electives.json";

import computerScienceData from "./computerScienceData";
import "./Schedule.css";

// **Helper Function to Add Source Field**
const mapCoursesWithSource = (courses, source) =>
  courses.map((course) => ({
    value: course.code,
    label: `${course.code} - ${course.title}`,
    displayLabel: course.code, // Display only course code when selected
    credits: course.credit,
    source,
  }));

// **All Courses Combined**
const allCourses = [
  { value: "", label: "No Selection", displayLabel: "No Selection", credits: 0 },
  ...mapCoursesWithSource(extractedCourses, "extracted_courses"),
  ...mapCoursesWithSource(ethicSocialCourses, "ethic_social"),
  ...mapCoursesWithSource(systemElectivesData, "system_electives"),
  ...mapCoursesWithSource(physBioChem, "phys_bio_chem"),
  ...mapCoursesWithSource(SocialContextData, "cs_social_context"),
  ...mapCoursesWithSource(
    computerScienceData.flatMap((section) => section.courses),
    "computer_science"
  ),
  ...mapCoursesWithSource(kCSElectiveData, "k_cs_elective"),
  ...mapCoursesWithSource(jCSElectiveData, "j_cs_electives"),
  ...mapCoursesWithSource(lCSElectiveData, "l_cs_electives"),
  ...mapCoursesWithSource(probStatData, "prob_stat"),
  ...mapCoursesWithSource(breadthElectiveData, "breadth_elective"),
  ...mapCoursesWithSource(mnsElectiveData, "mns_electives"),
];

// **Schedule Structure for 4 Years**
const initialSchedule = {
  "First Year": { Fall: Array(5).fill(null), Spring: Array(5).fill(null) },
  "Second Year": { Fall: Array(5).fill(null), Spring: Array(5).fill(null) },
  "Third Year": { Fall: Array(5).fill(null), Spring: Array(5).fill(null) },
  "Fourth Year": { Fall: Array(5).fill(null), Spring: Array(5).fill(null) },
};

// **Fixed Sliders Component**
const FixedSliders = ({ creditCounts }) => {
  return (
    <div className="fixed-sliders">
      <div className="slider-inner">
        {[
          { label: "HASS", value: creditCounts.HASS, max: 24 },
          { label: "Eng", value: creditCounts.Engineering, max: 6 },
          { label: "Breadth", value: creditCounts.BreadthElectives, max: 6 },
          { label: "MNS", value: creditCounts.MathematicsAndScience, max: 34 },
          { label: "CS Core", value: creditCounts.ComputerScienceCore, max: 49 },
        ].map((item, index) => (
          <div key={index} className="slider-item">
            <strong>{item.label}</strong>
            <FractionSlider numerator={item.value} denominator={item.max} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ScheduleEntry = () => {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [creditCounts, setCreditCounts] = useState({
    MathematicsAndScience: 0,
    HASS: 0,
    Engineering: 0,
    BreadthElectives: 0,
    ComputerScienceCore: 0,
  });

  const navigate = useNavigate();

  // **Handle Course Selection**
  const handleCourseSelect = (year, term, index, selectedOption) => {
    console.log(`Selected course: ${selectedOption ? selectedOption.value : "None"}`);

    setSchedule((prevSchedule) => {
      const updatedSchedule = { ...prevSchedule };
      updatedSchedule[year][term][index] =
        selectedOption && selectedOption.value ? selectedOption : null;
      return updatedSchedule;
    });
  };

  // **Track credits dynamically**
  useEffect(() => {
    let creditTotals = {
      MathematicsAndScience: 0,
      HASS: 0,
      Engineering: 0,
      BreadthElectives: 0,
      ComputerScienceCore: 0,
    };

    Object.values(schedule).forEach((year) => {
      Object.values(year).forEach((semester) => {
        semester.forEach((course) => {
          if (course) {
            const courseCode = course.value.trim().toUpperCase();
            const credits =
              typeof course.credits === "number"
                ? course.credits
                : parseFloat(course.credits) || 0;

            if (
              courseCode.startsWith("MATH") ||
              courseCode.startsWith("BIO") ||
              courseCode.startsWith("CHEM") ||
              courseCode.startsWith("PHYS")
            ) {
              creditTotals.MathematicsAndScience += credits;
            } else if (course.source === "extracted_courses") {
              creditTotals.HASS += credits;
            } else if (courseCode.startsWith("CS") || courseCode.includes("CS ELECTIVE")) {
              creditTotals.ComputerScienceCore += credits;
            } else if (courseCode.startsWith("EN") || courseCode.includes("ENGINEERING")) {
              creditTotals.Engineering += credits;
            } else if (courseCode.includes("BREADTH")) {
              creditTotals.BreadthElectives += credits;
            }
          }
        });
      });
    });

    setCreditCounts(creditTotals);
  }, [schedule]);

  return (
    <>
      <FixedSliders creditCounts={creditCounts} />
      <div className="app-container" style={{ paddingTop: "80px" }}>
        <h1>Course Schedule Planner</h1>
        <h3>Plan your semesters while tracking progress towards your degree!</h3>

        <div className="schedule-table-container">
          <table className="course-table">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Year</th>
                <th style={{ width: "40%" }}>Fall</th>
                <th style={{ width: "40%" }}>Spring</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(schedule).map(([year, terms]) => (
                <tr key={year}>
                  <td>
                    <strong>{year}</strong>
                  </td>
                  {["Fall", "Spring"].map((term) => (
                    <td key={term} className="term-cell">
                      {terms[term].map((_, index) => (
                        <Select
                          key={index}
                          options={allCourses}
                          value={terms[term][index] || "Choose a course"}
                          onChange={(option) => handleCourseSelect(year, term, index, option)}
                          getOptionLabel={(e) => e.displayLabel}
                          formatOptionLabel={(e) =>
                            `${e.value} - ${e.label.split(" - ")[1]}`
                          }
                          placeholder="Choose a course"
                        />
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Back to Home Button */}
        <div className="back-button-container">
          <button onClick={() => navigate("/")} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ScheduleEntry;
