import React from 'react'
import { Flex } from '@radioshack-libs/uikit'

import InfoBlock from './InfoBlock'
import Navigation from './Navigation'
import StatsContainers from './StatsContainers'

const Banner: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <Navigation />
      <InfoBlock />
      <StatsContainers />
    </Flex>
  )
}

export default Banner
