import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  // `reducerPath` - имя `slice`, куда будут сохранены состояние и экшены для этого `API`
  reducerPath: "Snaptica",
  // `baseQuery` - конфигурация для `HTTP-клиента`, который будет использоваться для отправки запросов
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL
  }),
  endpoints: () => ({}),
})