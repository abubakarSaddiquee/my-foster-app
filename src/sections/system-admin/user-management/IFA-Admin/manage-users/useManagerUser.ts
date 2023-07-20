import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialValue, validationSchema } from ".";

export const useManagerUser = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Add New');

  const handleOpenModal = (action: any, id?: string | null) => {
    setOpenModal(!openModal);
    setModalTitle(action);
  };

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValue,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    openModal,
    handleOpenModal,
    methods,
    onSubmit,
    handleSubmit,
    modalTitle
  }
}