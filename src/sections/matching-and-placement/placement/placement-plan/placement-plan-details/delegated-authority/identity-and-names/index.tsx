import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  lifeAuthority: '',
  lifeDate: new Date(),
  lifeNotes: '',
  newChangesAuthority: '',
  newChangesDate: new Date(),
  newChangesNotes: '',
};

export const validationSchema = Yup.object().shape({
  lifeAuthority: Yup.string().required('Field is required'),
  lifeDate: Yup.date().required('Field is required'),
  lifeNotes: Yup.string().required('Field is required'),
  newChangesAuthority: Yup.string().required('Field is required'),
  newChangesDate: Yup.date().required('Field is required'),
  newChangesNotes: Yup.string().required('Field is required'),
})

export const formData = [
  {
    title: 'Life story work'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'lifeAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'lifeDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'lifeNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'New or changes in “nicknames”, order of first names, or preferred names'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'newChangesAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'newChangesDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'newChangesNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]