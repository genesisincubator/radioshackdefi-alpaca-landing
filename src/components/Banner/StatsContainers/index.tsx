import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Flex } from '@radioshack-libs/uikit'

import { useTranslation } from 'configs/Localization'
import StatContainer from './components/StatContainer'

const StatisticsContainer = styled(Flex)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const StatsContainers: React.FC = () => {
  const { t } = useTranslation()
  const fakeData = [
    { value: new BigNumber('8.01'), description: t('RadioShack Price'), withDollarSign: true },
    { value: new BigNumber('298000000000000'), description: t('Total Liquidity'), withDollarSign: true },
    { value: new BigNumber('991000000000'), description: t('Total Volume'), withDollarSign: true },
    { value: new BigNumber('2020'), description: t('Total Pairs'), withDollarSign: false },
  ]
  return (
    <StatisticsContainer mt="58px" justifyContent="space-between" marginX="90px">
      {fakeData.map((data) => {
        return <StatContainer data={data} key={data.description} />
      })}
    </StatisticsContainer>
  )
}

export default StatsContainers
