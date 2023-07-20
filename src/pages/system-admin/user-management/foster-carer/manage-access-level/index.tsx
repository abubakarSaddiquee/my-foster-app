import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import AccessLevelManagement from "@root/sections/system-admin/user-management/IFA-Admin/manage-access-level/access-level-management/AccessLevelManagement";

// Constants

const PAGE_TITLE = "Carer Menu Access";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: 'Foster Carer',
    href: "/system-admin/user-management/foster-carer",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

UserManagementLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function UserManagementLayout() {
  const router = useRouter();
  const { id, pathName } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AccessLevelManagement id={id} title={'Foster Carer Menu Items'} pathName={pathName} />
    </Page>
  );
}
