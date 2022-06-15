// sivu logo component

import { chakra, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import ChakraNextImage from 'components/chakra-next-image'

export const Logo = () => {
  const fill = useColorModeValue('#2D3748', '#fff')

  return (
    <NextLink href='#' passHref>
      <ChakraNextImage
        height={54}
        width={250}
        src={useColorModeValue(
          'https://user-images.githubusercontent.com/33565767/173816123-99707c2a-0bf0-46a0-a1c0-c4c4780beeb4.png',
          'https://user-images.githubusercontent.com/33565767/173816379-d0656a5b-5f9b-48c2-b96b-546668bae6bb.png'
        )}
        alt='Sivu logo'
      />
    </NextLink>
  )
}

export const LogoIcon = () => {
  return (
    <chakra.svg
      data-v-fde0c5aa
      xmlns='http://www.w3.org/2000/svg'
      height={'1000px'}
      width={'1000px'}
      viewBox='0 0 300 300'
    >
      <g display='none'>
        <rect
          x='-195.323'
          y='-102.677'
          display='inline'
          fill='#000000'
          width='473.333'
          height='236'
        ></rect>
      </g>
      <g display='none'>
        <g display='inline'>
          <polygon
            fill='#000000'
            points='0,7.582 11.51,0.972 23.019,7.582 23.019,20.804 11.51,27.415 0,20.804   '
          ></polygon>
          <polygon points='21.677,31.028 32,13.189 11.355,13.189   '></polygon>
        </g>
      </g>
      <g display='none'>
        <g display='inline'>
          <polygon
            fill='#000000'
            points='17.505,22.819 11.51,26.262 1,20.225 1,8.161 11.51,2.125 22.019,8.161 22.019,13.689     23.019,13.689 23.019,7.582 11.51,0.972 0,7.582 0,20.804 11.51,27.415 18.005,23.684   '
          ></polygon>
          <path
            fill='#000000'
            d='M30.266,14.189l-8.589,14.843l-8.589-14.843H30.266 M32,13.189H11.355l10.323,17.839L32,13.189L32,13.189z    '
          ></path>
        </g>
      </g>
      <g display='none'>
        <g display='inline'>
          <circle fill='#000000' cx='16' cy='16' r='16'></circle>
        </g>
        <g display='inline'>
          <polygon
            fill='#000000'
            points='12.615,13.761 30.948,13.761 21.586,29.601   '
          ></polygon>
        </g>
        <g display='inline'>
          <polygon
            fill='#000000'
            points='0,7.865 11.573,1.552 22.448,7.927 22.448,13.677 12.323,13.802 17.76,23.365 11.385,26.615     0,20.552   '
          ></polygon>
        </g>
        <g display='inline'>
          <polygon points='17.505,22.819 11.51,26.262 1,20.225 1,8.161 11.51,2.125 22.019,8.161 22.019,13.689 23.019,13.689     23.019,7.582 11.51,0.972 0,7.582 0,20.804 11.51,27.415 18.005,23.684   '></polygon>
        </g>
        <g display='inline'>
          <path d='M30.266,14.189l-8.589,14.843l-8.589-14.843H30.266 M32,13.189H11.355l10.323,17.839L32,13.189L32,13.189z'></path>
        </g>
      </g>
      <g>
        <g>
          <path d='M17.572,23.933l4.106,7.095L32,13.189h-8.981V7.582L11.51,0.972L0,7.582v13.222l11.51,6.611L17.572,23.933z     M28.532,15.189l-6.855,11.846l-6.855-11.846H28.532z'></path>
        </g>
      </g>
    </chakra.svg>
  )
}

export default Logo
