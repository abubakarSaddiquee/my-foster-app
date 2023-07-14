import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useCustomer } from "./useCustomer";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

///---------------------------------
// Constants
const OPTIONS = [
  {
    label: "Oliver Hansen",
    value: "Oliver Hansen",
    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Van Henry",
    value: "Van Henry",

    bgColor: "blue",
    textColor: "white",
  },
  {
    label: "April Tucker",
    value: "April Tucker",

    bgColor: "grey",
    textColor: "white",
  },
  {
    label: "Ralph Hubbard",
    value: "Ralph Hubbard",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Omar Alexander",
    value: "Omar Alexander",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Carlos Abbott",
    value: "Carlos Abbott",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Miriam Wagner",
    value: "Miriam Wagner",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Bradley Wilkerson",
    value: "Bradley Wilkerson",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Virginia Andrews",
    value: "Virginia Andrews",

    bgColor: "green",
    textColor: "white",
  },
  {
    label: "Kelly Snyder",
    value: "Kelly Snyder",

    bgColor: "green",
    textColor: "white",
  },
];

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "name",
    defaultValue: "Belinda Chen",
    label: "name",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "select",
    key: "type",
    fullWidth:true,
    label: "type",
    options: OPTIONS,
    validation: (Yup: any) => {
      return Yup.string().required("User Type is required");
    },
    format: (selectedUserType: any) => {
      return selectedUserType && selectedUserType.label;
    },
  },

  {
    inputType: "select",
    key: "location",
    fullWidth:true,
    label: "location",
    options: OPTIONS,
    validation: (Yup: any) => {
      return Yup.string().required("User Type is required");
    },
    format: (selectedUserType: any) => {
      return selectedUserType && selectedUserType.label;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "homeAddress",
    defaultValue: "10 Cedar Drive San Francisco, CA 94301",
    label: "Home Address",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "email",
    defaultValue: "belinda@email.com",
    label: "email",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "multi-select",
    type: "select",
    key: "invitedTo",
    defaultValue: [],
    label: "invitedTo",
    options: OPTIONS,
    validation: (Yup: any) => {
      return Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string(),
            value: Yup.string(),
            bgColor: Yup.string(),
            textColor: Yup.string(),
          })
        )
        .test(
          "required",
          "Platform is required.",
          (arr: any) => arr.length > 0
        );
    },
    format: (selectedValues = []) => {
      return <DataChips options={selectedValues} />;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "noEventsAttended",
    defaultValue: 45,
    label: "No. Events Attended",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "notes",
    defaultValue: "NOTES",
    label: "notes",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  }
];

///---------------------------------
// This component is here for testing purposes only
function DataChips({ options }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "unwrap",
        gap: 1,
      }}
    >
      {options
        .slice(0, 3)
        .map(
          ({
            value,
            label,
            bgColor = "#e4e7eb",
            textColor = "#212b36",
          }: any) => (
            <Chip
              sx={{
                backgroundColor: bgColor,
                color: textColor,
                fontSize: "10px !important",
                p: "5px 10px",
                maxHeight: "22px",

                "& .MuiChip-label": {
                  p: 0,
                },
              }}
              key={value}
              label={label}
            />
          )
        )}
    </Box>
  );
}

///---------------------------------

export default function Customer() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useCustomer();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
    </FormProvider>
  );
}
