// sivu vercel callout

import { Box } from '@chakra-ui/react'
import NextLink from 'next/link'

export function VercelCallout() {
  return (
    <NextLink href="https://vercel.com/?utm_source=sivu&utm_campaign=oss" passHref>
    <Box
      mt='6'
      fontSize='sm'
      fontWeight='semibold'
      display='inline-block'
      bg='black'
      color='white'
      px='4'
      cursor='pointer'
      py='2'
      rounded='lg'
    >
      {"Hosted on"}{' '}
      <span role='img' aria-label='Vercel logo'>
        ▲
      </span>{' '}
      Vercel
    </Box>
    </NextLink>
  )
}
