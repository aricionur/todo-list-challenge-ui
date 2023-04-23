import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

import { useMutationCreateTodo } from "../../../../graphql/todos/useMutationCreateTodo"

export const CreateTodo = () => {
  const { createTodo } = useMutationCreateTodo()
  const [value, setValue] = useState("")

  const onChange = event => setValue(event.target.value)

  const keyPress = e => {
    if (e.keyCode === 13) {
      createTodo(value)
      setValue("")
    }
  }

  return (
    <Box sx={{ marginLeft: 2 }}>
      <TextField id="todoCreate" label="Add a new todo" value={value || ""} variant="standard" onKeyDown={keyPress} onChange={onChange} />
    </Box>
  )
}
