import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import UserManagementTabs from "@root/sections/system-admin/user-management/UserManagementTabs";

// Constants

const PAGE_TITLE = "Foster Carer";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: 'User Management',
    href: "/system-admin/user-management",
  },
  {
    name: "Foster Carer",
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
      <UserManagementTabs tabLabel={'Generate Login'} tableHeaderTitle={'Foster Carer(s)'} pathName={'foster-carer'} />
    </Page>
  );
}

