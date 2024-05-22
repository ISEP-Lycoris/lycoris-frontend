import { type PropsWithChildren } from 'react'
import styles from './flex.module.css'
import { type Property } from 'csstype'

export const Flex = ({
  row,
  column,
  gap,
  padding,
  fullWidth = false,
  fullHeight = false,
  justify,
  align,
  wrap = false,
  children,
}: PropsWithChildren<{
  row?: boolean
  column?: boolean
  gap?: string
  padding?: string
  fullWidth?: boolean
  fullHeight?: boolean
  justify?: Property.JustifyContent
  align?: Property.AlignItems
  wrap?: boolean
}>) => {
  if ((row === true && column === true) || (row === undefined && column === undefined)) {
    throw new Error('row or column must be set')
  }
  return <div
    className={row === true ? styles.row : styles.column}
    style={{
      gap,
      padding,
      width: fullWidth ? '100%' : undefined,
      height: fullHeight ? '100%' : undefined,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap ? 'wrap' : undefined,
    }}
  >
    {children}
  </div>
}
