import { useRouter } from "next/router";
import { useState } from "react";

export const useUserManagement = () => {

  const router = useRouter();

  const [collapse, setCollapse] = useState(false);
  const [Id, setId] = useState('');

  const handleCollapse = (id: string) => {
    setCollapse(collapse && id === Id ? false : true);
    setId(id);
  }
  const handleRowClick = (row: any, parentId: string, pathName: string) => {
    row.subData ?
      handleCollapse(row.id) :
      router.push({ pathname: `/system-admin/user-management/${pathName}/manage-access-level/carer-info-form`, query: { parentId, id: row.id } })
  };

  const handleSubRowClick = (row: any, subRow: any) => { console.log(row, subRow) };

  const handleActionCheckboxChange = (e: any, action: string, id: string) => {
    const { checked } = e.target;
    switch (action) {
      case 'add':

        break;

      default:
        break;
    }
  };

  const handleActionChange = (action: string) => {
    switch (action) {
      case 'add':

        break;

      default:
        break;
    }
  }

  return {
    Id,
    collapse,
    handleCollapse,
    handleRowClick,
    handleSubRowClick,
    handleActionChange,
    handleActionCheckboxChange
  }
}