import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  tripsAuthority: '',
  tripsDate:new Date(),
  tripsNote:'',
  tripsUpTo4DaysAuthority: '',
  tripsUpTo4DaysDate:new Date(),
  tripsUpTo4DaysNote:'',
  tripsUpOver4DaysAuthority: '',
  tripsUpOver4DaysDate:new Date(),
  tripsUpOver4DaysNote:'',
  tripAboardAuthority: '',
  tripAboardDate:new Date(),
  tripAboardNote:'',
  computersAtSchoolAuthority: '',
  computersAtSchoolDate:new Date(),
  computersAtSchoolNote:'',
  photosAuthority: '',
  photosDate:new Date(),
  photosNote:'',
  attendanceAuthority: '',
  attendanceDate:new Date(),
  attendanceNote:'',
  PEPMeetingsAuthority: '',
  PEPMeetingsDate:new Date(),
  PEPMeetingsNote:'',
  unplannedMeetingsAuthority: '',
  unplannedMeetingsDate:new Date(),
  unplannedMeetingsNote:'',
  registeringSchoolAuthority: '',
  registeringSchoolDate:new Date(),
  registeringSchoolNote:'',
  changingSchoolAuthority: '',
  changingSchoolDate:new Date(),
  changingSchoolNote:'',
  referralYPAuthority: '',
  referralYPDate:new Date(),
  referralYPNote:'',
  healthAndSocialAuthority: '',
  healthAndSocialDate:new Date(),
  healthAndSocialNote:'',
};

export const validationSchema = Yup.object().shape({
  tripsAuthority: Yup.string().required('Field is required'),
  tripsDate: Yup.date().required('Field is required'),
  tripsNote: Yup.string().required('Field is required'),
  tripsUpTo4DaysAuthority: Yup.string().required('Field is required'),
  tripsUpTo4DaysDate: Yup.date().required('Field is required'),
  tripsUpTo4DaysNote: Yup.string().required('Field is required'),
  tripsUpOver4DaysAuthority: Yup.string().required('Field is required'),
  tripsUpOver4DaysDate: Yup.date().required('Field is required'),
  tripsUpOver4DaysNote: Yup.string().required('Field is required'),
  tripAboardAuthority: Yup.string().required('Field is required'),
  tripAboardDate: Yup.date().required('Field is required'),
  tripAboardNote: Yup.string().required('Field is required'),
  computersAtSchoolAuthority: Yup.string().required('Field is required'),
  computersAtSchoolDate: Yup.date().required('Field is required'),
  computersAtSchoolNote: Yup.string().required('Field is required'),
  photosAuthority: Yup.string().required('Field is required'),
  photosDate: Yup.date().required('Field is required'),
  photosNote: Yup.string().required('Field is required'),
  attendanceAuthority: Yup.string().required('Field is required'),
  attendanceDate: Yup.date().required('Field is required'),
  attendanceNote: Yup.string().required('Field is required'),
  PEPMeetingsAuthority: Yup.string().required('Field is required'),
  PEPMeetingsDate: Yup.date().required('Field is required'),
  PEPMeetingsNote: Yup.string().required('Field is required'),
  unplannedMeetingsAuthority: Yup.string().required('Field is required'),
  unplannedMeetingsDate: Yup.date().required('Field is required'),
  unplannedMeetingsNote: Yup.string().required('Field is required'),
  registeringSchoolAuthority: Yup.string().required('Field is required'),
  registeringSchoolDate: Yup.date().required('Field is required'),
  registeringSchoolNote: Yup.string().required('Field is required'),
  changingSchoolAuthority: Yup.string().required('Field is required'),
  changingSchoolDate: Yup.date().required('Field is required'),
  changingSchoolNote: Yup.string().required('Field is required'),
  referralYPAuthority: Yup.string().required('Field is required'),
  referralYPDate: Yup.date().required('Field is required'),
  referralYPNote: Yup.string().required('Field is required'),
  healthAndSocialAuthority: Yup.string().required('Field is required'),
  healthAndSocialDate: Yup.date().required('Field is required'),
  healthAndSocialNote: Yup.string().required('Field is required'),
})

export const formData = [
  {
    title: 'Signed consent for school day trips',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'tripsNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Signed consents for school trips up to 4 days',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsUpTo4DaysAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsUpTo4DaysDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'tripsUpTo4DaysNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Signed consents for school trips of over 4 days',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsUpOver4DaysAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripsUpOver4DaysDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'tripsUpOver4DaysNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'School trips aboard',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripAboardAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'tripAboardDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'tripAboardNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Using computers at school',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'computersAtSchoolAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'computersAtSchoolDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'computersAtSchoolNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'School photos',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'photosAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'photosDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'photosNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Attendance at parent's evenings",
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'attendanceAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'attendanceDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'attendanceNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Attendance at PEP meetings',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'PEPMeetingsAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'PEPMeetingsDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'PEPMeetingsNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Attendance at unplanned meetings re: incidents or immediaate issues',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'unplannedMeetingsAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'unplannedMeetingsDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'unplannedMeetingsNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Registering at school',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'registeringSchoolAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'registeringSchoolDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'registeringSchoolNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Changing at school',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'changingSchoolAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'changingSchoolDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'changingSchoolNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Referral / consent for YP to access another service (please specify the service)',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'referralYPAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'referralYPDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'referralYPNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Personal health and social education',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'healthAndSocialAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'healthAndSocialDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'healthAndSocialNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]