import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@radioshack-libs/uikit'

const DescriptionCardContainer = styled(Flex)`
  padding: 26px;
  max-width: 196px;
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.landingColors.coal};
  box-shadow: ${({ theme }) => theme.landingColors.shadow.cardShadow};
  border-radius: 4px;
  //   flex: 1 1 196px
`

const IconWrapper = styled(Flex)<{ background: string }>`
  height: 42px;
  width: 42px;
  background: ${({ background }) => background};
  border-radius: 100px;
`

type DescriptionCardProps = {
  data: {
    value: string
    description: string
    icon: React.FC | null
  }
  index: number
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ data, index }) => {
  const { value, description, icon } = data
  const backgroundColorForIcon = {
    0: '#DDEDFD',
    1: '#D5FBDB',
    2: '#FADDDD',
    3: '#F8D9FA',
    4: '#FFEDDE',
  }

  const colorForIcon = {
    0: '#298DF7',
    1: '#46A84A',
    2: '#EE6163',
    3: '#A146D9',
    4: '#B57B4B',
  }

  const valueColor = {
    0: '#AC2622',
    1: '#F29151',
    2: '#EE6062',
    3: '#373A5B',
    4: '#664AFB',
  }

  return (
    <DescriptionCardContainer m="10px" flexDirection="column">
      <IconWrapper background={backgroundColorForIcon[index]} />
      <Text p="16px 0 12px" fontSize="26px" bold color={valueColor[index]}>
        {value}+
      </Text>
      <Text opacity="0.5">{description}</Text>
    </DescriptionCardContainer>
  )
}

export default DescriptionCard
