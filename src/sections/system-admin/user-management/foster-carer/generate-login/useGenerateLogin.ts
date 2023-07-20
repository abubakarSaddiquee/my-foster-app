import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export const useGenerateLogin = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);

  const methods: any = useForm({
    resolver: yupResolver(Yup.object().shape({
      date: Yup.string().required('Fiel is Required'),
      time: Yup.string().required('Fiel is Required')
    })),
    defaultValues: { date: '', time: '' },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods

  const onSubmit = (data: any) => { }

  return {
    openModal,
    handleOpenModal,
    methods,
    handleSubmit,
    onSubmit
  }

}