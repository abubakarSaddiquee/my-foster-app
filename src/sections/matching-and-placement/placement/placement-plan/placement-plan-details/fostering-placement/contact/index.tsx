import * as Yup from "yup";

export const initailValue = {
  contactArrangements: '',
  courtOrders: '',
  contactOutsideFormalArrangements: '',
  delegatedAuthority: '',
  anythingPreventsContact: '',
  arrangementsForChildYoungPerson: '',
  dateOfNextVisit1: new Date(),
  visitingArrangements: '',
  dateOfNextVisit2: new Date(),
  arrangementsForIROtoLAC: '',
  arrangementsForOtherPeople: '',
  childYoungPersonFacilitated: '',
};

export const validationSchema = Yup.object().shape({
  contactArrangements: Yup.string().required('Field is required'),
  courtOrders: Yup.string().required('Field is required'),
  contactOutsideFormalArrangements: Yup.string().required('Field is required'),
  delegatedAuthority: Yup.string().required('Field is required'),
  anythingPreventsContact: Yup.string().required('Field is required'),
  arrangementsForChildYoungPerson: Yup.string().required('Field is required'),
  dateOfNextVisit1: Yup.date().required('Field is required'),
  visitingArrangements: Yup.string().required('Field is required'),
  dateOfNextVisit2: Yup.date().required('Field is required'),
  arrangementsForIROtoLAC: Yup.string().required('Field is required'),
  arrangementsForOtherPeople: Yup.string().required('Field is required'),
  childYoungPersonFacilitated: Yup.string().required('Field is required'),
});