import React from "react";
import { Card } from "@mui/material";
import { tableMockData } from ".";
import { useAreaOfficeSetup } from "./useAreaOfficeSetup";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const AreaOfficeSetup = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } =
    useAreaOfficeSetup();

  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          title={"Area Office Name"}
          showAddBtn
          onAdd={() => handleAction("add")}
        />
        <CustomTable
          isError={false}
          isLoading={false}
          isFetching={false}
          isSuccess={true}
          data={tableMockData}
          columns={columns}
        />
      </Card>
      <DeleteModel
        open={openDelete}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
    </>
  );
};

export default AreaOfficeSetup;
