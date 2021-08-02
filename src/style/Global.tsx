import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@radioshack-libs/uikit/dist/theme'
import './fonts/stylesheet.css'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle