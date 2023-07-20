import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  passportAuthority: '',
  passportDate:new Date(),
  passportNote:'',
  overnightAuthority: '',
  overnightDate:new Date(),
  overnightNote:'',
  holidayWithinUKAuthority: '',
  holidayWithinUKDate:new Date(),
  holidayWithinUKNote:'',
  holidayOutsideUKAuthority: '',
  holidayOutsideUKDate:new Date(),
  holidayOutsideUKNote:'',
  sportsClubAuthority: '',
  sportsClubDate:new Date(),
  sportsClubNote:'',
  hazardousActivitiesAuthority: '',
  hazardousActivitiesDate:new Date(),
  hazardousActivitiesNote:'',
  haircutsColouringAuthority: '',
  haircutsColouringDate:new Date(),
  haircutsColouringNote:'',
  bodyPiercingAuthority: '',
  bodyPiercingDate:new Date(),
  bodyPiercingNote:'',
  tattoosAuthority: '',
  tattoosDate:new Date(),
  tattoosNote:'',
  mobilePhoneAuthority: '',
  mobilePhoneDate:new Date(),
  mobilePhoneNote:'',
  partTimeEmploymentAuthority: '',
  partTimeEmploymentDate:new Date(),
  partTimeEmploymentNote:'',
  socialNetworkingAuthority: '',
  socialNetworkingDate:new Date(),
  socialNetworkingNote:'',
  mediaActivityAuthority: '',
  mediaActivityDate:new Date(),
  mediaActivityNote:'',
};

export const validationSchema = Yup.object().shape({
  passportAuthority: Yup.string().required('Field is required'),
  passportDate: Yup.date().required('Field is required'),
  passportNote: Yup.string().required('Field is required'),
  overnightAuthority: Yup.string().required('Field is required'),
  overnightDate: Yup.date().required('Field is required'),
  overnightNote: Yup.string().required('Field is required'),
  holidayWithinUKAuthority: Yup.string().required('Field is required'),
  holidayWithinUKDate: Yup.date().required('Field is required'),
  holidayWithinUKNote: Yup.string().required('Field is required'),
  holidayOutsideUKAuthority: Yup.string().required('Field is required'),
  holidayOutsideUKDate: Yup.date().required('Field is required'),
  holidayOutsideUKNote: Yup.string().required('Field is required'),
  sportsClubAuthority: Yup.string().required('Field is required'),
  sportsClubDate: Yup.date().required('Field is required'),
  sportsClubNote: Yup.string().required('Field is required'),
  hazardousActivitiesAuthority: Yup.string().required('Field is required'),
  hazardousActivitiesDate: Yup.date().required('Field is required'),
  hazardousActivitiesNote: Yup.string().required('Field is required'),
  haircutsColouringAuthority: Yup.string().required('Field is required'),
  haircutsColouringDate: Yup.date().required('Field is required'),
  haircutsColouringNote: Yup.string().required('Field is required'),
  bodyPiercingAuthority: Yup.string().required('Field is required'),
  bodyPiercingDate: Yup.date().required('Field is required'),
  bodyPiercingNote: Yup.string().required('Field is required'),
  tattoosAuthority: Yup.string().required('Field is required'),
  tattoosDate: Yup.date().required('Field is required'),
  tattoosNote: Yup.string().required('Field is required'),
  mobilePhoneAuthority: Yup.string().required('Field is required'),
  mobilePhoneDate: Yup.date().required('Field is required'),
  mobilePhoneNote: Yup.string().required('Field is required'),
  partTimeEmploymentAuthority: Yup.string().required('Field is required'),
  partTimeEmploymentDate: Yup.date().required('Field is required'),
  partTimeEmploymentNote: Yup.string().required('Field is required'),
  socialNetworkingAuthority: Yup.string().required('Field is required'),
  socialNetworkingDate: Yup.date().required('Field is required'),
  socialNetworkingNote: Yup.string().required('Field is required'),
  mediaActivityAuthority: Yup.string().required('Field is required'),
  mediaActivityDate: Yup.date().required('Field is required'),
  mediaActivityNote: Yup.string().required('Field is required'),
})

export const formData = [
  {
    title: 'Passport application can only be applied for by someone holding PR',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'passportAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'passportDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'passportNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Overnight with friends ("sleep overs")',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'overnightAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'overnightDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'overnightNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Holidays within the UK',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'holidayWithinUKAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'holidayWithinUKDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'holidayWithinUKNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Holidays outside the UK',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'holidayOutsideUKAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'holidayOutsideUKDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'holidayOutsideUKNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Sports / social clubs',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'sportsClubAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'sportsClubDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'sportsClubNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'School phMore hazardous activities e.g. horse riding, skiing, rock climbingotos ',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hazardousActivitiesAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'hazardousActivitiesDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'hazardousActivitiesNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Haircuts / colouring",
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'haircutsColouringAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'haircutsColouringDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'haircutsColouringNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Body piercing',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'bodyPiercingAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'bodyPiercingDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'bodyPiercingNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Tattoos',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tattoosAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tattoosDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'tattoosNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Mobile phone',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'mobilePhoneAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'mobilePhoneDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'mobilePhoneNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Part time employment',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'partTimeEmploymentAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'partTimeEmploymentDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'partTimeEmploymentNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Accessing social networking sites e.g. Facebook, Twitter, MSN',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialNetworkingAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialNetworkingDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'socialNetworkingNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Photos or other media activity',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'mediaActivityAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'mediaActivityDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'mediaActivityNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]