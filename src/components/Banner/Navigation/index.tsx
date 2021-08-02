import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Link, Text } from '@radioshack-libs/uikit'

import { useTranslation } from 'configs/Localization'
import { LogoWithText } from '../../Svg'

const NavigationContainer = styled(Flex)``

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  return (
    <NavigationContainer pb="58px" justifyContent="space-between">
      <LogoWithText width="270px" height="38px" />
      <Flex justifyContent="space-between">
        <Link m="0 28px" href="_">
          <Text bold fontSize="18px">
            {t('IDO')}
          </Text>
        </Link>
        <Link m="0 28px" href="_">
          <Text bold fontSize="18px">
            {t('Meet RadioShack')}
          </Text>
        </Link>
        <Button p="0 40px" ml="28px" height="48px" scale="md">
          {t('Enter App')}
        </Button>
      </Flex>
    </NavigationContainer>
  )
}

export default Navigation
