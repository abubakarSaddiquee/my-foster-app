import { Divider } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";

export const initailValue = {
  socialWorkerName: '',
  socialWorkerSignature: '',
  socialWorkerDate: new Date(),

  socialWorkerManagerName: '',
  socialWorkerManagerSignature: '',
  socialWorkerManagerDate: new Date(),

  supervisingSocialWorkerName: '',
  supervisingSocialWorkerSignature: '',
  supervisingSocialWorkerDate: new Date(),

  fosteringManagerName: '',
  fosteringManagerSignature: '',
  fosteringManagerDate: new Date(),

  IROName: '',
  IROSignature: '',
  IRODate: new Date(),

  visitorName: '',
  visitorSignature: '',
  visitorDate: new Date(),

  advisorName: '',
  advisorSignature: '',
  advisorDate: new Date(),

  significantRole1: '',
  significantName1: '',
  significantSignature1: '',
  significantDate1: new Date(),

  significantRole2: '',
  significantName2: '',
  significantSignature2: '',
  significantDate2:new Date(),

};

export const validationSchema = Yup.object().shape({
  socialWorkerName: Yup.string().required('Field is required'),
  socialWorkerSignature: Yup.string().required('Field is required'),
  socialWorkerDate: Yup.date().required('Field is required'),

  socialWorkerManagerName: Yup.string().required('Field is required'),
  socialWorkerManagerSignature: Yup.string().required('Field is required'),
  socialWorkerManagerDate: Yup.date().required('Field is required'),

  supervisingSocialWorkerName: Yup.string().required('Field is required'),
  supervisingSocialWorkerSignature: Yup.string().required('Field is required'),
  supervisingSocialWorkerDate: Yup.date().required('Field is required'),

  fosteringManagerName: Yup.string().required('Field is required'),
  fosteringManagerSignature: Yup.string().required('Field is required'),
  fosteringManagerDate: Yup.date().required('Field is required'),

  IROName: Yup.string().required('Field is required'),
  IROSignature: Yup.string().required('Field is required'),
  IRODate: Yup.date().required('Field is required'),

  visitorName: Yup.string().required('Field is required'),
  visitorSignature: Yup.string().required('Field is required'),
  visitorDate: Yup.date().required('Field is required'),

  advisorName: Yup.string().required('Field is required'),
  advisorSignature: Yup.string().required('Field is required'),
  advisorDate: Yup.date().required('Field is required'),

  significantRole1: Yup.string().required('Field is required'),
  significantName1: Yup.string().required('Field is required'),
  significantSignature1: Yup.string().required('Field is required'),
  significantDate1: Yup.date().required('Field is required'),

  significantRole2: Yup.string().required('Field is required'),
  significantName2: Yup.string().required('Field is required'),
  significantSignature2: Yup.string().required('Field is required'),
  significantDate2: Yup.date().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerRole',
      label: 'Role',
      value: 'Social Worker',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerRole',
      label: 'Role',
      value: 'Social worker manager',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerRole',
      label: 'Role',
      value: 'Supervising social worker',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerRole',
      label: 'Role',
      value: 'Fostering manager',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IRORole',
      label: 'Role',
      value: 'Independent Reviewing Officer (IRO)',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IRODate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'visitorRole',
      label: 'Role',
      value: 'Independent visitor',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'visitorName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'visitorSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'visitorDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'advisorRole',
      label: 'Role',
      value: 'Personal Advisor',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'advisorName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'advisorSignature',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'advisorDate',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    title: 'Any other Significant Person/s'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantRole1',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantName1',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantSignature1',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantDate1',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantRole2',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantName2',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantSignature2',
      label: 'Signature',
    },
    component: SignaturePad
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantDate2',
      label: 'Date',
      sx: { mt: { lg: 2.2 } }
    },
    component: RHFDatePicker
  },
  {
    divider: <Divider />
  },
]