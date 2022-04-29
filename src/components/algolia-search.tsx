// sivu algolia search integ

import { SearchIcon } from '@chakra-ui/icons'
import {
  chakra,
  HStack,
  HTMLChakraProps,
  Kbd,
  Portal,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'
import SearchStyle from './search.styles'
import { t } from 'utils/i18n'

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control']
const ACTION_KEY_APPLE = ['⌘', 'Command']

// eslint-disable-next-line
function Hit(props: any) {
  const { hit, children } = props
  return (
    <Link href={hit.url} passHref>
      <a>{children}</a>
    </Link>
  )
}

export const SearchButton = React.forwardRef(function SearchButton(
  props: HTMLChakraProps<'button'>,
  ref: React.Ref<HTMLButtonElement>,
) {
  const [actionKey, setActionKey] = React.useState<string[]>(ACTION_KEY_APPLE)
  React.useEffect(() => {
    if (typeof navigator === 'undefined') return
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    if (!isMac) {
      setActionKey(ACTION_KEY_DEFAULT)
    }
  }, [])

  return (
    <chakra.button
      flex='1'
      type='button'
      mx='6'
      ref={ref}
      lineHeight='1.2'
      w='100%'
      bg={useColorModeValue('white', 'gray.700')}
      whiteSpace='nowrap'
      display={{ base: 'none', sm: 'flex' }}
      alignItems='center'
      color='gray.400'
      className='disabled'
      py='3'
      px='4'
      outline='0'
      _focus={{ shadow: 'outline' }}
      shadow='base'
      rounded='md'
      // {...props}
    >
      <SearchIcon />
      <HStack w='full' ml='3' spacing='4px'>
        <Text textAlign='left' flex='1'>
          {t('component.algolia-search.search-the-docs')}
        </Text>
        <HStack spacing='4px'>
          <VisuallyHidden>
            {t('component.algolia-search.press')}{' '}
          </VisuallyHidden>
          <Kbd color='gray.500' rounded='2px'>
            <chakra.div
              as='abbr'
              title={actionKey[1]}
              textDecoration='none !important'
            >
              {actionKey[0]}
            </chakra.div>
          </Kbd>
          <VisuallyHidden> {t('component.algolia-search.and')} </VisuallyHidden>
          <Kbd color='gray.500' rounded='2px'>
            K
          </Kbd>
          <VisuallyHidden>
            {' '}
            {t('component.algolia-search.to-search')}
          </VisuallyHidden>
        </HStack>
      </HStack>
    </chakra.button>
  )
})

function AlgoliaSearch() {
  const [isOpen, setIsOpen] = React.useState(false)
  const searchButtonRef = React.useRef()
  const [initialQuery, setInitialQuery] = React.useState(null)

  const onOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = React.useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = React.useCallback(
    (e) => {
      setIsOpen(true)
      setInitialQuery(e.key)
    },
    [setIsOpen, setInitialQuery],
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  return (
    <>
      <Head>
        <link
          rel='preconnect'
          href='Link'
          crossOrigin='true'
        />
      </Head>
      <SearchStyle />
      <SearchButton onClick={onOpen} ref={searchButtonRef} />
      {isOpen && (
        <Portal>
          <DocSearchModal
            placeholder='Search the tutorials (coming soon)'
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName=''
            apiKey=''
            appId=''
            hitComponent={Hit}
          />
        </Portal>
      )}
    </>
  )
}

export default AlgoliaSearch
