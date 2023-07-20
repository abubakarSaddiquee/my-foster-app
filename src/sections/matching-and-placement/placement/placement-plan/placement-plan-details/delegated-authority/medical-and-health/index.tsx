import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  consentAuthority: '',
  consentDate:new Date(),
  consentNote:'',
  immuisationsAuthority: '',
  immuisationsDate:new Date(),
  immuisationsNote:'',
  proceduresAuthority: '',
  proceduresDate:new Date(),
  proceduresNote:'',
  disabilityIllnessAuthority: '',
  disabilityIllnessDate:new Date(),
  disabilityIllnessNote:'',
  dentalAuthority: '',
  dentalDate:new Date(),
  dentalNote:'',
  opticianAuthority: '',
  opticianDate:new Date(),
  opticianNote:'',
  doctorAuthority: '',
  doctorDate:new Date(),
  doctorNote:'',
  counterAuthority: '',
  counterDate:new Date(),
  counterNote:'',
  CAMHSAuthority: '',
  CAMHSDate:new Date(),
  CAMHSNote:'',
};

export const validationSchema = Yup.object().shape({
  consentAuthority: Yup.string().required('Field is required'),
  consentDate: Yup.date().required('Field is required'),
  consentNote: Yup.string().required('Field is required'),
  immuisationsAuthority: Yup.string().required('Field is required'),
  immuisationsDate: Yup.date().required('Field is required'),
  immuisationsNote: Yup.string().required('Field is required'),
  proceduresAuthority: Yup.string().required('Field is required'),
  proceduresDate: Yup.date().required('Field is required'),
  proceduresNote: Yup.string().required('Field is required'),
  disabilityIllnessAuthority: Yup.string().required('Field is required'),
  disabilityIllnessDate: Yup.date().required('Field is required'),
  disabilityIllnessNote: Yup.string().required('Field is required'),
  dentalAuthority: Yup.string().required('Field is required'),
  dentalDate: Yup.date().required('Field is required'),
  dentalNote: Yup.string().required('Field is required'),
  opticianAuthority: Yup.string().required('Field is required'),
  opticianDate: Yup.date().required('Field is required'),
  opticianNote: Yup.string().required('Field is required'),
  doctorAuthority: Yup.string().required('Field is required'),
  doctorDate: Yup.date().required('Field is required'),
  doctorNote: Yup.string().required('Field is required'),
  counterAuthority: Yup.string().required('Field is required'),
  counterDate: Yup.date().required('Field is required'),
  counterNote: Yup.string().required('Field is required'),
  CAMHSAuthority: Yup.string().required('Field is required'),
  CAMHSDate: Yup.date().required('Field is required'),
  CAMHSNote: Yup.string().required('Field is required'),
})

export const formData = [
  {
    title: 'Signed consent to emergency medical treatment inc. anaesthesia',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'consentAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'consentDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'consentNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Consent - routine immuisations',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'immuisationsAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'immuisationsDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'immuisationsNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Planned medical procedures',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'proceduresAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'proceduresDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'proceduresNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Medical procedure carried out in the home where the person administering the procedure requires training (e.g. child with disability / illness)',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'disabilityIllnessAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'disabilityIllnessDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'disabilityIllnessNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Dental - signed consent to dental emergency treatment incl. anaesthetic',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'dentalAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'dentalDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'dentalNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Optician - appointments, glasses',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'opticianAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'opticianDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'opticianNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Consent to examination / treatment by school doctor',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'doctorAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'doctorDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'doctorNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Administration of prescribed / over the counter medications',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'counterAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'counterDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'counterNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Referral / consent for YP to access another service e.g. CAMHS',
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'CAMHSAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'CAMHSDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'CAMHSNote',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]