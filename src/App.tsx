import React from 'react'
import styled from 'styled-components'
import Banner from 'components/Banner'
import DescriptionBlock from 'components/DescriptionBlock'

const AppContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  width: 100%;
  padding: 38px 24px 0 24px;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <Banner />
      <DescriptionBlock />
    </AppContainer>
  )
}

export default App
