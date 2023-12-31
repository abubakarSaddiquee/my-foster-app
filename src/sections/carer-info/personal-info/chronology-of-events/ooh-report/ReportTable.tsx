import CustomTable from "@root/components/Table/CustomTable";
import React, { useRef } from "react";
import { useReportTable } from "./useReportTable";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import dayjs from "dayjs";

const ReportTable = () => {
  const tableHeaderRef = useRef<any>();
  //OOH Report Custom Hook
  const { router } = useReportTable();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      reportingTime: "10/10/2021",
      placementRequired: "Text",
      status: "Text",
    },
    {
      srNo: 2,
      reportingTime: "10/10/2021",
      placementRequired: "Text",
      status: "Text",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.reportingTime ?? "-",
      id: "reportingTime",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Reporting Date/Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementRequired,
      id: "placementRequired",
      cell: (info: any) => info.getValue(),
      header: () => <span>Emergency Placement Required</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-chronology-of-events/ooh-report"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        title="OOH Report"
        searchKey="search"
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default ReportTable;
