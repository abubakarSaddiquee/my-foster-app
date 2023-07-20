import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  observanceAuthority: '',
  observanceDate: new Date(),
  observanceNotes: '',
  attendanceAuthority: '',
  attendanceDate: new Date(),
  attendanceNotes: '',
};

export const validationSchema = Yup.object().shape({
  observanceAuthority: Yup.string().required('Field is required'),
  observanceDate: Yup.date().required('Field is required'),
  observanceNotes: Yup.string().required('Field is required'),
  attendanceAuthority: Yup.string().required('Field is required'),
  attendanceDate: Yup.date().required('Field is required'),
  attendanceNotes: Yup.string().required('Field is required'),
})

export const formData = [
  {
    title: 'New or changes in faith, church or religious observance'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'observanceAuthority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'observanceDate',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'observanceNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Attendance at a place of worship'
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
      name: 'attendanceNotes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]