import React from 'react'
import { Flex, Text } from '@radioshack-libs/uikit'
import { useTranslation } from 'configs/Localization'
import styled from 'styled-components'
import DescriptionRow from './components/DescriptionRow'

export const HighlightedTextInside = styled.div`
  padding-bottom: 24px;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  .highlighted {
    color: ${({ theme }) => theme.landingColors.pomegranate};
  }
`

const BusinessDescription: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Flex>
      <Flex mr="42px" flexDirection="column" width="46%">
        <HighlightedTextInside>
          <span>{t('Get a complete control of your')}</span>
          <span className="highlighted">{t('business')}</span>
          <span>{t('with RadioShack')}</span>
        </HighlightedTextInside>

        <Text fontSize="20px" opacity="0.5">
          {t('Long dummy text')}
        </Text>
      </Flex>
      <DescriptionRow />
    </Flex>
  )
}

export default BusinessDescription
