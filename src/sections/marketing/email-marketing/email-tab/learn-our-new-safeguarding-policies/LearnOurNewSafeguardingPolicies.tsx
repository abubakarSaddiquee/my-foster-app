import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { useLearnOurNewSafeguardingPolicies } from "./useLearnOurNewSafeguardingPolicies";
import dayjs from "dayjs";
import { Box, Button, Chip, Typography } from "@mui/material";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";
import { GoalOptions, StatusOptions } from ".";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];



const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "subjectLine",
    defaultValue: "Remus Lupin (Foster Carer)",
    label: "Subject Line",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "sendData",
    defaultValue: "256",
    label: "Send Date",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "product",
    defaultValue: "Reporting and Recording Fostering",
    label: "product",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "owner",
    defaultValue: "Devplan.PDF",
    label: "Owner",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "select",
    key: "status",
    label: "status",
    options: StatusOptions,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
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
    inputType: "textField",
    type: "text",
    key: "linkToDraft", 
    defaultValue: "draft link",
    label: "Link To Draft",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "select",
    key: "goal",
    label: "goal",
    options: GoalOptions,
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
    inputType: "textField",
    type: "text",
    key: "sendListName",
    defaultValue: "list name",
    label: "Send List Name",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "imageAssets",
    label: "Image Assets",
    size: { xs: 12, md: 6 },
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
    key: "landingPage",
    defaultValue: "link",
    label: "Landing Page",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "facebookShareLink",
    defaultValue: "link",
    label: "Facebook Share Link",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "twitterShareLink",
    defaultValue: "link",
    label: "Twitter Share Link",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "UTMcampaign",
    defaultValue: "fotH352305923",
    label: "UTM Campaign",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "totalEmailSent",
    defaultValue: "1256213",
    label: "Total Email Sent",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "totalEmailDelivered",
    defaultValue: "215235",
    label: "Total Email Delivered",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },          {
    inputType: "textField",
    type: "text",
    key: "totalEmailOpened",
    defaultValue: "2124",
    label: "Total Email Opened",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "totalClicked",
    defaultValue: "42",
    label: "Total Clicked",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "deliverablitiy",
    defaultValue: "90%",
    label: "Deliverability",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "openRate",
    defaultValue: "18%",
    label: "Open Rate",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "CTR",
    defaultValue: "2.0%",
    label: "CTR",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "salesAttributed",
    defaultValue: "$3072",
    label: "Sales Attributed",
    validation: (Yup: any) => {
      return Yup.string().required("Field is required")
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

export default function LearnOurNewSafeguardingPolicies() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useLearnOurNewSafeguardingPolicies();

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
