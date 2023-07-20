import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from 'yup';

export const SELECT_FILTERS = [{
  key: 'userType',
  label: 'Select User Type',
  options: [
    { label: 'IFA Admin', value: 'ifaAdmin' },
    { label: 'Register Manager', value: 'registerManager' },
    { label: 'Responsible Individual', value: 'responsibleIndividual' }
  ]
}];

export const tableData = [
  {
    srNo: '1',
    id: '1',
    name: 'David',
    userType: 'Approved Carer',
    email: 'muneer@fosterapp.co.uk',
    phoneNo: '7911 123456',
    resetPassword: 'Reset Password',
    enableDisable: true
  }
];

export const initialValue = {
  firstName: 'john',
  lastName: 'doe',
  email: 'johndoe@gmail.com',
  phoneNumber: '12345677890',
  userType: 'user type',
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Field is required'),
  lastName: Yup.string().required('Field is required'),
  email: Yup.string().required('Field is required'),
  phoneNumber: Yup.string().required('Field is required'),
  userType: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'firstName',
      label: 'First Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'lastName',
      label: 'Last Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'email',
      label: 'Email',
      type: 'email'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'phoneNumber',
      label: 'Phone Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'userType',
      label: 'User Type',
      select: true,
      options: [{ value: 'user type', label: 'user type' }]
    },
    component: RHFSelect
  }
]