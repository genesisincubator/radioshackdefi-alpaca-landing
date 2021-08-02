import React from 'react'
import styled from 'styled-components'
import { Flex } from '@radioshack-libs/uikit'
import { useTranslation } from 'configs/Localization'

import DescriptionCard from '../DescriptionCard'

const DescriptionRowContainer = styled(Flex)`
  margin: 0 -10px;
`

const DescriptionRow: React.FC = () => {
  const { t } = useTranslation()
  const mockData = [
    { value: '3000', description: t('Short dummy text'), icon: null },
    { value: '38000', description: t('Short dummy text'), icon: null },
    { value: '1700000', description: t('Short dummy text'), icon: null },
    { value: '600000', description: t('Short dummy text'), icon: null },
    { value: '66000000', description: t('Short dummy text'), icon: null },
  ]

  return (
    <DescriptionRowContainer width="54%" flexWrap="wrap">
      {mockData.map((data, index) => {
        return <DescriptionCard data={data} key={data.value} index={index} />
      })}
    </DescriptionRowContainer>
  )
}

export default DescriptionRow
