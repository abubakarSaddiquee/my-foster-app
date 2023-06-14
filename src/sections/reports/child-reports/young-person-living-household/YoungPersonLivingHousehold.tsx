import React from "react";
import {Card,} from "@mui/material";
import { tableMockData } from ".";
import { useYoungPersonLivingHousehold } from "./useYoungPersonLivingHousehold";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const YoungPersonLivingHousehold = () => {
  const { handleSearch, handleAction, openDelete, handleCloseDeleteModal, columns } =
  useYoungPersonLivingHousehold();


  return (
    <>
      <Card sx={{ ...styles.cardStyle, py: 2, px: 1 }}>
        <TableHeader title={"YOUNG PERSON LIVING IN THE HOUSEHOLD'S COMMENTS"} showAddBtn onAdd={() => handleAction("add")} />
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

export default YoungPersonLivingHousehold;

const styles = {
  title: {
    fontWeight: 600,
    fontSize: "16px",
  },
  cardStyle: {
    "& .MuiStack-root": {
      "& .MuiStack-root": {
        marginLeft: "auto",
        marginRight: "20px",
      },
    },
  },
};
