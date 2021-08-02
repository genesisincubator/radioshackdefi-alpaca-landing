import { Flex } from '@radioshack-libs/uikit'
import React from 'react'
import BusinessDescription from './BusinessDescription'
import ExchangeDescription from './ExchangeDescription'

const DescriptionBlock: React.FC = () => {
  return (
    <Flex p="175px 0 124px" flexDirection="column">
      <BusinessDescription />
      <ExchangeDescription />
    </Flex>
  )
}

export default DescriptionBlock
