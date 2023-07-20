import { Card } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { TableData } from '.';
import { useArchiveSettings } from './useArchiveSettings';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ArchiveSettings = () => {
  const { tableHeaderRefTwo, theme } = useArchiveSettings()

  // status function start here
  const checkStatus = (row:any) => {
    let color;
    switch (row?.Status) {
      case "Complete":
        color = "#4C9E78";
        break;
      case "Backup Interrupted":
        color = "#D00101";
        break;
      case "Backup Corrupted":
        color = "var(--logo-orange, #F6830F)";
        break;
      case "In Progress":
        color = "#DEBC0A";
        break;
      default:
        color = "#18938D";
        break;
    }
    return <span style={{ color }}>{row?.Status}</span>
}
// column start below
  const columns = [

    {
      accessorFn: (row: any) => row.Sr_No,
      id: "Sr_No",
      cell: (info: any) => info.getValue(),
      header: () => <span>S.NO</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Backup_File,
      id: "Backup_File",
      cell: (info: any) => info.getValue(),
      header: () => <span>Backup File</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Backup_type,
      id: "Backup_type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Backup type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.CreatedDateTime,
      id: "CreatedDateTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created Date & Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Full_Path,
      id: "Full_Path",
      cell: (info: any) => info.getValue(),
      header: () => <span>Full Path</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => checkStatus(row),
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row.Support_Ticket,
      id: "Support_Ticket",
      cell: (info: any) => info.getValue(),
      header: () => <span>Support Ticket</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Notifications === true ? <CheckCircleIcon style={{color:"#4C9E78"}}/> : <CancelIcon style={{color:"#D00101"}}/> ,
      id: "Notifications",
      cell: (info: any) => info.getValue(),
      header: () => <span>Notifications</span>,
      isSortable: true,
    },
  ];
  return (
    <Card sx={{ padding: "19px 10px 10px 10px" }}>
      <>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Backup and Archive Settings"
          showAddBtn
          // onAdd={() => router.push(`${router.pathname}/referral-scheme-add-form`)}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
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

export default ArchiveSettings