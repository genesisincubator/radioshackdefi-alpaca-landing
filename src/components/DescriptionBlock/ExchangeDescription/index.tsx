import React from 'react'
import { Flex, Text } from '@radioshack-libs/uikit'
import { useTranslation } from 'configs/Localization'

import { HighlightedTextInside } from '../BusinessDescription'
import VideoBlock from './components/VideoBlock'

const ExchangeDescription: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Flex pt="124px" alignItems="center">
      <VideoBlock />
      <Flex width="54%" ml="42px" flexDirection="column">
        <HighlightedTextInside>
          <span>{t('See how RadioShack')}</span>
          <span className="highlighted">{t('Exchange')}</span>
          <span>{t('Business')}</span>
        </HighlightedTextInside>
        <Text fontSize="20px" opacity="0.5">
          {t('Long dummy text')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ExchangeDescription
