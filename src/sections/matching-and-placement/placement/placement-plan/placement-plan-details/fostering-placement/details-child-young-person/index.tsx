import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  name: '',
  idNumber: '',
  dob: new Date(),
  gender: '',
  ethnicity: '',
  language: '',
  religion: '',
  legalStatus: '',
  diability: '',
  carerName: '',
  carerEthnicity: '',
  addressAndContactWithHold: '',
  birthParentName: '',
  addressAndContact: ''
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  idNumber: Yup.string().required('Field is required'),
  dob: Yup.date().required('Field is required'),
  gender: Yup.string().required('Field is required'),
  ethnicity: Yup.string().required('Field is required'),
  language: Yup.string().required('Field is required'),
  religion: Yup.string().required('Field is required'),
  legalStatus: Yup.string().required('Field is required'),
  diability: Yup.string().required('Field is required'),
  carerName: Yup.string().required('Field is required'),
  carerEthnicity: Yup.string().required('Field is required'),
  addressAndContactWithHold: Yup.string().required('Field is required'),
  birthParentName: Yup.string().required('Field is required'),
  addressAndContact: Yup.string().required('Field is required')
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'name',
      label: 'Name / Name Known by'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'idNumber',
      label: 'ID Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'dob',
      label: 'Date of birth / Expected DoB',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'gender',
      label: 'Gender',
      select: true,
      options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'ethnicity',
      label: 'Ethnicity',
      select: true,
      options: [{ value: 'asian', label: 'Asian' }],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'language',
      label: 'Language Spoken',
      select: true,
      options: [{ value: 'urdu', label: 'Urdu' }],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'religion',
      label: 'Religion',
      select: true,
      options: [{ value: 'islam', label: 'Islam' }],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'legalStatus',
      label: 'Legal Status',
      select: true,
      options: [{ value: 'active', label: 'Active' }],
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'diability',
      label: 'Diability/Special needs',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'carerName',
      label: 'Foster Carer’s Name(s)',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'carerEthnicity',
      label: 'Foster Carer’s Ethnicity',
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'addressAndContactWithHold',
      label: 'Address and Contact Number (withhold if needed)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'birthParentName',
      label: 'Birth Parent’s Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'addressAndContact',
      label: 'Address and Contact Number',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]