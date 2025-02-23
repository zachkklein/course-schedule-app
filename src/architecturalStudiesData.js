// architecturalStudiesData.js

const architecturalStudiesData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "30",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        { id: "MATH51", code: "MATH 51", title: "Differential Equations", credit: 4 },
        { id: "ES56", code: "ES 56", title: "Probability & Statistics", credit: 4 },
        { id: "PHY11", code: "PHY 11", title: "Gen. Physics I w/ lab", credit: 5 },
      ],
    },
    {
      section: "Communication",
      subtotal: "14",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        { id: "VISUAL_TT", code: "Visual Thinking Elective (b)", title: "", credit: "2-4" },
        { id: "ES18", code: "ES 18", title: "CAD", credit: 4 },
        { 
          id: "CEE187_HAA90", 
          code: "CEE 187 or HAA 90", 
          title: "Geographical Info. Sys. or From Drawing to Building", 
          credit: 3 
        },
      ],
    },
    {
      section: "Program Electives",
      subtotal: "18",
      courses: [
        { id: "Humanities_Elec_c", code: "Humanities Elective (c)", title: "", credit: "≥3" },
        { id: "Social_Science_Elec_d", code: "Social Science Elective (d)", title: "", credit: "≥3" },
        { 
          id: "Program_Electives_e", 
          code: "Program Electives (e)", 
          title: "List additional courses to reach ≥12 SHU", 
          credit: "12" 
        },
      ],
    },
    {
      section: "Civil Engineering",
      subtotal: "33",
      courses: [
        { id: "EN1_CE", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        { 
          id: "ES2_CS11", 
          code: "ES 2 or CS 11", 
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.", 
          credit: 4 
        },
        { id: "ES5", code: "ES 5", title: "Statics & Dynamics", credit: 3 },
        { id: "ES9", code: "ES 9", title: "Strength of Materials", credit: 4 },
        { id: "CEE22", code: "CEE 22", title: "Structural Analysis", credit: 5 },
        { id: "CEE42", code: "CEE 42", title: "Intro. Geotech. Eng.", credit: 4 },
        { id: "CEE_Design_f1", code: "CEE Design Elective (f)", title: "", credit: 3 },
        { id: "CEE_Design_f2", code: "CEE Design Elective (f)", title: "", credit: 3 },
        { id: "CEE88", code: "CEE 88", title: "Capstone Design", credit: 4 },
      ],
    },
    {
      section: "Art & Architecture",
      subtotal: "31",
      courses: [
        { id: "HAA8", code: "HAA 8", title: "Intro. to Architecture", credit: 3 },
        { id: "HAA96", code: "HAA 96", title: "Design: Arch.", credit: 5 },
        { id: "HAA97", code: "HAA 97", title: "Design: Adv. Arch", credit: 5 },
        { id: "HAA98", code: "HAA 98", title: "Integ. Proj. Sem.", credit: 3 },
        { 
          id: "Art_Arch_Electives", 
          code: "Art & Architecture Electives", 
          title: "List additional courses (≥15 SHU required)", 
          credit: "15" 
        },
      ],
    },
  ];
  
  export default architecturalStudiesData;
  