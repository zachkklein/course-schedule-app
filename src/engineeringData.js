// engineeringData.js

const engineeringData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "30",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        {
          id: "MathElective",
          code: "Math Elective",
          title: "(see note (a))",
          credit: "3-4",
        },
        { id: "CHEM1", code: "CHEM 1", title: "Gen. Chem. I w/ lab", credit: 5 },
        { id: "PHY11", code: "PHY 11", title: "Gen. Physics I w/ lab", credit: 5 },
        // Additional courses may be listed to meet the ≥30 SHU requirement.
      ],
    },
    {
      section: "HASS",
      subtotal: "24",
      courses: [
        {
          id: "ENG1_HASS",
          code: "ENG 1",
          title: "Expos. Writing or ENG 3",
          credit: 3,
        },
        {
          id: "Humanities_Elec_c",
          code: "Humanities Elective (c)",
          title: "",
          credit: "≥3",
        },
        {
          id: "SocialSci_Elec_d",
          code: "Social Science Elective (d)",
          title: "",
          credit: "≥3",
        },
        // Additional HASS courses can be added if needed.
      ],
    },
    {
      section: "Engineering & Computing",
      subtotal: "30",
      courses: [
        {
          id: "EN1_Eng",
          code: "EN 1",
          title: "Applications in Eng.",
          credit: 3,
        },
        {
          id: "ES2_CS11_Eng",
          code: "ES 2 or CS 11",
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.",
          credit: 4,
        },
        {
          id: "SOE_Electives",
          code: "SOE Electives",
          title:
            "(see note (f)) List additional courses such that the total of SOE-Computing + SOE-Engineering is at least 30 SHU",
          credit: "",
        },
      ],
    },
    {
      section: "BSE Electives",
      subtotal: "15",
      courses: [
        {
          id: "BSE_Elec1",
          code: "BSE Elective (g)",
          title: "",
          credit: "≥3",
        },
        {
          id: "BSE_Elec2",
          code: "BSE Elective (g)",
          title: "",
          credit: "≥3",
        },
        {
          id: "BSE_Elec3",
          code: "BSE Elective (g)",
          title: "",
          credit: "≥3",
        },
        {
          id: "BSE_Elec4",
          code: "BSE Elective (g)",
          title: "",
          credit: "≥3",
        },
        {
          id: "BSE_Elec5",
          code: "BSE Elective (g)",
          title: "",
          credit: "≥3",
        },
      ],
    },
    {
      section: "Program Electives",
      subtotal: "21",
      courses: [
        {
          id: "Program_Electives",
          code: "Program Electives",
          title:
            "List additional courses to fulfill the ≥120 SHU total requirement for the degree",
          credit: "21",
        },
      ],
    },
  ];
  
  export default engineeringData;
  