import { useMutation, gql } from "@apollo/client"

import { GET_TODOS } from "./useQueryGetTodos"

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      id
      isCompleted
      title
    }
  }
`

export const useMutationCreateTodo = () => {
  const [mutate, { data, loading, error }] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  })

  const createTodo = title => {
    const variables = { title }
    mutate({ variables, fetchPolicy: "no-cache" })
  }

  return { createTodo, todo: !!data && data.createTodo, loading, error }
}
