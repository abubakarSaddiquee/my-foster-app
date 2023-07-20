import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useEventTab } from "./useEventTab";
import dayjs from "dayjs";
import { Box, Chip,  } from "@mui/material";
import { INVITES, TYPE } from ".";

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "name",
    defaultValue: "John",
    label: "Name",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  
  {
    inputType: "select",
    key: "type",
    label: "Type",
    options: TYPE,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      console.log("selectedUserType", selectedUserType)
      // return selectedUserType && selectedUserType.label;
      return <Chip
        sx={{
          backgroundColor: selectedUserType.bgColor,
          color: selectedUserType.textColor,
          fontSize: "10px !important",
          p: "5px 10px",
          maxHeight: "22px",

          "& .MuiChip-label": {
            p: 0,
          },
        }}
        // key={value}
        label={selectedUserType.label}
      />
    },
  },
  {
    inputType: "datePicker",
    type: "date",
    key: "date",
    defaultValue: new Date(),
    label: "Date",
    validation: (Yup: any) => {
      return Yup.date()
        .typeError("End date is required")
        .required("End date is required");
    },
    format: (date: any) => {
      return dayjs(date).format("DD/MM/YYYY");
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "venues",
    defaultValue: "RCottingham Library",
    label: "Venues",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "details",
    defaultValue: "Our monthly Foster carer meetup for fostering networks campaign to raise the profile of fostering and show how foster care",
    label: "Details",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "noAttendees",
    defaultValue: 6,
    label: "No.Attendees",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "noInvites",
    defaultValue: 4,
    label: "No.Invites",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "multi-select",
    type: "select",
    key: "invites",
    fullWidth: true,
    defaultValue: [],
    label: "Invites",
    options: INVITES,
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

export default function EventTab() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useEventTab();

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
