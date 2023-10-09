import { TMockData } from "@/components/pages/admin/mockData";
import { apiSlice } from "../api/apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminTableAllInfo: builder.query<TMockData[], void>({
      query: () => "/adminTableData",
    }),
  }),
});

export const { useGetAdminTableAllInfoQuery } = adminApiSlice;
