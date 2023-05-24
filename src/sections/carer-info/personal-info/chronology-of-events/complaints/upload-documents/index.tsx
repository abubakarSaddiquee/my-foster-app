export const UPLOAD_DOCUMENTS = [
  {
    srNo: 1,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 2,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 3,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
];

import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";

export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  type: "",
  documentDate: new Date(),
  password: "",
};
export const formSchema = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});
