import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { FaHome } from 'react-icons/fa'
import Header from 'components/header'
import { AdBanner } from 'components/secondary/ad-banner'
import SEO from 'components/seo'
import { t } from 'utils/i18n'

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title={t('notfound.title')}
        description={t('notfound.description')}
      />
      <AdBanner />
      <Header />
      <VStack
        justify='center'
        spacing='4'
        as='section'
        mt={['20', null, '40']}
        textAlign='center'
      >
        <Heading>{t('notfound.heading')}</Heading>
        <Text fontSize={{ md: 'xl' }}>{t('notfound.message')}</Text>
        <NextLink href='/' passHref>
          <Button
            as='a'
            aria-label='Back to safety'
            leftIcon={<FaHome />}
            colorScheme='blue'
            size='lg'
          >
            {"Back to safety! (main page)"}
          </Button>
        </NextLink>
      </VStack>
    </>
  )
}

export default NotFoundPage
