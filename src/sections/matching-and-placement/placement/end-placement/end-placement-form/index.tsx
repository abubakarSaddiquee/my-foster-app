import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

// =====================================================
export const defaultValues = {
  childName: "",
  carerName: "",
  dateDischarge: new Date(),
  dischargeReport: "",
  approvedRole: "",
  localAuthority: "",
  localAuthoritySW: "",
  status: "",
};

// ======================================================
export const FormSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  dateDischarge: Yup.date().required("Field is required"),
  dischargeReport: Yup.string().required("Field is required"),
  approvedRole: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  localAuthoritySW: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

// =========================================================
export const endPlacementData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      size: "small",
      fullWidth:true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      size: "small",
      fullWidth:true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date ofDischarge",
      name: "dateDischarge",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    requireFileUpload: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "approvedRole",
      label: "Approved by (Role)",
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
      name: "localAuthority",
      label: "Local Authority",
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
      name: "localAuthoritySW",
      label: "Local Authority SW",
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
      name: "status",
      label: "Status",
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
];
