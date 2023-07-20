// components

import { Box, Chip } from "@mui/material";
import { usePersonas } from "./usePersonas";
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { CONTENTOPTIONS, EDITRIALOPTIONS, VERTICALOPTIONS } from ".";
import FormTable from "@root/components/Table/FormTable";
import MyAvatar from "@root/components/MyAvatar";
import { fData } from "@root/utils/formatNumber";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

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

const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "name",
    defaultValue: "",
    label: "Name",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "notes",
    defaultValue: "",
    label: "Notes",
    validation: (Yup: any) => {
      return Yup.string().required("Name is required").min(3);
    },
  },

  {
    inputType: "multi-select",
    type: "select",
    key: "contentIdeas",
    defaultValue: [],
    label: "Content Ideas",
    options: CONTENTOPTIONS,
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
    inputType: "file",
    type: "file",
    key: "image",
    label: "Attechment",
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
    inputType: "multi-select",
    type: "select",
    key: "editorial",
    defaultValue: [],
    label: "Editorial",
    options: EDITRIALOPTIONS,
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
    inputType: "select",
    key: "vertical",
    label: "vertical",
    options: VERTICALOPTIONS,
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
];
const Personas = () => {
  const { methods, handleSubmit, onSubmit, onClear, uploadImage } =
    usePersonas();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        columns={COLUMNS}
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
      />
    </FormProvider>
  );
};

export default Personas;
