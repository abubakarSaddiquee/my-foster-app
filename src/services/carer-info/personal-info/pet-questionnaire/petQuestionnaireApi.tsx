import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "PET_QUESTIONNAIRE";

export const petQuestionnaireApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPetQuestionnaireTableApi: builder.query({
      query: ({ params }: any) => ({
        url: "pet-questionnaire/questionnaire-list",
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.questionnaire_list, TAG),
    }),
    postPetQuestionnaireAApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "pet-questionnaire/questionnaire1",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    patchPetQuestionnaireAApi: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `pet-questionnaire/questionnaire1/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    patchPetQuestionnaireBApi: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `pet-questionnaire/questionnaire2/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    patchPetQuestionnaireCApi: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, formData } = data;

        return {
          url: `pet-questionnaire/questionnaire3/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: [TAG],
    }),
    patchPetQuestionnaireDApi: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, formData } = data;
        return {
          url: `pet-questionnaire/questionnaire4/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: [TAG],
    }),
    getPetQuestionnaireById: builder.query({
      query: (id) => `/pet-questionnaire/getquestionnaire/${id}`,
      // providesTags: (result) => generalTags(result, TAG),
    }),
  }),
});

export const {
  useGetPetQuestionnaireTableApiQuery,
  usePostPetQuestionnaireAApiMutation,
  usePatchPetQuestionnaireAApiMutation,
  usePatchPetQuestionnaireBApiMutation,
  usePatchPetQuestionnaireCApiMutation,
  usePatchPetQuestionnaireDApiMutation,
  useGetPetQuestionnaireByIdQuery,
} = petQuestionnaireApi;
