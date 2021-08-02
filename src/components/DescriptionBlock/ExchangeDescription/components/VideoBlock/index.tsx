import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Flex } from '@radioshack-libs/uikit'

const PlayerWrapper = styled(Flex)`
  border-radius: 32px;
  overflow: hidden;
  z-index: 9;
`
const GreenBlock = styled.div`
  width: 300px;
  height: 300px;
  background-image: ${({ theme }) => theme.landingColors.gradients.greenCardGradient};
  position: absolute;
  border-radius: 40px;
  transform: rotate(45deg);
  left: 0;
  top: 0;
  transform: translate(-76%, -40%) rotate(-45deg);
`

const VideoBlock: React.FC = () => {
  return (
    <Flex position="relative" width="46%" justifyContent="center" alignItems="center">
      <GreenBlock />
      <PlayerWrapper>
        <ReactPlayer
          height="340px"
          width="540px"
          controls
          url="https://www.youtube.com/watch?v=1itSqkbXIlU&ab_channel=frequenzy"
        />
      </PlayerWrapper>
    </Flex>
  )
}

export default VideoBlock
