import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const modelsLabApi = createApi({
    reducerPath: 'modelsLabApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://modelslab.com/api/v6/' }),
    endpoints: (builder) => ({
        generateTextFromImage: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `post/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = modelsLabApi