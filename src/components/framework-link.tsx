// sivu links, svg are in framework-svg

import {
  Box,
  Center,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import {
  VercelSVG,
  CleavrSVG,
  AzureSVG,
  KoyebSVG,
  NetlifySvg,
} from './framework-svg'

const FrameworkLink = (props) => {
  const { accentColor, children, name, href } = props
  return (
    <ChakraLink
      textDecoration='none'
      _hover={{ textDecoration: 'none' }}
      href={href}
    >
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
  )
}

export const FrameworkLinks = () => {
  return (
    <SimpleGrid mt='12' minChildWidth='160px' spacing='40px' fontSize='6xl'>
      <FrameworkLink
        accentColor='black'
        name='Vercel'
        href='https://vercel.com/'
      >
        <VercelSVG style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        accentColor='#127597'
        name='Netlify'
        href='https://www.netlify.com/'
      >
        <NetlifySvg style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        accentColor='#121212'
        name='Koyeb'
        href='https://www.koyeb.com/'
      >
        <KoyebSVG style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        accentColor='#0F5095'
        name='Azure'
        href='https://azure.microsoft.com/'
      >
        <AzureSVG style={{ margin: 'auto' }} />
      </FrameworkLink>

      <FrameworkLink
        accentColor='#0259F3'
        name='Cleavr'
        href='https://cleavr.io/'
      >
        <CleavrSVG style={{ margin: 'auto' }} />
      </FrameworkLink>
    </SimpleGrid>
  )
}
