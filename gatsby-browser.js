import React from "react"

import { RootElement } from "./src/util/gatsby"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}

// export const wrapRootElement = ({ element }) => {
//     return (
//       <StylesProvider {...stylesProviderProps}>
//         <RootElement>{element}</RootElement>
//       </StylesProvider>
//     )
//   }
