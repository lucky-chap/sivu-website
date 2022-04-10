import { Badge, Box, Flex, Heading, HStack, Text, useColorModeValue, Divider } from '@chakra-ui/react'
import * as React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { getUrl } from './get-url'
import Container from 'components/container'

export const ChakraProAd = () => (
  <Box as='section' bg={useColorModeValue('#white', 'gray.800')} color='#2d3748' overflow='hidden'>
    <Container pt='10' pb='0'>
      <Flex align='center' direction='column' textAlign='center' mb='10'>
        <Text casing='uppercase' letterSpacing='wide' fontWeight='bold' color={useColorModeValue('#2d3748', 'white')}>
          {"Just launched"}{' '}
          <Badge
            colorScheme='yellow'
            variant='solid'
            color={useColorModeValue('gray.800', '#fffbdf')}
            mt='-1'
            ml='2'
          >
            {"New 🎉"}
          </Badge>
        </Text>
        <Heading
          mt='4'
          fontWeight='extrabold'
          size='3xl'
          maxW='14ch'
          mx='auto'
          color={useColorModeValue('#2d3748', 'white')}
          letterSpacing='tighter'
        >
          <Box
            as='span'
            bgGradient={useColorModeValue('linear(to-r, #2d3748, #2d3748)', 'linear(to-r, white, white)')}
            bgClip='text'
          >
            {"Try"}
          </Box>{' '}
          <Box
            as='span'
            bgGradient={'linear(to-r, blue.400, teal.400)'}
            bgClip='text'
          >
            {"Sivu"}
          </Box>{' '}
          {"today!"}
        </Heading>
        <Text maxW='48ch' mx='auto' fontSize='lg' mt='6' opacity={0.8} color={useColorModeValue('black', 'white')}>
          {"We've just launched Sivu! Why not try and get a website up and running today? It's free!"}
        </Text>
        <HStack
          mt='6'
          as='a'
          bg={useColorModeValue('gray.800', 'whiteAlpha.300')}
          rounded='md'
          px='8'
          py='3'
          href={getUrl('homepage-ad')}
          color='white'
          fontSize='lg'
          fontWeight='semibold'
          transition='all 0.2s'
          _hover={{ bg: ' gray.200' }}
        >
          <Text>{"Tutorials"}</Text>
          <Box as={FiArrowRight} display='inline-block' ml='2' />
        </HStack>
      </Flex>
    </Container>
    <Divider />
  </Box>
)
