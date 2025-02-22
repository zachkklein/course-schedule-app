// civilEngineeringData.js

const civilEngineeringData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "26",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        { id: "MATH51", code: "MATH 51", title: "Differential Equations", credit: 4 },
        { id: "CHEM1", code: "CHEM 1", title: "Gen. Chem. I w/ lab", credit: 5 },
        { id: "PHY11", code: "PHY 11", title: "Gen. Physics I w/ lab", credit: 5 },
      ],
    },
    {
      section: "Stewardship",
      subtotal: "9",
      courses: [
        { id: "CEE32", code: "CEE 32", title: "Eng. Sustain. & Resil. Soc.", credit: 3 },
        { id: "CEE52", code: "CEE 52", title: "Public Health Engineering", credit: 3 },
        { id: "CEE84", code: "CEE 84", title: "Resil. & Equitable Infrast.", credit: 3 },
      ],
    },
    {
      section: "Communication",
      subtotal: "13",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        { id: "EM51", code: "EM 51", title: "Engineering Management", credit: 3 },
        { id: "EM52", code: "EM 52", title: "Tech. & Mang. Commun.", credit: 3 },
        { id: "ES18", code: "ES 18", title: "CAD", credit: 4 },
      ],
    },
    {
      section: "HASS",
      subtotal: "≥9",
      courses: [
        { id: "Humanities_Elec_a", code: "Humanities Elective (a)", title: "", credit: "≥3" },
        { id: "Social_Science_Elec_b", code: "Social Science Elective (b)", title: "", credit: "≥3" },
      ],
    },
    {
      section: "Mechanics",
      subtotal: "23",
      courses: [
        { id: "ES5", code: "ES 5", title: "Statics & Dynamics", credit: 3 },
        { id: "ES8", code: "ES 8", title: "Fluid Mechanics", credit: 3 },
        { id: "ES9", code: "ES 9", title: "Strength of Materials", credit: 4 },
        { id: "CEE12", code: "CEE 12", title: "Hydraulics", credit: 4 },
        { id: "CEE22", code: "CEE 22", title: "Structural Analysis", credit: 5 },
        { id: "CEE42", code: "CEE 42", title: "Intro. Geotech. Eng.", credit: 4 },
      ],
    },
    {
      section: "Analysis",
      subtotal: "17",
      courses: [
        {
          id: "ES2_CS11",
          code: "ES 2 or CS 11",
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.",
          credit: 4,
        },
        { id: "ES55", code: "ES 55", title: "Numerical Methods", credit: 3 },
        { id: "ES56", code: "ES 56", title: "Prob. & Stats.", credit: 4 },
        { id: "CEE132", code: "CEE 132", title: "Data Sci. Sustainability", credit: 3 },
        { id: "CEE86", code: "CEE 86", title: "Integ. Plan. & Mgt.", credit: 3 },
      ],
    },
    {
      section: "Design",
      subtotal: "13",
      courses: [
        { id: "EN1_Design", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        { id: "Design_Elec_d1", code: "Design Elective (d)", title: "", credit: 3 },
        { id: "Design_Elec_d2", code: "Design Elective (d)", title: "", credit: 3 },
        { id: "CEE88", code: "CEE 88", title: "Capstone Design", credit: 4 },
      ],
    },
    {
      section: "CE Electives",
      subtotal: "6",
      courses: [
        { id: "CE_Elec_e", code: "CE Elective (e)", title: "", credit: 3 },
        { id: "CE_Elec_f", code: "CE Elective (f)", title: "", credit: 3 },
      ],
    },
    {
      section: "Technical Elective",
      subtotal: "≥9",
      courses: [
        {
          id: "Tech_Electives",
          code: "Technical Electives",
          title:
            "≥9 SHU Technical Electives (see note g) are required for the degree. List courses below.",
          credit: "",
        },
      ],
    },
  ];
  
  export default civilEngineeringData;
  