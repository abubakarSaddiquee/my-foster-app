import { baseAPI, TAGS } from "@root/services/baseApi";

export const referenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceDetail: builder.query({
      query: (params: any) => "/application-form/reference-detail",
    }),
    getReferenceDetails: builder.query({
      query: (id: any) => `/application-form/reference-details/${id}`,
    }),
    postReferenceDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/reference-detail`,
        method: "Post",
        body: formData,
      }),
    }),
    updateReference: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/reference-details`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetReferenceDetailQuery,
  useGetReferenceDetailsQuery,
  usePostReferenceDetailMutation,
  useUpdateReferenceMutation,
} = referenceApi;
