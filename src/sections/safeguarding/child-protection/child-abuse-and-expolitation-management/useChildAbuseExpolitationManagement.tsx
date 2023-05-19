import TableDropdown from "@root/pages/safeguarding/collapsible-table/table-dropdown"
import { useRouter } from "next/router";
import { useState } from "react";

export const useChildAbuseExpolitationManagement = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);
  const router = useRouter();
  const path = '/safeguarding/child-protection/child-abuse-and-expolitation-management';

  const columns = [
    { id: '1', title: 'Case ID', render: (data: any) => <span>{data.caseId}</span> },
    { id: '2', title: 'Child Name', render: (data: any) => <span>{data.childName}</span> },
    { id: '3', title: 'Type', render: (data: any) => <span>{data.allegationType}</span> },
    { id: '4', title: "Exploitation Description Document", render: (data: any) => <span>{data.document}</span> },
    { id: '5', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} /> },
    { id: '6', title: 'Person involved in Exploitation  ( Role )', render: (data: any) => <span>{data.person}</span> },
  ]
  const innerColums = [
    { id: '1', title: 'Stage', render: (data: any) => <span>{data.stage}</span> },
    { id: '2', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} /> },
    { id: '3', title: 'Date', render: (data: any) => <span>{data?.date}</span> },
    { id: '4', title: 'Comments', render: (data: any) => <span>{data?.comments}</span> },
    { id: '5', title: 'Performed by  (Role)', render: (data: any) => (<span>{data?.role}</span>) },
    { id: '5', title: 'Stake Holders (Role ) ', render: (data: any) => (<span>{data?.holders}</span>) },
    { id: '5', title: 'Other Documents / Evidence ', render: (data: any) => (<span>{data?.document}</span>) },
  ];

  const handleAction = (action: string, row: any) => {
    const { abuseType } = row;
    if (action === 'delete') setDeleteModal(!deleteModal);
    if (action === 'edit' && abuseType === 'criminal')
      router.push({ pathname: `${path}/child-criminal-exploitation/${row._id}`, query: { action } });
    if (action === 'edit' && abuseType === 'sexual')
      router.push({ pathname: `${path}/child-sexual-exploitation/${row._id}`, query: { action } });
    if (action === 'view' && abuseType === 'criminal')
      router.push({ pathname: `${path}/child-criminal-exploitation/${row._id}`, query: { action } });
    if (action === 'view' && abuseType === 'sexual')
      router.push({ pathname: `${path}/child-sexual-exploitation/${row._id}`, query: { action } });
  };

  const handleRoute = (subPath: string) => router.push(`${path}/${subPath}/add`);

  return {
    router,
    columns,
    innerColums,
    openModal,
    deleteModal,
    handleAction,
    handleOpenModal,
    handleDeleteModal,
    handleRoute,
  }
}


