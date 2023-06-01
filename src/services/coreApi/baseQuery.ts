import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL: string = import.meta.env.VITE_CORE_API_URL

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepaireHeaders: (headers: Headers) => {
      headers.set('Content-type', 'application/json')
      headers.set('Origin', 'http://120.0.0.1:5173')
      console.log(headers)
      return headers
    },
  }),
  endpoints: () => ({}),
})
