import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import { fData } from "@root/utils/formatNumber";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  updatePhoto: null,
  // uploadDate: "",
  description: "",
  version: "",
  creatorRole: "",
  createdBy: "",
  creationTime: "",
  approvedBy: "",
  approverRole: "",
  lastModfifiedTime: "",
  lastModfifiedBy: "",
  // authorSignatureDate: "",
  // approverSignatureDate: "",
  authorSignature: null,
  approverSignature: null
};

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb

const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  updatePhoto: Yup.mixed().required("Required"),
  uploadDate: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
  version: Yup.string().required("Field is required"),
  creatorRole: Yup.string().required("Field is required"),
  createdBy: Yup.string().required("Field is required"),
  creationTime: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  approverRole: Yup.string().required("Field is required"),
  lastModfifiedTime: Yup.string().required("Field is required"),
  lastModfifiedBy: Yup.string().required("Field is required"),
  authorSignatureDate: Yup.string().required("Field is required"),
  approverSignatureDate: Yup.string().required("Field is required"),
  authorSignature: Yup.mixed()
    .nullable()
    .required("Signature of Author is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
  approverSignature: Yup.mixed()
    .nullable()
    .required("Signature of Approver is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
});
export const PanelSelfEvaluationFormData = [
  {
    head: "What do you think are your strengths as panel Chair?",
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "In Panel Meetings",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "In you performance of the other responsibilities of the Chair",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    head: <hr style={{ border: "none", height: "0.5px", backgroundColor: "rgba(145, 158, 171, 0.32)" }} />
  },
  {
    head: "Is there anything you would like to change or improve in your performance as a panel Chair?"
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "In Panel Meetings",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "In you performance of the other responsibilities of the Chair",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    head: <hr style={{ border: "none", height: "0.5px", backgroundColor: "rgba(145, 158, 171, 0.32)" }} />
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Do you have any suggestions as to how this could be done?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Are there any factors which prevent you being as effective as you would like to be as a panel Chair?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Do you have any suggestions about how these could be addressed?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Is there any specific input or training which you would find helpful?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Do you have any comments about the general functioning of the panel or about the management of the central list?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "description",
      label: "Do you have any suggestions of how this could be improved?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "version", label: "Signature", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "authorSignatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

];
