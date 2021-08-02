import React from 'react'
import ReactDOM from 'react-dom'
import { light, ResetCSS } from '@radioshack-libs/uikit'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'configs/Localization'
import GlobalStyle from 'style/Global'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <LanguageProvider>
        <GlobalStyle />
        <ResetCSS />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
