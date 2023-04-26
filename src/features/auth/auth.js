import { api } from "../api/api";

export const auth = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query({
            query: (body) => ({
                url: "/properties",
                method: "POST",
                body
            }),
        }),
    }),
});

export const { useGetPropertiesQuery } = propertiesApi;