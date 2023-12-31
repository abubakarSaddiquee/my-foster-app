import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import FamilyOrgInvolvedForm from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-form-list/FamilyOrgInvolvedForm";
import { FamilyPersonDocument } from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/family-person-document/FamilyPersonDocument";
import { useGetFamilyPersonListByIdQuery } from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/family-person-org-involved",
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "View Family Persons & Org Involved";
// ----------------------------------------------------------------------

ViewFamilyPersonForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewFamilyPersonForm() {
  const { query } = useRouter();
  console.log(query);

  const familyPersonId = query["family_person_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetFamilyPersonListByIdQuery(familyPersonId);

  console.log("Is loading: ", data);

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs tabsDataArray={["Family Org Involved", "Documents"]}>


        {/* Family Person Form */}
        {isLoading && <p>Loading...</p>}
        {isSuccess && <FamilyOrgInvolvedForm defaultValues={data[0]} disabled />}

        {/* Upload Document */}
        <FamilyPersonDocument  />
        
      </HorizaontalTabs>
    </Page>
  );
}
