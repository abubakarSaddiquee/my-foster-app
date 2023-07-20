import { Box, Button, Grid, Select, Typography } from "@mui/material";
import { FormProvider, RHFSelect, RHFTextField } from "@root/components/hook-form";
import React from "react";
import { useChildSelection } from "./useChildSelection";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { childSelectionData } from ".";
import router from "next/router";

const ChildSelection = ({ handleIncreamentStep }: any) => {
    const { methods, handleSubmit, onSubmit, theme, isSelectedTable, } = useChildSelection();
    const activepath = "/foster-child";
    const columns = [

        {
            accessorFn: (row: any) => row.listFosterChild,
            id: "List of Foster Child to be placed",
            cell: (info: any) => info.getValue(),
            header: () => <span>List of Foster Child to be placed</span>,
        },
        {
            accessorFn: (row: any) => row.childUnderConsideration,
            id: "Child  under Consideration list ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child  under Consideration list </span>,
        },

        {
            id: "actions",
            cell: (info: any) => (
                <TableAction type="view"  onClick={() => {
                    router.push({
                      pathname: '/placement/make/child-selection',
                    //   query: { childId: "" },
                    });
                  }}/>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.collapseWrapper}>
            <Box sx={styles.searchWrap} mt={1}>
                    <RHFSelect
                        name="selectFosterCarerPendingPayment"
                        label="Select the Foster Child (Pending Placement)"
                        size="small"
                    >  
                        <option value="johnDoe">John Doe</option>
                            <option value="rutabSohail">Rutab Sohail</option>
                            <option value="taimorAhmed">Taimor Ahmed</option>
                            <option value="ahmed">Ahmed</option>
                            <option value="adil">Adil</option>
                            <option value="shahzeb">Shahzeb</option>
                    </RHFSelect>
                    <Button type="submit" sx={styles.button}>Search</Button>
                </Box>

                {isSelectedTable &&
                    <>
                        <Box sx={{ pt: 2 }}>
                            <CustomTable
                                data={childSelectionData}
                                columns={columns}
                                isLoading={false}
                                isFetching={false}
                                isError={false}
                                isSuccess={true}
                                currentPage={1}
                                onPageChange={(data: any) => {
                                    console.log("Current page data: ", data);
                                }}
                                onSortByChange={(data: any) => {
                                    console.log("Sort by: ", data);
                                }}
                                rootSX={{ my: theme.spacing(2) }}
                            />
                        </Box>
                        <Button type="submit" sx={styles.saveBtn} onClick={handleIncreamentStep}>Save and Continue</Button>
                    </>
                }
            </Box>
        </FormProvider>
    );
};

export default ChildSelection;

const styles = {
    collapseWrapper: { px: 2.5, py: 4 },
    heading: { color: "#343A40", fontSize: "14px", fontWeight: 600 },
    searchWrap: { display: "flex", gap: "40px", width: "100%", maxWidth: "550px" },
    button: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.5, py: 0.8, fontSize: "16px", fontWeight: 600, height: "40px" },
    saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2, py: 0.8, mt: 1.5, fontSize: "16px", fontWeight: 600, },
};
