// sivu support us button

import { Box, BoxProps, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { t } from 'utils/i18n'

const SponsorButton = (props: BoxProps) => (
  <Box
    display={{ base: 'none', lg: 'flex' }}
    alignItems='center'
    as='a'
    aria-label='Sponsor Chakra UI on Open Collective'
    href="mailto:naypat20051@gmail.com"
    target='_blank'
    rel='noopener noreferrer'
    bg='gray.50'
    borderWidth='1px'
    borderColor='gray.200'
    px='1em'
    minH='36px'
    borderRadius='md'
    fontSize='sm'
    color='gray.800'
    outline='0'
    transition='all 0.3s'
    _hover={{
      bg: 'gray.100',
      borderColor: 'gray.300',
    }}
    _active={{
      borderColor: 'gray.200',
    }}
    _focus={{
      boxShadow: 'outline',
    }}
    {...props}
  >
    <Icon as={FaStar} w='4' h='4' color='yellow.600' mr='2' />
    <Box as='strong' lineHeight='inherit' fontWeight='semibold'>
      {t('component.sponsor-button.sponsor')}
    </Box>
  </Box>
)

export default SponsorButton
