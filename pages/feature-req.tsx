// sivu feature request page

import { Box } from '@chakra-ui/react'
import * as React from 'react'
import FeedBack from 'components/canny-feedback'
import Header from 'components/header'
import { AdBanner } from 'components/secondary/ad-banner'
import SEO from 'components/seo'

const featurereq = () => {
  return (
    <>
      <SEO
        title={"Feature Reqeuests"}
        description={"Sivu feature requests page"}
      />
      <AdBanner />
      <Header />
      <Box w='100%' pt={10} p={5}>
      <FeedBack />
        </Box>
    </>
  )
}

export default featurereq