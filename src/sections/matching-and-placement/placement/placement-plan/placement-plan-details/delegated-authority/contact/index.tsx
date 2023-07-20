import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  transportAuthority: '',
  transportDate: new Date(),
  transportNotes: '',
  arrangingAuthority: '',
  arrangingDate: new Date(),
  arrangingNotes: '',
  facilitationAuthority: '',
  facilitationDate: new Date(),
  facilitationNotes: '',
  formalAuthority: '',
  formalDate: new Date(),
  formalNotes: ''
};

export const validationSchema = Yup.object().shape({
  transportAuthority: Yup.string().required('Field is required'),
  transportDate: Yup.date().required('Field is required'),
  transportNotes: Yup.string().required('Field is required'),
  arrangingAuthority: Yup.string().required('Field is required'),
  arrangingDate: Yup.date().required('Field is required'),
  arrangingNotes: Yup.string().required('Field is required'),
  facilitationAuthority: Yup.string().required('Field is required'),
  facilitationDate: Yup.date().required('Field is required'),
  facilitationNotes: Yup.string().required('Field is required'),
  formalAuthority: Yup.string().required('Field is required'),
  formalDate: Yup.date().required('Field is required'),
  formalNotes: Yup.string().required('Field is required')
})

export const formData = [
  {
    title: 'Transport can only be applied for by someone holding PR'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'transportAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'transportDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'transportNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Arranging'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'arrangingAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'arrangingDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'arrangingNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Facilitation'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'facilitationAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'facilitationDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'facilitationNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Formal supervision'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'formalAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'formalDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'formalNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]