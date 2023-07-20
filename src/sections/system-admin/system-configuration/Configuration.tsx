import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import {  Button,  } from "@mui/material";
import useConfiguration from "./useConfiguration";
import TableHeader from "@root/components/TableHeader";





const COLUMNS = [
  {
    inputType: "textField",
    type: "text",
    key: "configurationName",
    label: "Configuration Name",
    defaultValue: "Number of Child per Carer",
  },
  {
    inputType: "textField",
    type: "text",
    key: "configurationValue",
    label: "Configuration Value",
    defaultValue: "4",
  },
  {
    inputType: "textField",
    type: "text",
    key: "description",
    label: "Description",
    defaultValue: "Number of Child per Carer",
  },
  {
    inputType: "textField",
    type: "text",
    key: "approver",
    label: "Approver",
    defaultValue: "Number of Child per Carer",
  },
  {
    inputType: "textField",
    type: "text",
    key: "approverRole",
    label: "Approver Role",
    defaultValue: "Number of Child per Carer",
  },
 
  // {
  //   inputType: "textField",
  //   type: "text",
  //   key: "name",
  //   defaultValue: "John",
  //   label: "Name",
  //   validation: (Yup: any) => {
  //     return Yup.string().required("Name is required").min(3);
  //   },
  // },
  {
    inputType: "datePicker",
    type: "dob",
    key: "dob",
    defaultValue: new Date(),
    label: "Approved Date",
    validation: (Yup: any) => {
      return Yup.date()
        .typeError("End date is required")
        .required("End date is required");
    },
    format: (date: any) => {
      return dayjs(date).format("DD/MM/YYYY");
    },
  },
];



export default function Configuration() {
  const { methods, handleSubmit, tableData, uploadImage, onSubmit, onClear } =
  useConfiguration();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TableHeader
          // ref={tableHeaderRef}
          title="System Configuration"
          searchKey="search"
          // onAdd={() => {
          //   setOpenAddAssessment(true); setActionType('Add')
          // }}
        />
      <FormTable
        tableKey="exampleTable"
        beforeAdd={(methods: any) => uploadImage("image", methods)}
        beforeUpdate={(methods: any) => uploadImage("image", methods)}
        columns={COLUMNS}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Button variant="outlined" sx={{ ml: 2 }} onClick={onClear}>
        Clear
      </Button>
      
    </FormProvider>
  );
}
