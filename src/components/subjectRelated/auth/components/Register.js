import React, { useState } from "react"
import { navigate } from "gatsby"
import { TextField, Button, Container, Stack, Alert, Typography } from "@mui/material"

import { useAuth } from "../context/AuthContext"
import { useForm } from "../../../../hooks/useForm"
import { useMutationRegisterUser } from "../../../../graphql/auth/useMutationRegister"

export const Register = () => {
  const { login } = useAuth()
  const [errors, setErrors] = useState([])
  const { registerUser } = useMutationRegisterUser(setErrors, login, () => navigate("/"))
  const { onChange, onSubmit } = useForm(registerUser, { username: "", email: "", password: "" })

  return (
    <Container spacing={2} maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h4" sx={{ color: "text.primary" }}>
        Welcome!
      </Typography>
      <Typography variant="h5" sx={{ color: "text.disabled", marginBottom: 5 }}>
        Sign up to start using Simpledo today.
      </Typography>
      <Stack spacing={2} paddingBottom={2}>
        <TextField key="register-username" label="Username" name="username" onChange={onChange} />
        <TextField key="register-email" label="Email" name="email" onChange={onChange} />
        <TextField key="register-password" label="Password" name="password" onChange={onChange} />
      </Stack>
      {errors.map((error, index) => (
        <Alert key={index} severity="error" sx={{ marginBottom: 2 }}>
          {error.message}
        </Alert>
      ))}
      <Button variant="contained" onClick={onSubmit}>
        Register
      </Button>
    </Container>
  )
}
