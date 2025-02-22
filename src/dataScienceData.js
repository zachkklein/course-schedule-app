// dataScienceData.js

const dataScienceData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "≥42",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        {
          id: "MATH34_39",
          code: "MATH 34 / MATH 39",
          title: "Calculus II or Honors Calculus I-II",
          credit: 4,
        },
        {
          id: "MATH42_44",
          code: "MATH 42 / MATH 44",
          title: "Calculus III or Honors Calculus III",
          credit: 4,
        },
        {
          id: "MATHCS61",
          code: "MATH/CS 61",
          title: "Discrete Mathematics or MATH 65 Foundations of higher mathematics",
          credit: 3,
        },
        {
          id: "MATH70_72",
          code: "MATH 70 / MATH 72",
          title: "Linear Algebra or Abstract Linear Alg.",
          credit: 3,
        },
        {
          id: "PROB_ELECTIVE",
          code: "Probability Elective (a)",
          title: "",
          credit: "3-4",
        },
        { id: "MATH166", code: "MATH 166", title: "Statistics", credit: 3 },
        {
          id: "BCP_ELECTIVE1",
          code: "BIO-CHEM-PHY elective (b)",
          title: "",
          credit: 5,
        },
        {
          id: "BCP_ELECTIVE2",
          code: "BIO-CHEM-PHY elective (b)",
          title: "",
          credit: 5,
        },
        {
          id: "BCP_DEPTH",
          code: "BIO-CHEM-PHY Depth Elective (c)",
          title: "",
          credit: 5,
        },
        {
          id: "NS_ELECTIVE",
          code: "NS Elective (d)",
          title: "",
          credit: "≥3",
        },
      ],
    },
    {
      section: "HASS",
      subtotal: "≥24",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        {
          id: "HASS_HUM",
          code: "Humanities Elective (e)",
          title: "",
          credit: "≥3",
        },
        {
          id: "HASS_SOC",
          code: "Social Science Elective (f)",
          title: "",
          credit: "≥3",
        },
        {
          id: "HASS_ETHICS",
          code: "Ethics & Social Context Elec. (g)",
          title: "",
          credit: "3-4",
        },
      ],
    },
    {
      section: "Engineering",
      subtotal: "≥6",
      courses: [
        { id: "EN1", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        {
          id: "ES2",
          code: "ES 2",
          title: "Intro. Computing in Eng. or ENG-CS Elective (i)",
          credit: "≥3",
        },
      ],
    },
    {
      section: "Data Science Core",
      subtotal: "≥40",
      courses: [
        { id: "CS11", code: "CS 11", title: "Intro. Comp. Sci.", credit: 4 },
        { id: "CS15", code: "CS 15", title: "Data Structures", credit: 4 },
        {
          id: "CS30_40",
          code: "CS 30 / CS 40",
          title:
            "Programming for Data Science OR Machine Structure & Assembly-Language Prog.",
          credit: "4-5",
        },
        {
          id: "CS135",
          code: "CS 135",
          title: "Intro Machine Learning & Data Mining",
          credit: 3,
        },
        {
          id: "CS136",
          code: "CS 136",
          title:
            "Stat. Pat. Recog. OR Num. Lin. Alg. OR Math. Aspects of Data Analysis",
          credit: "3-4",
        },
        { id: "CS160", code: "CS 160", title: "Algorithms", credit: 4 },
        {
          id: "DS_INFRA",
          code: "DS Infrast. & Systems Elec. (j)",
          title: "",
          credit: "≥3",
        },
        {
          id: "DATA_ANALYSIS",
          code: "Data Anal. Interfaces Elec. (k)",
          title: "",
          credit: "≥3",
        },
        {
          id: "COMP_THEORY",
          code: "Comp & Theor. Asp. Elec. (l)",
          title: "",
          credit: "≥3",
        },
        {
          id: "DS_ELECTIVE",
          code: "DS Elective (m)",
          title: "",
          credit: "≥3",
        },
        {
          id: "DS97",
          code: "DS 97",
          title: "Sr. Capstone Proj. I",
          credit: 3,
        },
        {
          id: "DS98",
          code: "DS 98",
          title: "Sr. Capstone Proj. II",
          credit: 3,
        },
      ],
    },
    {
      section: "Breadth Electives",
      subtotal: "≥9",
      courses: [
        {
          id: "Breadth",
          code: "Breadth Electives",
          title:
            "≥9 SHU of Breadth Electives are required for the degree. List courses below (see note n).",
          credit: "",
        },
      ],
    },
    {
      section: "Additional Courses",
      subtotal: "≥0",
      courses: [
        {
          id: "Additional",
          code: "Additional Courses",
          title:
            "List below additional courses needed to satisfy the credit requirements.",
          credit: "",
        },
      ],
    },
  ];
  
  export default dataScienceData;
  