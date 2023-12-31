import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import * as Yup from 'yup';

export const initialValues = {
  docType: '',
  docDate: '',
  password: '',
  updatePhoto: ''
}
export const formSchema = Yup.object().shape({
  docType: Yup.string().required('Field is required'),
  docDate: Yup.string().required('Field is required'),
  password: Yup.string().required('Field is required'),
  updatePhoto: Yup.string().required('Field is required')
})
export const uploadDocument = [
  {
    gridLength: 12,
    title: 'Document Type',
    otherOptions: {
      size: 'small',
      name: 'docType',
      fullWidth: true,
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    title: 'Document Date',
    otherOptions: {
      name: 'docDate',
      size: 'small',
      fullWidth: true,
      value: new Date()
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Password to Open Document',
    otherOptions: {
      name: 'password',
      fullWidth: true,
      size: 'small',
      type: 'password'
    },
    component: RHFTextField
  },
]