import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePostExclusionInfoRecordMutation } from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { enqueueSnackbar } from "notistack";

const useNewChildExclusionInfo = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const fosterChildId = Object.keys(router?.query)[0];

  const [postChildInfoRecord] = usePostExclusionInfoRecordMutation();

  const defaultValues = {
    classStudying: "",
    type: "",
    dateExclusion: new Date(todayDate),
    dateReturn: new Date(todayDate),
    exclusionDetails: "",
    actionTaken: "",
    outcome: "",
  };

  const childExclusionSchema = Yup.object().shape({
    classStudying: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    dateReturn: Yup.date().required("Required"),
    dateExclusion: Yup.date().required("Required"),
    exclusionDetails: Yup.string().required("Required"),
    actionTaken: Yup.string().required("Required"),
    outcome: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  console.log(methods);

  const onSubmit = (data: any) => {
    try {
      const res = postChildInfoRecord({ data, fosterChildId });
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar(`Something went Wrong!`, {
        variant: "error",
      });
    }
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useNewChildExclusionInfo;
