import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Flex, Text } from '@radioshack-libs/uikit'

import { getNumberWithUnit } from 'utils/formatNumbers'

const StatisticContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 188px;
  max-width: 280px;
  width: 100%;
  opacity: 0.5;
  border-radius: 4px;
`

type StatContainerProps = {
  data: {
    value: BigNumber
    description: string
    withDollarSign: boolean
  }
}

const StatContainer: React.FC<StatContainerProps> = ({ data }) => {
  const { value, description, withDollarSign } = data
  const formattedValue = withDollarSign ? getNumberWithUnit(value.toNumber()) : value.toString()

  return (
    <StatisticContainer p="38px" flexDirection="column" justifyContent="space-between">
      <Text textAlign="center" fontSize="38px" bold>
        {withDollarSign ? '$' : ''}
        {formattedValue}
      </Text>
      <Text textAlign="center" fontSize="24px" bold>
        {description}
      </Text>
    </StatisticContainer>
  )
}

export default StatContainer
