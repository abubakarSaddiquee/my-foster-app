import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initailValue = {
  consent:'',
  authority: '',
  date: new Date(),
  notes: '',
};

export const validationSchema = Yup.object().shape({
  consent: Yup.string().required('Field is required'),
  authority: Yup.string().required('Field is required'),
  date: Yup.date().required('Field is required'),
  notes: Yup.string().required('Field is required'),
});

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'consent',
      label: 'Consent / agreement / task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'authority',
      label: 'Who has authority to give consent / agreement or undertake the task',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'date',
      label: 'Date',
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'notes',
      label: 'Notes (incl. notifications, prior consultation / recording requirement / conditions)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]