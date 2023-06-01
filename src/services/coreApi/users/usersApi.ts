import { coreApi } from 'src/services/coreApi/baseQuery'
import { User } from 'src/services/coreApi/users/types'

const getUser = coreApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserByIdQuery } = getUser
