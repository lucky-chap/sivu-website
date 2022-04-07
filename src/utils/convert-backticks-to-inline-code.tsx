import { isObject } from '@chakra-ui/utils'

/**
 * Replace the code blocks wrapped in backticks
 * with inline code blocks.
 */

function toInlineCode(input: string) {
  return input
    .split(/(`\w+`)/)
}

export function convertBackticksToInlineCode(input?: string | JSX.Element) {
  if (!input) return ''
  return isObject(input) ? input : toInlineCode(input)
}