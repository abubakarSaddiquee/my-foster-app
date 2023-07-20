import * as Yup from "yup";
import { RHFSelect } from "@root/components/hook-form";

// ================================================================================================
export const defaultValues = {
  moveTo: "",
};
// ===============================================================================================
export const FormSchema = Yup.object().shape({
  moveTo: Yup.string().required("Field is required"),
});

// ================================================================================================
export const moveModalData = [
  {
    gridLength: 12,
    otherOptions: {
      label: "Move To",
      name: "moveTo",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
];
