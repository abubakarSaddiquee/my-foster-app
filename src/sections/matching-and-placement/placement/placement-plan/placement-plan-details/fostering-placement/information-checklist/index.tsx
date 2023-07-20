import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initialValue = {
  carePlan: false,
  courtOrder: false,
  placementInformation: false,
  LACReview: false,
  chronology: false,
  fosterCarerCharter: false,
  placingAgency: false,
  other: false,
  pleaseSpecify: '',
};

export const validationSchema = Yup.object().shape({
  carePlan: Yup.boolean().required('Field is required'),
  courtOrder: Yup.boolean().required('Field is required'),
  placementInformation: Yup.boolean().required('Field is required'),
  LACReview: Yup.boolean().required('Field is required'),
  chronology: Yup.boolean().required('Field is required'),
  fosterCarerCharter: Yup.boolean().required('Field is required'),
  placingAgency: Yup.boolean().required('Field is required'),
  other: Yup.boolean().required('Field is required'),
  pleaseSpecify: Yup.string().required('Field is required')
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'carePlan',
      label: 'Copy of care plan'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'courtOrder',
      label: 'Copy of court order'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'placementInformation',
      label: 'Copy of placement information'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'LACReview',
      label: 'Copy of most recent LAC review'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'chronology',
      label: 'Chronology'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerCharter',
      label: 'Copy of Foster Carer’s Charter (NB will need those of both placing agency and approving agency if different)'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'placingAgency',
      label: 'Placing agency’s privacy notice to comply with the data protection legislation'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'other',
      label: 'Other'
    },
    component: RHFCheckbox
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'pleaseSpecify',
      label: 'Please Specify',
      multiline:true,
      fullWidth:true,
      minRows:3
    },
    component: RHFTextField
  },
]