import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { usePitchesAndRequests } from "./usePitchesAndRequests";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

///---------------------------------
// Constants

const TypeOfContent = [
  {
    label: "Request",
    value: "Request",
    bgColor: "#BEA2FA",
    textColor: "#1D1D1D",
  },
  {
    label: "UGC",
    value: "UGC",
    bgColor: "#A2C5FA",
    textColor: "#1D1D1D",
  },
  {
    label: "Team Social Proposal",
    value: "Team Social Proposal",
    bgColor: "#8EEB92",
    textColor: "#1D1D1D",
  },
];

const CHANNELS = [
  {
    label: "Twitter",
    value: "Twitter",
    bgColor: "#D6ADEA",
    textColor: "#1D1D1D",
  },
  {
    label: "Linkedin",
    value: "Linkedin",
    bgColor: "#ADE6EA",
    textColor: "#1D1D1D",
  },
  {
    label: "Instagram",
    value: "Instagram",
    bgColor: "#6BD5ED",
    textColor: "#1D1D1D",
  },
  {
    label: "TikTok",
    value: "TikTok",
    bgColor: "#E0C06E",
    textColor: "#1D1D1D",
  },
  {
    label: "Facebook",
    value: "Facebook",
    bgColor: "#BC6EE0",
    textColor: "#1D1D1D",
  },
];

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
    key: "typeOfContent",
    label: "Type of Content",
    options: TypeOfContent,
    validation: (Yup: any) => {
      return Yup.string().required("Type of Content is required");
    },
    format: (selectedUserType: any) => {
      return selectedUserType && selectedUserType.label;
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "requestor",
    defaultValue: "John",
    label: "Requestor",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "datePicker",
    type: "dob",
    key: "requestedDate",
    defaultValue: new Date(),
    label: "Requested Date",
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
    key: "goal",
    defaultValue:
      "We have a small launch on 4/25 for new features that will make it easier to edit videos in our app.",
    label: "Goal",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Image",
    size: { xs: 12, md: 12 },
    // Use this validation for images
    validation: (Yup: any) => {
      return Yup.mixed()
        .test("required", "Image is required", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value.type;
        })
        .test("fileFormat", "Unsupported Format", (value: any) => {
          if (!value) return false;
          if (typeof value === "string") return !!value;
          return value && FILE_FORMATS.includes(value.type);
        })
        .test(
          "fileSize",
          `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
          (value: any) => {
            if (!value) return false;
            if (typeof value === "string") return !!value;
            return value && value.size <= MAX_FILE_SIZE;
          }
        );
    },
    format: (imgUrl: any) => {
      if (!!imgUrl)
        return (
          <MyAvatar
            src={String(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`)}
            sx={{
              mx: "auto",
            }}
          />
        );

      return "-";
    },
  },

  {
    inputType: "textField",
    type: "text",
    key: "proposedCopy",
    defaultValue: "Text",
    label: "Proposed Copy",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "teamSocialNotes",
    defaultValue: "Looks good to me copy needs some work.",
    label: "Team Social Notes",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
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

export default function PitchesAndRequests() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
    usePitchesAndRequests();

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
