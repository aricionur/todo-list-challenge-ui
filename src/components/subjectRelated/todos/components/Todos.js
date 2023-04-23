import React from "react"
import Box from "@mui/material/Box"

import { TodosProvider } from "../context/TodosContext"
import { TodoList } from "./TodoList"
import { Footer } from "./Footer"
import { CreateTodo } from "./CreateTodo"
import { Header } from "./Header"

export const Todos = () => {
  return (
    <>
      <TodosProvider>
        <Box sx={{ width: 500, justifyContent: "center", alignContent: "center", margin: 10, boxShadow: 3 }}>
          <Header />
          <CreateTodo />
          <TodoList />
          <Footer />
        </Box>
      </TodosProvider>
    </>
  )
}
