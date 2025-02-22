// environmentalHealthData.js

const environmentalHealthData = [
    {
      section: "Mathematics & Natural Sciences",
      subtotal: "≥39",
      courses: [
        { id: "MATH32", code: "MATH 32", title: "Calculus I", credit: 4 },
        { id: "MATH34", code: "MATH 34", title: "Calculus II", credit: 4 },
        { id: "MATH42", code: "MATH 42", title: "Calculus III", credit: 4 },
        { id: "MATH51", code: "MATH 51", title: "Differential Equations", credit: 4 },
        { id: "BIO13", code: "BIO 13", title: "Cells & Organisms", credit: 3 },
        { id: "BIO15", code: "BIO 15", title: "Cells & Organisms Lab", credit: 2 },
        { id: "CHEM1", code: "CHEM 1", title: "Gen. Chem. I w/ lab", credit: 5 },
        { id: "PHY11", code: "PHY 11", title: "Gen. Physics I w/ lab", credit: 5 },
        { id: "B-C-P_Elec_a", code: "BIO-CHEM-PHY Elective (a)", title: "", credit: 5 },
        { id: "NatSci_Elec_b", code: "Natural Science Elective (b)", title: "", credit: "3-5" },
      ],
    },
    {
      section: "Economics",
      subtotal: "6-7",
      courses: [
        {
          id: "EC5_or_EC8",
          code: "EC 5/EC 8",
          title: "Principles of Economics or Prin. Econ. w/ Env. App.",
          credit: "3-4",
        },
        { id: "EC30", code: "EC 30", title: "Environmental Economics", credit: 3 },
      ],
    },
    {
      section: "Communication",
      subtotal: "6",
      courses: [
        { id: "ENG1", code: "ENG 1", title: "Expos. Writing or ENG 3", credit: 3 },
        { id: "CEE187", code: "CEE 187", title: "GIS", credit: 3 },
      ],
    },
    {
      section: "HASS Electives",
      subtotal: "≥6",
      courses: [
        { id: "Humanities_Elec_c", code: "Humanities Elective (c)", title: "", credit: "≥3" },
        { id: "SocialSci_Elec_d", code: "Social Science Elective (d)", title: "", credit: "≥3" },
      ],
    },
    {
      section: "Engineering Core",
      subtotal: "13",
      courses: [
        { id: "EN1_Core", code: "EN 1", title: "Applications in Eng.", credit: 3 },
        {
          id: "ES2_CS11",
          code: "ES 2 or CS 11",
          title: "Intro. Comp. in Eng. or Intro. Comp. Sci.",
          credit: 4,
        },
        { id: "ES8", code: "ES 8", title: "Fluid Mechanics", credit: 3 },
        { id: "CEE32_Core", code: "CEE 32", title: "Eng. Sust. Resil. Soc.", credit: 3 },
      ],
    },
    {
      section: "Environmental Health Core",
      subtotal: "16",
      courses: [
        { id: "CEE52", code: "CEE 52", title: "Pub. Health. Eng.", credit: 3 },
        { id: "CEE57", code: "CEE 57", title: "Pub. Health", credit: 3 },
        { id: "CEE154", code: "CEE 154", title: "Prin. Epidemiology", credit: 3 },
        { id: "CEE156", code: "CEE 156", title: "Biostatistics", credit: 4 },
        { id: "CEE94", code: "CEE 94", title: "Indep. Study", credit: 3 },
      ],
    },
    {
      section: "Track Electives",
      subtotal: "≥20",
      courses: [
        {
          id: "Track_Electives",
          code: "Track Electives",
          title: "List courses to fulfill ≥20 SHU",
          credit: "≥20",
        },
      ],
    },
    {
      section: "Program Electives",
      subtotal: "≥9",
      courses: [
        {
          id: "Program_Electives",
          code: "Program Electives",
          title: "List courses to fulfill ≥9 SHU",
          credit: "≥9",
        },
      ],
    },
    {
      section: "Additional Electives",
      subtotal: "",
      courses: [
        {
          id: "Additional_Electives",
          code: "Additional Electives",
          title: "List additional courses as needed to reach ≥120 SHU",
          credit: "",
        },
      ],
    },
  ];
  
  export default environmentalHealthData;
  