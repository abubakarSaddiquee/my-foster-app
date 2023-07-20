import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField, } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
import { Typography } from "@mui/material";

export const initialValues = {
  areaOfficeName: "",
  address: "",
  townCity: "",
  telephone: "",
  officePhone: "",
  mobilePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
};

export const formSchema = Yup.object().shape({
  areaOfficeName: Yup.string().required("Field is required."),
  address: Yup.string().required("Field is required."),
  townCity: Yup.string().required("Field is required."),
  telephone: Yup.string().required("Field is required."),
  officePhone: Yup.string().required("Field is required."),
  mobilePhone: Yup.string().required("Field is required."),
  email: Yup.string().required("Field is required."),
  county: Yup.string().required("Field is required."),
  country: Yup.string().required("Field is required."),
  postalCode: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 12,
    head: "Area Office Setup",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Area Office Name",
      name: "areaOfficeName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Contact Details",
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Address",
      name: "address",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Town City",
      name: "townCity",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Telephone",
      name: "telephone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Office phone",
      name: "officePhone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Mobile phone",
      name: "mobilePhone",
      fullWidth: true,
    },
    component: RHFTextField,
  },  
  {
    gridLength: 6,
    otherOptions: {
      label: "Email",
      name: "email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "County",
      name: "county",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Country",
      name: "country",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },  
  {
    gridLength: 6,
    otherOptions: {
      label: "Postal Code",
      name: "postalCode",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
