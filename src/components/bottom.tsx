// sivu footer for main pages

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Center,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { VercelCallout } from './vercel-callout'
import ChakraNextImage from 'components/chakra-next-image'

const Logo = () => {
  const fill = useColorModeValue('#2D3748', '#fff')
  return (
    <NextLink href='#' passHref>
      <ChakraNextImage
        height={54}
        width={250}
        src={useColorModeValue(
          'https://user-images.githubusercontent.com/33565767/173359539-993b173a-2c50-47db-aa07-36b290ca9af8.svg',
          'https://user-images.githubusercontent.com/33565767/173359729-18526cd9-8341-4309-8a3a-2f6a1737c270.svg',
        )}
        alt='Sivu logo'
      />
    </NextLink>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'/docs/getting-started'}>Tutorials</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('blue.300', 'blue.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag>
            </Stack>
            <Link href={'/faq/contributing'}>Contribute</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Sivu</ListHeader>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'/docs/about'}>About</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('blue.300', 'blue.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag>
            </Stack>
            <Link href={'https://status.sivu.tk/'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support Us</ListHeader>
            <Link href={'https://github.com/sivu-tutorials'}>GitHub</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box mt={-15} py={0}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Center>
          <VercelCallout />
        </Center>
      </Box>
      <Center>
        <Box mt='5' className='noborder'>
          <iframe
            src={useColorModeValue(
              'https://sivu.instatus.com/embed-status/light-sm',
              'https://sivu.instatus.com/embed-status/dark-sm',
            )}
            width='215'
            height='61'
            frameBorder='0'
            scrolling='no'
          ></iframe>
        </Box>
      </Center>
    </Box>
  )
}
