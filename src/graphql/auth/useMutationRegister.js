import { useMutation, gql } from "@apollo/client"

const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterInput) {
    registerUser(input: $input) {
      email
      password
      token
      username
    }
  }
`

export const useMutationRegisterUser = (setErrors, login, navigate) => {
  const [mutate, { data }] = useMutation(REGISTER_USER, {
    update: (cache, { data: { registerUser: userData } }) => {
      login(userData)
      navigate()
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors)
    },
  })

  const registerUser = values => mutate({ variables: { input: values } })

  return { registerUser, userData: !!data && data.registerUser }
}
