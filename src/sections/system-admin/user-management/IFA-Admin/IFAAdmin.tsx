import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import ManagerUser from './manage-users/ManagerUser'
import ManageAccessLevel from './manage-access-level/ManageAccessLevel'

const IFAAdmin = () => {
  return (
      <HorizaontalTabs tabsDataArray={['Manage Users', 'Manage Access Levels']}>
        <ManagerUser />
        <ManageAccessLevel />
      </HorizaontalTabs>
  )
}

export default IFAAdmin