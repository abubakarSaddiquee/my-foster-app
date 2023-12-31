import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";
import { useForm } from "react-hook-form";
import { CarerFamilySupportNetworkFormSchema } from "./";
import { enqueueSnackbar } from "notistack";

export const useCarerFamilySupportNetworkForm = ({
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {
  const methods: any = useForm({
    resolver: yupResolver(CarerFamilySupportNetworkFormSchema),
    defaultValues: initialValueProps,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler(data).unwrap();
      enqueueSnackbar(res?.message ?? `Carer Family ${message} Successfully!`, {
        variant: "success",
      });
      router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return { methods, handleSubmit, onSubmit, isSubmitting };
};
