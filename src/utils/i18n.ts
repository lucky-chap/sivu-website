import { get } from 'lodash'
import uiJson from '../../i18n/ui.json'

export function t(str: string) {
  return get(uiJson, str)
}