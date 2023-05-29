import { baseAPI } from "@root/services/baseApi";

export const carInsuranceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    carInsuranceList: builder.query<null, object>({
      query: (search: any) => ({
        url: "chronology-events/allegation/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["CAR_INSURANCE"],
    }),
  }),
});
export const { useCarInsuranceListQuery } = carInsuranceApi;