// sivu links, svg are in framework-svg

import {
  Box,
  Center,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {
  VercelSVG,
  CleavrSVG,
  AzureSVG,
  KoyebSVG,
  NetlifySvg,
} from './framework-svg'

const FrameworkLink = (props) => {
  const { accentColor, href, children, name } = props
  return (
    <Link passHref href={href}>
      <ChakraLink textDecoration='none' _hover={{ textDecoration: 'none' }}>
        <Box boxShadow='md' bg='white' borderRadius='xl' pt='4'>
          {children}

          <Center
            bg={accentColor}
            borderBottomStartRadius='lg'
            borderBottomEndRadius='lg'
            height='30px'
            mt='4'
          >
            <Text color='white' fontSize='sm' fontWeight='bold'>
              {name}
            </Text>
          </Center>
        </Box>
      </ChakraLink>
    </Link>
  )
}

export const FrameworkLinks = () => {
  return (
    <SimpleGrid mt='12' minChildWidth='160px' spacing='40px' fontSize='6xl'>
      <FrameworkLink
        href='/guides/getting-started/cra-guide'
        accentColor='black'
        name='Vercel'
      >
        <VercelSVG style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        href='/guides/getting-started/blitzjs-guide'
        accentColor='#127597'
        name='Netlify'
      >
        <NetlifySvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        href='/guides/getting-started/remix-guide'
        accentColor='#121212'
        name='Koyeb'
      >
        <KoyebSVG style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        href='/guides/getting-started/blitzjs-guide'
        accentColor='#0F5095'
        name='Azure'
      >
        <AzureSVG style={{ margin: 'auto' }} />
      </FrameworkLink>


        <FrameworkLink
        href='/guides/getting-started/blitzjs-guide'
        accentColor='#0259F3'
        name='Cleavr'
      >
        <CleavrSVG style={{ margin: 'auto' }} />
      </FrameworkLink>
    </SimpleGrid>
  )
}
