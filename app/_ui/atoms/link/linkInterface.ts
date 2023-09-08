import { MouseEventHandler } from 'react'

export interface LinkInterface {
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  isUppercase?: boolean
  isUnderline?: boolean
  color?: string
  rel?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  download?: boolean
  prefetch?: boolean
}
