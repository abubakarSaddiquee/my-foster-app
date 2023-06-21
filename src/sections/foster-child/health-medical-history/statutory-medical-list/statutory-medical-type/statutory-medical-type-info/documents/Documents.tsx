import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useDocuments } from "./useDocuments";

const Documents = () => {
  const {
    setPage,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    submitStatutoryMedicalListInfoDocumentData,
    query,
  } = useDocuments();

  return (
    <UploadDocuments
      readOnly={query?.action === "view"}
      tableData={data?.data}
      isLoading={isLoading}
      column={[
        "documentName",
        "documentType",
        "documentDate",
        "uploadBy",
        "password",
      ]}
      isFetching={isFetching}
      isError={isError}
      isSuccess={isSuccess}
      modalData={(data: any) => {
        submitStatutoryMedicalListInfoDocumentData(data);
      }}
      searchParam={(data: any) => {
        setSearchValue(data.search);
        console.log("Updated params: ", data);
      }}
      currentPage={data?.meta?.page}
      totalPages={data?.meta?.pages}
      onPageChange={(pageNo: any) => {
        setPage((page) => (pageNo - 1) * 10);
      }}
    />
  );
};

export default Documents;