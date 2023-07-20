import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import CarerInfoForm from "@root/sections/system-admin/user-management/carer-info-forms/CarerInfoForm";

// Constants

const PAGE_TITLE = "Carer Info Forms";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: 'Carer Menu Access',
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
  const { parentId, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <CarerInfoForm parentId={parentId} id={id} />
    </Page>
  );
}
