import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Chip } from "@mui/material";
import { useResultsTable } from "./useResultsTable";

const OPTIONS = [

  {
    label: "Pause",
    value: "Pause",

    bgColor: "#D6D870",
    textColor: "#1D1D1D",
  },
  {
    label: "Analysis",
    value: "Analysis",

    bgColor: "#C4EA86",
    textColor: "#1D1D1D",
  },
  {
    label: "Stop",
    value: "Stop",

    bgColor: "#E5726B",
    textColor: "#1D1D1D",
  },
];




const ResultsTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route } =
  useResultsTable();


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

  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormTable
          tableKey="exampleTable"
          columns={[

            {
              inputType: "textField",
              type: "text",
              key: "name",
              defaultValue: "Branded keywords",
              label: "Name",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "goal",
              defaultValue: "Drive traffic to site, CPC >$2.25",
              label: "Goals",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "spend",
              defaultValue: "$2,500.00",
              label: "Spend",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "impressions",
              defaultValue: "2083333",
              label: "Impressions",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpm",
              defaultValue: "2083333",
              label: "CPM",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "clicks",
              defaultValue: "2083333",
              label: "Clicks",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpc",
              defaultValue: "2083333",
              label: "CPC",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "conversions",
              defaultValue: "2083333",
              label: "Conversions",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            {
              inputType: "textField",
              type: "text",
              key: "cpa",
              defaultValue: "2083333",
              label: "CPA",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },

        
            {
              inputType: "multi-select",
              type: "select",
              key: "nextSteps",
              defaultValue: [],
              label: "Next Steps",
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

          ]}
          
          
        />
      </FormProvider>
    </Card>

  );
};

export default ResultsTable;