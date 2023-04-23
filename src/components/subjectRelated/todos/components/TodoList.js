import React, { useEffect } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"

import { useQueryGetTodos } from "../../../../graphql/todos/useQueryGetTodos"
import { useMutationMarkTodoCompleted } from "../../../../graphql/todos/useMutationMarkTodoCompleted"
import { useMutationMarkTodoUncompleted } from "../../../../graphql/todos/useMutationMarkTodoUncompleted"
import { useMutationDeleteTodo } from "../../../../graphql/todos/useMutationDeleteTodo"
import { useTodos } from "../context/TodosContext"

export const TodoList = () => {
  const { todos, loading, error } = useQueryGetTodos()
  const { markTodoCompleted } = useMutationMarkTodoCompleted()
  const { markTodoUncompleted } = useMutationMarkTodoUncompleted()
  const { deleteTodo } = useMutationDeleteTodo()
  const { onChange, state } = useTodos()
  const { showing } = state
  const showingTodos = todos && showing === "completed" ? todos.filter(x => x.isCompleted) : showing === "incompleted" ? todos.filter(x => !x.isCompleted) : todos

  const handleMarkChange = event => {
    if (event.target.checked) markTodoCompleted(+event.target.value)
    else markTodoUncompleted(+event.target.value)
  }

  const handleClearClick = id => () => {
    deleteTodo(id)
  }

  useEffect(() => {
    if (todos?.length) onChange({ todos })
  }, [todos])

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {showingTodos && (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {showingTodos.map(({ id, title, isCompleted }) => {
            return (
              <ListItem
                key={id}
                secondaryAction={
                  <IconButton edge="end" aria-label="clear" onClick={handleClearClick(id)}>
                    <ClearIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox edge="start" value={id} onChange={handleMarkChange} checked={isCompleted} />
                  </ListItemIcon>
                  <ListItemText id={id} primary={title} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      )}
    </>
  )
}
