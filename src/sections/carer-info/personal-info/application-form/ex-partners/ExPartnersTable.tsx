import React, { useRef, useState } from "react";
import ExPartnersViewForm from "./ExPartnersViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useTheme } from "@mui/material";
import { columns } from ".";

import { enqueueSnackbar } from "notistack";
import { useExPartnersTable } from "./useExPartnersTable";

export default function ExPartnersView({ apllicationFormid, role }: any) {
  let {
    changeView,
    viewData,
    setViewData,
    theme,
    exPartnerData,
    setExPartnerData,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useExPartnersTable(apllicationFormid, role);

  return (
    <>
      {viewData ? (
        <ExPartnersViewForm
          role
          disabled={viewData == "view" ? true : false}
          exPartnerData={exPartnerData}
          changeView={changeView}
          viewData={viewData}
          apllicationFormid={apllicationFormid}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Ex-Partners(s) Details"
            showAddBtn={role == "foster-carer" ? false : true}
            onAdd={() => {
              changeView("add");
            }}
            searchKey="search"
            onChanged={headerChangeHandler}
          />
          <CustomTable
            showSerialNo
            data={data?.data?.application_form_expartners}
            columns={columns(
              changeView,
              setExPartnerData,
              role,
              listDeleteHandler
            )}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            currentPage={meta?.page}
            totalPages={meta?.pages}
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
          />{" "}
        </>
      )}
    </>
  );
}
