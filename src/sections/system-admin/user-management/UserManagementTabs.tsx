import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import ManagerUser from './IFA-Admin/manage-users/ManagerUser'
import ManageAccessLevel from './IFA-Admin/manage-access-level/ManageAccessLevel'
import GenerateLogin from './foster-carer/generate-login/GenerateLogin'

const UserManagementTabs = ({ tabLabel, tableHeaderTitle, pathName }: any) => {

  const tabsDataArray = ['Manage Users', 'Manage Access Levels'];
  tabLabel && tabsDataArray.splice(1, 0, tabLabel);

  return (
    <HorizaontalTabs tabsDataArray={tabsDataArray}>
      <ManagerUser title={tableHeaderTitle} />
      {tabLabel && <GenerateLogin title={tableHeaderTitle} />}
      <ManageAccessLevel title={tableHeaderTitle} pathName={pathName} />
    </HorizaontalTabs>
  )
}

export default UserManagementTabs