// noMajorData.js

const noMajorData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "≥30",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        {
          id: "Additional_MathNatSci",
          code: "Math/Nat Sci Electives",
          title: "List additional courses (see note a)",
          credit: "≥30",
        },
      ],
    },
    {
      section: "HASS",
      subtotal: "≥24",
      courses: [
        { id: "ENG1_HASS", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        {
          id: "Humanities_Elec_b",
          code: "Humanities Elective (b)",
          title: "",
          credit: "≥3",
        },
        {
          id: "SocialSci_Elec_c",
          code: "Social Science Elective (c)",
          title: "",
          credit: "≥3",
        },
        {
          id: "Additional_HASS",
          code: "Additional HASS Courses",
          title: "List additional courses (see note d)",
          credit: "≥24",
        },
      ],
    },
    {
      section: "Engineering & Computing",
      subtotal: "≥30",
      courses: [
        { id: "EN1", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        {
          id: "ES2_CS11",
          code: "ES 2 or CS 11",
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.",
          credit: 4,
        },
        {
          id: "Additional_EngComp",
          code: "Additional EC Courses",
          title: "List additional courses (see note e)",
          credit: "≥30",
        },
      ],
    },
    {
      section: "Program Electives",
      subtotal: "~36",
      courses: [
        {
          id: "Program_Electives",
          code: "Program Electives",
          title: "List additional courses to fulfill the ≥120 SHU total requirement",
          credit: "~36",
        },
      ],
    },
  ];
  
  export default noMajorData;
  