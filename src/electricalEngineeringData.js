// electricalEngineeringData.js

const electricalEngineeringData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "33",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        { id: "MATH51", code: "MATH 51", title: "Differential Equations", credit: 4 },
        { id: "PHY11", code: "PHY 11", title: "Gen. Physics I w/ lab", credit: 5 },
        { id: "PHY12", code: "PHY 12", title: "Gen. Physics II w/ lab", credit: 5 },
        {
          id: "CHEM_PHY",
          code: "CHEM 1/11/16 or PHY 13",
          title: "Intro. Modern Physics",
          credit: "4-6",
        },
        { id: "NS_ELECTIVE", code: "Natural Science Elective (a)", title: "", credit: "≥3" },
      ],
    },
    {
      section: "Advanced Mathematics",
      subtotal: "10",
      courses: [
        {
          id: "MATH70_72",
          code: "MATH 70 / MATH 72",
          title: "Linear Algebra or Abstract Linear Alg.",
          credit: 3,
        },
        { id: "EE23", code: "EE 23", title: "Linear Systems", credit: 4 },
        { id: "EE24", code: "EE 24", title: "Probabilistic Systems Anal.", credit: 3 },
      ],
    },
    {
      section: "HASS",
      subtotal: "24",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        { id: "HASS_Hum", code: "Humanities Elective (b)", title: "", credit: "≥3" },
        { id: "HASS_Soc", code: "Social Science Elective (c)", title: "", credit: "≥3" },
      ],
    },
    {
      section: "Engineering & Computing",
      subtotal: "8",
      courses: [
        { id: "ES2", code: "ES 2", title: "Intro. Computing in Eng.", credit: 4 },
        { id: "CS11", code: "CS 11", title: "Intro. Comp. Science", credit: 4 },
      ],
    },
    {
      section: "EE Core",
      subtotal: "16",
      courses: [
        { id: "ES4", code: "ES 4", title: "Intro. Digital Log. Circuits", credit: 4 },
        { id: "EE14", code: "EE 14", title: "Embedded Systems", credit: 4 },
        { id: "EE20", code: "EE 20", title: "Intro. Circuits & Elec.", credit: 4 },
        { id: "EE21", code: "EE 21", title: "Electronics I", credit: 4 },
      ],
    },
    {
      section: "EE & Technical Electives",
      subtotal: "27-40",
      courses: [
        { id: "EE_Breadth1", code: "EE Breadth Elective (e)", title: "", credit: "3-4" },
        { id: "EE_Breadth2", code: "EE Breadth Elective (e)", title: "", credit: "3-4" },
        { id: "EE_Elective1", code: "EE Elective (f)", title: "", credit: "3-4" },
        { id: "EE_Elective2", code: "EE Elective (f)", title: "", credit: "3-4" },
        { id: "EE_Elective3", code: "EE Elective (f)", title: "", credit: "3-4" },
        { id: "Tech_Elective_g1", code: "Technical Elective (g)", title: "", credit: "3-5" },
        { id: "Tech_Elective_g2", code: "Technical Elective (g)", title: "", credit: "3-5" },
        { id: "Tech_Elective_h1", code: "Technical Elective (h)", title: "", credit: "3-5" },
        { id: "Tech_Elective_h2", code: "Technical Elective (h)", title: "", credit: "3-5" },
      ],
    },
    {
      section: "Design",
      subtotal: "10",
      courses: [
        { id: "EN1_Design", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        { id: "EE31", code: "EE 31", title: "Junior Design Project", credit: 3 },
        { id: "EE97", code: "EE 97", title: "Senior Design Project", credit: 2 },
        { id: "EE98", code: "EE 98", title: "Senior Design Project", credit: 2 },
      ],
    },
  ];
  
  export default electricalEngineeringData;
  