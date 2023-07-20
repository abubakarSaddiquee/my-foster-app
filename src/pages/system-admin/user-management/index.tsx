import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import UserManagement from "@root/sections/system-admin/user-management/UserManagement";

// Constants

const PAGE_TITLE = "User Management";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: 'System Admin',
    href: "/system-admin",
  },
  {
    name: "User Management",
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
  return (
    <Page title={PAGE_TITLE}>
      <UserManagement />
    </Page>
  );
}
