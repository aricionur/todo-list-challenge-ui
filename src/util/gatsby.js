import * as React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

import { AuthProvider } from "../components/subjectRelated/auth/context/AuthContext"

const httpLink = createHttpLink({ uri: "http://localhost:4000/" })

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("token")

  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  }
})

export const RootElement = ({ children }) => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  )
}
