import StatutoryMedicalTypeList from "./statutory-medical-type/StatutoryMedicalTypeList";

//Accordian Data
export const statutoryMedicalListAccordionData = [
  {
    id: 1,
    title: "EHCP",
    component: <StatutoryMedicalTypeList type="EHCP" />,
  },
  {
    id: 2,
    title: "CLA Medical",
    component: <StatutoryMedicalTypeList type="CLA" />,
  },
  {
    id: 3,
    title: "Dental Check",
    component: <StatutoryMedicalTypeList type="Dental" />,
  },
  {
    id: 4,
    title: "Optician Check",
    component: <StatutoryMedicalTypeList type="Optician" />,
  },
];

export const sortTypeData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
