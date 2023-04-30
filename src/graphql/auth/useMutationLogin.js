import { useMutation, gql } from "@apollo/client"

const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput) {
    loginUser(input: $input) {
      email
      password
      token
      username
    }
  }
`

export const useMutationLoginUser = (setErrors, login, navigate) => {
  const [mutate, { data }] = useMutation(LOGIN_USER, {
    update: (cache, { data: { loginUser: userData } }) => {
      login(userData)
      navigate()
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors)
    },
  })

  const loginUser = values => mutate({ variables: { input: values } })

  return { loginUser, userData: !!data && data.loginUser }
}
