import { yupResolver } from "@hookform/resolvers/yup";
import {
  usePatchEHCPClaDocumentationListMutation,
  usePostEhcpClaDocumentationListMutation,
} from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { EHCPFormValidation } from "..";

export const useEhcpForm = (props: any) => {
  const router = useRouter();
  const { disabled, defaultValues } = props;

  const methods: any = useForm({
    resolver: yupResolver(EHCPFormValidation),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const [postEhcpClaDocumentationList] =
    usePostEhcpClaDocumentationListMutation();
  const [patchEhcpClaDocumentationList] =
    usePatchEHCPClaDocumentationListMutation();

  const onSubmit = async (data: any) => {
    console.log(data, "EHCP FOrm");
    console.log(router?.query?.cla_document_id, "EHCP Id");

    if (!!router?.query?.cla_document_id) {
      return patchEHCPHanlder(data);
    }
    // Post EHCP API of CLA Documentation
    const updatedData = { ...data, document: "Educaton, Health, Care Plan Document" };

    try {
      const res: any = await postEhcpClaDocumentationList(updatedData).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation`);
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  // Patch EHCP API CLA of Documentation
  const patchEHCPHanlder = async (data: any) => {
    const patchData = { body: data, id: router?.query?.cla_document_id };
    console.log(patchData);

    try {
      const res: any = await patchEhcpClaDocumentationList(patchData).unwrap();
      console.log(res);
      router.push(`/foster-child/child-background-info/cla-documentation`);
      enqueueSnackbar(res?.message ?? `Details UPdated Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    disabled,
    router,
    isSubmitting,
  };
};
