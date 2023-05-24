import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";

export const useContactForm = (data: any) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("data", data);
    alert(
      JSON.stringify(
        {
          ...data,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
  };
};
