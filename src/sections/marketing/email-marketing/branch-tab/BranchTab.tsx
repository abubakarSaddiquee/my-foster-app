// components
import EmailMarketingTable from "../EmailMarketingTable";
import { useBranchTab } from './useBranchTab';
// form react hook
import { FormProvider } from "@root/components/hook-form";
import { Checkbox } from "@mui/material";


const BranchTab = () => {
  const { methods, handleSubmit,  onSubmit, onClear } = useBranchTab();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <EmailMarketingTable  disabled
        tableKey="exampleTable"
        columns={[
          {
            inputType: "textField",
            type: "text",
            key: "name",
            fullWidth:true,
            defaultValue: "Remus Lupin (Foster Carer)",
            label: "name",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "description",
            fullWidth:true,
            defaultValue: "256",
            label: "description",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          },
          {
            inputType: "textField",
            type: "text",
            key: "email",
            fullWidth:true,
            defaultValue: "Reporting and Recording Fostering",
            label: "email",
            validation: (Yup: any) => {
              return Yup.string().required("Field is required")
            },
          }
        ]}
      />

    </FormProvider>
  );
}

export default BranchTab
