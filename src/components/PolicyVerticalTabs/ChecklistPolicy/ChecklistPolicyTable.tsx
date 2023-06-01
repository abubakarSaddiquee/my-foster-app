import React, { useState } from 'react';
import CustomTable from '@root/components/Table/CustomTable';
import { Box, Checkbox, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import { useRouter } from 'next/router';

const ChecklistPolicyTable = ({ tableData }: any) => {
    const theme = useTheme();
    const [checklistActionObj, setChecklistActionObj] = useState({});
    const route = useRouter();

    const handleTableAction = (action: any) => {
        setChecklistActionObj(action);
    }

    const columns = [
        {
            id: "select",
            header: ({ table, row }: any) => {
                console.log(table.getSelectedRowModel().flatRows);
                return (
                    <Box>
                        <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
                    </Box>
                );
            },
            cell: ({ row, table }: any) => (
                <Box>
                    <Checkbox disabled={row?.original?.Assigned} checked={row?.original?.Assigned ? false : row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.no,
            id: "Sr. No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.title,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Title</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.dateUploaded,
            id: "Date Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Uploaded</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.author,
            id: "Author",
            cell: (info: any) => info.getValue(),
            header: () => <span>Author</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentType,
            id: "Document Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.versions,
            id: "Versions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Versions</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box display={"flex"} gap={0.5}>
                    {["view", "print", "download"].map((action) => (
                        <span key={action} style={{ flexShrink: 0 }}>
                            <TableAction type={action} onClicked={() => handleTableAction(info.row.original)} />
                        </span>
                    ))}
                </Box>
            ),
            header: () => <span>actions</span>,
        },
    ];

    return (
        <CustomTable
            data={tableData}
            columns={columns}
            isLoading={false}
            isFetching={false}
            isError={false}
            isSuccess={true}
            onPageChange={(data: any) => {
                console.log('Current page data: ', data);
            }}
            onSortByChange={(data: any) => {
                console.log('Sort by: ', data);
            }}
            rootSX={{ my: theme.spacing(2) }}
        />
    );
};

export default ChecklistPolicyTable;
