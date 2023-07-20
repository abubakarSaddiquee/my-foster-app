import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MatchingFormDataValidationSchema, matchingDefaultValues } from ".";
import { useRouter } from 'next/router';

export const useMatching = () => {
  const router = useRouter();
  const [selectValueFosterCarerOrChild, setselectValueFosterCarerOrChild] = useState('');
  const [fosterOptionsArray, setfosterOptionsArray] = useState([])
  const [isSecondFieldSelected, setIsSecondFieldSelected] = useState(false);
  const [selectValueName, setSelectValueName] = useState('');
  const [isOpenHowItWorkModal, setIsOpenHowItWorkModal] = useState(false);


  useEffect(() => {
    const { selectedValue, childValue }:any = router.query;

    if (selectedValue) {
      setselectValueFosterCarerOrChild(selectedValue);
      setIsSecondFieldSelected(selectedValue !== "Select");
    }

    if (childValue) {
      setSelectValueName(childValue);
    }
  }, []);

  const methods: any = useForm({
    resolver: yupResolver(MatchingFormDataValidationSchema),
    defaultValues: matchingDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  }
  
  const onSelectCarerChildHandleChange = (event: any) => {
    const selectedValue = event.target.value;
    setIsSecondFieldSelected(true);
    setselectValueFosterCarerOrChild(selectedValue)
    setSelectValueName('')
   
    router.push({
      pathname: '/matching',
      query: { selectedValue },
    });
  }
  const onSelectNameHandleChange = (event: any) => {
    const selectedValue = event.target.value;
    setIsSecondFieldSelected(selectedValue !== 'Select');
    setSelectValueName(selectedValue); 

  };

const onClickNameHandleChange = (event: any,id:any) =>{
  const selectedValue = event.target.value;
  setIsSecondFieldSelected(selectedValue !== 'Select');
  setSelectValueName(selectedValue);
  console.log('Selected option ID:', id);
  router.push({
    pathname: '/matching',
    query: {
      selectedValue: selectValueFosterCarerOrChild,
      childValue: id,
     
    },
  });
}

  const handleGetFosterOptions = (event: any) => {
    setfosterOptionsArray(event)
  }
   
  // button
  const buttonLabel =
  selectValueFosterCarerOrChild === "fosterCarer"
    ? "View Carer Details"
    : "View Child Details";

const buttonPath =
  selectValueFosterCarerOrChild === "fosterCarer"
    ? `${router.pathname}/carer-details`
    : `${router.pathname}/recommondations-result/child-details`;
  return {
    methods,
    handleSubmit,
    onSubmit,
    selectValueFosterCarerOrChild, fosterOptionsArray,
    isSecondFieldSelected, selectValueName,
    onSelectCarerChildHandleChange, onSelectNameHandleChange,onClickNameHandleChange,
    handleGetFosterOptions,isOpenHowItWorkModal, setIsOpenHowItWorkModal,buttonLabel,buttonPath

  };
};
