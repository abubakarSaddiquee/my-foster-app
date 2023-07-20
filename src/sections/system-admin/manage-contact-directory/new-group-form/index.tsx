import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

// =====================================================
export const defaultValues = {
  label: "",
  role: "",
  department: "",
  branch: "",
  businessPhone: "",
  email: "",
  mobile: "",
};

// ======================================================
export const FormSchema = Yup.object().shape({
  label: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  department: Yup.string().required("Field is required"),
  branch: Yup.string().required("Field is required"),
  businessPhone: Yup.string().required("Field is required"),
  email: Yup.string().required("Field is required"),
  mobile: Yup.string().required("Field is required"),
});

// =========================================================
export const newGroupData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "label",
      label: "Label",
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
    otherOptions: {
      label: "Role",
      name: "role",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Department",
      name: "department",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Branch",
      name: "branch",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Business Phone",
      name: "businessPhone",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Email",
      name: "email",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Mobile",
      name: "mobile",
      size: "small",
    },
    component: RHFTextField,
  },
];
