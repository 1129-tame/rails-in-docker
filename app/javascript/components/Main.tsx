import React from "react";
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `
  
  const Main: React.FC = () => {
      return (
        <>
          <GlobalStyle />
          <Editor />
        </>
      )
  }
    
export default Main;