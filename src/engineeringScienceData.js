// engineeringScienceData.js

const engineeringScienceData = [
    {
      section: "Mathematics",
      subtotal: "15",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        { id: "MathElective_a", code: "Math Elective (a)", title: "(see note (a))", credit: "3-4" },
      ],
    },
    {
      section: "Mathematics & Nat Sci Electives",
      subtotal: "30",
      courses: [
        { 
          id: "MathNatSciElectives", 
          code: "Math & Nat Sci Electives", 
          title: "List elective courses such that the total of SOE-Mathematics + SOE-Natural Sciences is ≥30 SHU (see note (b))", 
          credit: "≥30" 
        },
      ],
    },
    {
      section: "HASS",
      subtotal: "24",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        { id: "Humanities_Elec_c", code: "Humanities Elective (c)", title: "", credit: "≥3" },
        { id: "SocialSci_Elec_d", code: "Social Science Elective (d)", title: "", credit: "≥3" },
      ],
    },
    {
      section: "Engineering & Computing",
      subtotal: "30",
      courses: [
        { id: "EN1_EC", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        { 
          id: "ES2_CS11_EC", 
          code: "ES 2 or CS 11", 
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.", 
          credit: 4 
        },
        { 
          id: "SOE_Electives", 
          code: "SOE Electives", 
          title: "List elective courses such that the total of SOE-Engineering + SOE-Computing is ≥30 SHU (see note (f))", 
          credit: "≥30" 
        },
      ],
    },
    {
      section: "Technical Electives",
      subtotal: "",
      courses: [
        { 
          id: "Tech_Electives", 
          code: "Technical Electives", 
          title: "List technical electives (see note (g)) such that the total credits for the degree is ≥120 SHU", 
          credit: "" 
        },
      ],
    },
  ];
  
  export default engineeringScienceData;
  