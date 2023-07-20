import * as Yup from "yup";
import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";

// ================================================================================================
export const defaultValues = {
  name: "",
  role: "",
  department: "",
  branch: "",
  businessPhone: "",
  email: "",
  mobile: "",
  company: "",
  address: "",
  postCode: "",
  country: "",
  colorCode: "",
};
// ===============================================================================================
export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  department: Yup.string().required("Field is required"),
  branch: Yup.string().required("Field is required"),
  businessPhone: Yup.string().required("Field is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  mobile: Yup.string()
    .required("Field is required")
    .matches(/^[0-9]{11}$/, "Invalid mobile number"),
  company: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  postCode: Yup.string().required("Field is required"),
  country: Yup.string().required("Field is required"),
  colorCode: Yup.string().required("Field is required"),
});

// ================================================================================================
export const formData = [
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "name", fullWidth: true, label: "Name" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Role",
      name: "role",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "department", fullWidth: true, label: "Department" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Branch",
      name: "branch",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "businessPhone", fullWidth: true, label: "Business Phone" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "email", fullWidth: true, label: "Email" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "mobile", fullWidth: true, label: "Mobile" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "company", fullWidth: true, label: "Company" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: {
      label: "Address",
      name: "address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "postCode", fullWidth: true, label: "Post Code" },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Country",
      name: "country",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    fontWeight: 600,
    otherOptions: { name: "colorCode", fullWidth: true, type: "color", label: "Color Code " },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "markPrivate",
      label: "Mark as Private",
    },
    component: RHFCheckbox,
  },
];
