// sivu header (navbar)

import {
  Box,
  chakra,
  Flex,
  HStack,
  HTMLChakraProps,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
} from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'
import { FaMoon, FaSun, FaBook, FaNewspaper, FaThumbsUp } from 'react-icons/fa'
import Search from './algolia-search'
import Logo from './logo'
import { MobileNavButton, MobileNavContent } from './mobile-nav'
import SponsorButton from './support-us'
import { GithubIcon } from 'components/icons'
import siteConfig from 'configs/site-config'

function HeaderContent() {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()

  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  // eslint-disable-next-line import/no-named-as-default-member
  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
        <Flex align='center'>
          <NextLink href='/' passHref>
            <chakra.a display='block' aria-label='Sivu, Back to homepage'>
              <Logo />
              <Box minW='3rem' display={{ base: 'block', md: 'none' }}>
              </Box>
            </chakra.a>
          </NextLink>
        </Flex>

        <Flex
          justify='flex-end'
          w='100%'
          align='center'
          color='gray.400'
          maxW='1100px'
        >
          <Search />
          <HStack spacing='5' display={{ base: 'none', md: 'flex' }}>
            <Link
              isExternal
              aria-label='Go to Chakra UI GitHub page'
              href={siteConfig.repo.url}
            >
              <Icon
                as={GithubIcon}
                display='block'
                transition='color 0.2s'
                w='5'
                h='5'
                _hover={{ color: 'gray.600' }}
              />
            </Link>
            <Link aria-label='Go to Sivu tutorials page' href='/docs/getting-started'>
              <Icon
                as={FaBook}
                display='block'
                transition='color 0.2s'
                w='5'
                h='5'
                _hover={{ color: 'gray.600' }}
              />
            </Link>
            <Link
              isExternal
              aria-label='Go to Chakra UI GitHub page'
              data-canny-changelog
            >
              <Icon
                as={FaNewspaper}
                data-canny-changelog
                display='block'
                transition='color 0.2s'
                w='5'
                h='5'
                _hover={{ color: 'gray.600' }}
              />
            </Link>
          </HStack>
          <IconButton
            size='md'
            fontSize='lg'
            aria-label={`Switch to ${text} mode`}
            variant='ghost'
            color='current'
            ml={{ base: '0', md: '3' }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
          <SponsorButton ml='5' />
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label='Open Menu'
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  )
}

function Header(props: HTMLChakraProps<'header'>) {
  const bg = useColorModeValue('white', 'gray.800')
  // eslint-disable-next-line import/no-named-as-default-member
  const ref = React.useRef<HTMLHeadingElement>()
  // eslint-disable-next-line import/no-named-as-default-member
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  // eslint-disable-next-line import/no-named-as-default-member
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition='box-shadow 0.2s, background-color 0.2s'
      pos='sticky'
      top='0'
      zIndex='3'
      bg={bg}
      left='0'
      right='0'
      width='full'
      {...props}
    >
      <chakra.div height='4.5rem' mx='auto' maxW='8xl'>
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
