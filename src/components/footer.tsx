// sivu footer (for doc pages only)

import { Icon, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { VercelCallout } from './vercel-callout'

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display='inline-block' href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize='xl' color='gray.400' />
  </Link>
)

const links = [
  {
    icon: IoLogoGithub,
    label: 'GitHub',
    href: 'https://github.com/Sivu-Tutorials',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:naypat20051@gmail.com',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/sivuhq',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sivuhq/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/sivuhq',
  },
]

export const Footer = () => (
  <VStack as='footer' spacing={4} mt={12} textAlign='center'>
    <Text fontSize='sm'>
      <span>{'Proudly made by Nayan Patel and contributors.'}</span>
    </Text>
    <Stack mt={4} direction='row' spacing='12px' justify='center'>
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
    <VercelCallout />
  </VStack>
)

export default Footer
