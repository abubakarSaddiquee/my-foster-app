import { useState } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from ".";
import useUploadImage from "@root/hooks/useUploadImage";

export const useBusinessContinuityPlan = () => {
  const [tableData, setTableDate] = useState<any>(null);
  const methods: any = useForm({
    defaultValues,
  });

  const { uploadImage } = useUploadImage();

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    setValue,
  } = methods;

  const onClear = () => {
    setTableDate(null);
  };

  const onSubmit = async (data: any) => {
    setTableDate(JSON.stringify(data));
  };

  return {
    methods,
    handleSubmit,
    getValues,
    setValue,
    isValid,
    onSubmit,
    isSubmitting,
    tableData,
    onClear,
    uploadImage,
  };
};

