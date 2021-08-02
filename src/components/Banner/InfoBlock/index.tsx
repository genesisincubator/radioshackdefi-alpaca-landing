import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text } from '@radioshack-libs/uikit'

import { LogoRound } from 'components/Svg'
import { useTranslation } from 'configs/Localization'

const InfoBlockContainer = styled(Flex)`
  max-width: 882px;
  margin: auto;
`

const TimerWrapper = styled.div`
  padding: 24px 36px;
  background-image: ${({ theme }) => theme.landingColors.gradients.redButtonGradient};
  border-radius: 42px;
  margin: 24px 0 32px;
  box-shadow: ${({ theme }) => theme.landingColors.shadow.timerButtonShadow};
`

const ButtonsWrapper = styled(Flex)`
  opacity: 0.6;
`

const InfoBlock: React.FC = () => {
  const { t } = useTranslation()
  return (
    <InfoBlockContainer flexDirection="column" alignItems="center">
      <LogoRound p="12px" width="115" />
      <Text p="12px" fontSize="48px" bold>
        {t('Be a DeFi Chef')}
      </Text>
      <Text p="12px" fontSize="24px" opacity="0.68" textAlign="center">
        {t('Swap, earn, stack')}
      </Text>
      <TimerWrapper>
        <Text bold fontSize="32px">
          01:24:11:32
        </Text>
      </TimerWrapper>
      <ButtonsWrapper>
        <Button p="0 44px" marginX="8px" height="48px">
          {t('Enter App')}
        </Button>
        <Button variant="tertiary" p="0 44px" marginX="8px" height="48px">
          {t('Learn More')}
        </Button>
      </ButtonsWrapper>
    </InfoBlockContainer>
  )
}

export default InfoBlock
