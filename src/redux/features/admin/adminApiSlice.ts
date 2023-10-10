import { TAdminData, TPreferAdminData } from '@/components/pages/admin/types';
import { apiSlice } from '../api/apiSlice';
import { preferAdminData } from '@/shared/lib/preferAdminData';

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminTableAllInfo: builder.query<TPreferAdminData, void>({
      query: () => '/adminTableData',
      transformResponse: (response: TAdminData[]) => preferAdminData(response),
    }),
  }),
});

export const { useGetAdminTableAllInfoQuery } = adminApiSlice;
