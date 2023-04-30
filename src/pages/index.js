import React from "react"

import MainLayout from "../components/layouts/MainLayout"
import { Todos } from "../components/subjectRelated/todos/components/Todos"

const HomePage = () => {
  return (
    <MainLayout>
      <Todos />
    </MainLayout>
  )
}

export default HomePage
