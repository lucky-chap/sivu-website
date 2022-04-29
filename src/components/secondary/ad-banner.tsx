import { Center, chakra, Flex, Text } from '@chakra-ui/react'

export const AdBanner = () => {
  return (
    <Center
      py='2'
      px='3'
      bgGradient='linear(to-r,blue.800, blue.600)'
      color='white'
      textAlign='center'
    >
      <Flex align='center' fontSize='sm'>
        <Text fontWeight='medium' maxW={{ base: '32ch', md: 'unset' }}>
          {"🔎 We're looking for contributors! Help beginners start their web development journey."}
        </Text>
        <chakra.a
          flexShrink={0}
          href="/faq/contributing"
          ms='6'
          bg='blackAlpha.300'
          color='whiteAlpha.900'
          fontWeight='semibold'
          px='3'
          py='1'
          rounded='base'
        >
          {"✋ I'll help"}{' '}
        </chakra.a>
      </Flex>
    </Center>
  )
}
