import {
  Box,
  Button,
  Center,
  chakra,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa'
import { MdAccessibility, MdPalette } from 'react-icons/md'
import Bottom from 'components/bottom'
import ChakraNextImage from 'components/chakra-next-image'
import Container from 'components/container'
import Header from 'components/header'
import { AdBanner } from 'components/secondary/ad-banner'
import { ChakraProAd } from 'components/secondary/home-page-ad'
import SEO from 'components/seo'
import users from 'sponsors'
import { t } from 'utils/i18n'

const openCollectiveLink = 'https://opencollective.com/chakra-ui'

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded='12px'
      shadow='base'
      p='40px'
      {...props}
    >
      <Flex
        rounded='full'
        w='12'
        h='12'
        bg='blue.500'
        align='center'
        justify='center'
      >
        <Icon fontSize='24px' color='white' as={icon} />
      </Flex>
      <Heading as='h3' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
        {title}
      </Heading>
      <Text fontSize='lg' opacity={0.7}>
        {children}
      </Text>
    </Box>
  )
}

const HomePage = () => {
  return (
    <>
      <SEO
        title={t('homepage.seo.title')}
        description={t('homepage.seo.description')}
      />
      <AdBanner />
      <Header />
      <Box mb={20}>
        <Box as='section' pt='4rem' pb={{ base: '0', md: '0rem' }}>
          <Container>
            <Box textAlign='center'>
              <chakra.h1
                maxW='16ch'
                mx='auto'
                fontSize='4rem'
                fontFamily='heading'
                letterSpacing='tighter'
                fontWeight='800'
                mb='16px'
                lineHeight='1.2'
              >
                {t('homepage.title.main')}
                <Box
                  as='span'
                  color={useColorModeValue('blue.500', 'blue.300')}
                >
                  {' '}
                  {t('homepage.title.highlighted')}
                </Box>
              </chakra.h1>

              <Text
                maxW='560px'
                mx='auto'
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mt='6'
              >
                {t('homepage.message')}
              </Text>

              <Stack
                mt='10'
                spacing='4'
                justify='center'
                direction={{ base: 'column', sm: 'row' }}
              >
                <NextLink href='/docs/getting-started' passHref>
                  <Button
                    h='4rem'
                    px='40px'
                    fontSize='1.2rem'
                    as='a'
                    size='lg'
                    colorScheme='blue'
                    rightIcon={<FaArrowRight fontSize='0.8em' />}
                  >
                    {t('homepage.get-started')}
                  </Button>
                </NextLink>
                <Button
                  as='a'
                  size='lg'
                  h='4rem'
                  px='40px'
                  fontSize='1.2rem'
                  href='https://github.com/chakra-ui/chakra-ui/'
                  target='__blank'
                  leftIcon={<DiGithubBadge size='1.5em' />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>

            <Center>
              <Box
                display='inline-block'
                mt='70px'
                rounded='xl'
                shadow='base'
              >
                <NextLink href="https://producthunt.com" passHref>
                <ChakraNextImage
                  height={54}
                  width={250}
                  src= {useColorModeValue('https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=326094&theme=light', 'https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=326094&theme=dark')}
                  alt='Featured on ProductHunt'
                />
                </NextLink>
              </Box>
            </Center>
          </Container>
        </Box>

        <Divider />

        <Box as='section' pt='48px' pb='32px'>
          <Container textAlign='center'>
            <chakra.p
              fontWeight='500'
              textStyle='caps'
              color={useColorModeValue('blue.600', 'blue.300')}
              mb='48px'
            >
              {t('homepage.supported-and-backed-by')}
            </chakra.p>
            <Wrap
              maxW='800px'
              mx='auto'
              justify='center'
              align='center'
              spacing='24px'
            >
              {users
                .filter((user) => user.image.includes('.'),)
                .slice(0, 7)
                .map((user) => (
                  <WrapItem key={user.name} bg='white' rounded='md'>
                    <Link href={user.url}>
                      <ChakraNextImage
                        src={user.image}
                        alt={user.name}
                        width={120}
                        height={24}
                        p='5'
                        loading='lazy'
                      />
                    </Link>
                  </WrapItem>
                ))}
              <WrapItem>
                <Button
                  as='a'
                  w='40'
                  h='16'
                  href={`${openCollectiveLink}/contribute`}
                  rel='noopener'
                  target='_blank'
                  border='1px dashed'
                  borderColor={useColorModeValue('blue.200', 'blue.500')}
                  bg={useColorModeValue('blue.50', 'whiteAlpha.200')}
                  _hover={{
                    bg: useColorModeValue('blue.100', 'whiteAlpha.300'),
                  }}
                  rounded='md'
                >
                  <Box as='span' mr='1' role='img'>
                    💖
                  </Box>{' '}
                  {t('homepage.your-company')}
                </Button>
              </WrapItem>
            </Wrap>
          </Container>
        </Box>

        <Box
          as='section'
          pt='10px'
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          <Container py='20px' maxW='1280px'>
            <Box maxW='760px' mx='auto' textAlign='center' mb='56px'>
              <chakra.h2 textStyle='heading' mb='5'>
                {t('homepage.feature-section.title')}
              </chakra.h2>
              <chakra.p opacity={0.7} fontSize='lg'>
                {t('homepage.feature-section.description')}
              </chakra.p>
            </Box>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={10}
              px={{ md: 12 }}
            >
              <Feature
                icon={MdAccessibility}
                title={t('homepage.feature-section.accessible.title')}
              >
                {t('homepage.feature-section.accessible.description')}
              </Feature>
              <Feature
                icon={MdPalette}
                title={t('homepage.feature-section.themeable.title')}
              >
                {t('homepage.feature-section.themeable.description')}
              </Feature>
              <Feature
                icon={AiFillThunderbolt}
                title={t('homepage.feature-section.developer-experience.title')}
              >
                {t('homepage.feature-section.developer-experience.description')}
              </Feature>
            </Grid>
          </Container>
        </Box>


        <Box as='section' bg='blue.500'>
          <Container py='2rem' maxW='1280px' color='white'>
            <Box maxW='760px' mx='auto' textAlign='center' mb='20px'>
              <chakra.h2 textStyle='heading' mb='5'>
                {t('homepage.growing-section.title')}
              </chakra.h2>
              <chakra.p opacity={0.7} fontSize='lg'>
                {t('homepage.growing-section.description')}
              </chakra.p>
            </Box>
          </Container>
        </Box>

        <ChakraProAd />

        <Bottom />
      </Box>
    </>
  )
}



export default HomePage
