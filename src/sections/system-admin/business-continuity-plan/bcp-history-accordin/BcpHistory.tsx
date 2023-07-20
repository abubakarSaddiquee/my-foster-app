import React from 'react'
import { useBcpHistory } from './useBcpHistory';
import TableHeader from '@root/components/TableHeader';
import { Box, Card, Checkbox } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import pdfDownload from "@root/assets/svg/safeguarding/pdfDownload.svg";
import { TableData } from '.';
import Image from 'next/image';

const BcpHistory = () => {
    const { tableHeaderRefTwo, theme } = useBcpHistory()

  // column start below
    const columns = [
        {
            id: "select",
            header: ({ table, row }: any) => {
              console.log(table.getSelectedRowModel().flatRows);
              return (
                <Box>
                  <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                  />
                </Box>
              );
            },
            cell: ({ row, table }: any) => (
              <Box>
                <Checkbox
                  disabled={row?.original?.Assigned}
                  checked={row?.original?.Assigned ? false : row.getIsSelected()}
                  onChange={row.getToggleSelectedHandler()}
                />
              </Box>
            ),
          },
  
      {
        accessorFn: (row: any) => row.Sr_No,
        id: "Sr_No",
        cell: (info: any) => info.getValue(),
        header: () => <span>S.NO</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Date_Invoked,
        id: "Date_Invoked",
        cell: (info: any) => info.getValue(),
        header: () => <span>Date Invoked</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Steps_Taken,
        id: "Steps_Taken",
        cell: (info: any) => info.getValue(),
        header: () => <span>Steps Taken</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => 
        (<Box sx={{display:"flex",alignItems:"center",}}>
            <Image src={pdfDownload} alt="pdf"/>
            <span style={{marginLeft:"10px"}}>{row.Outcome}</span>
        </Box>)
        ,
        id: "Outcome",
        cell: (info: any) =>info.getValue(),
        header: () => <span>Outcome</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Bcp_Manager,
        id: "Bcp_Manager",
        cell: (info: any) => info.getValue(),
        header: () => <span>BCP Manager</span>,
        isSortable: true,
      },
    ];
    return (
      <Card sx={{ padding: "10px 10px 10px 10px" }}>
        <>
          
          {/* table body start here */}
          <CustomTable
            data={TableData}
            columns={columns}
            isLoading={false}
            isFetching={false}
            isError={false}
            isSuccess={true}
            isPagination={false}
            // count={Math.ceil(data?.data?.meta?.total / limit)}
            currentPage={1}
            onPageChange={(data: any) => {
              console.log("Current page data: ", data);
            }}
            onSortByChange={(data: any) => {
              console.log("Sort by: ", data);
            }}
            rootSX={{ my: theme.spacing(2) }}
          />
        </>
      </Card>
    )
  }
export default BcpHistory