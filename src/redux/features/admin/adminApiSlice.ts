import { TMockData, TPreferMockData } from "@/components/pages/admin/mockData";
import { apiSlice } from "../api/apiSlice";
import { preferMockData } from "@/components/pages/admin/ui/preferMockData";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminTableAllInfo: builder.query<TPreferMockData, void>({
      query: () => "/adminTableData",
      transformResponse: (response: TMockData[]) => {
        const data = preferMockData(response);
        return data;
      },
    }),
  }),
});

export const { useGetAdminTableAllInfoQuery } = adminApiSlice;
