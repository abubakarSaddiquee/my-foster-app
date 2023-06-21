import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { useGetClaDocumentationByIdQuery } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/cla-documentation",
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "View CLA Documentation";
// ----------------------------------------------------------------------

EditClaDocumentationList.getLayout = function getLayout(page: any) {
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

export default function EditClaDocumentationList() {
  const { query } = useRouter();
  const documentId = query["cla_document_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetClaDocumentationByIdQuery(documentId);
  console.log(data, "When Edit");

  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <ClaDocumentationForm
            defaultFormType={data.data.documentType}
            defaultValues={{
              ...data?.data,
              assessmentDate: new Date(data?.data?.assessmentDate),
              pepDuration: {
                to: new Date(data?.data?.pepDuration?.to),
                from: new Date(data?.data?.pepDuration?.from),
              },
            }}
          />
        )}
      </Paper>
    </Page>
  );
}