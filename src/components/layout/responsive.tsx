import { type PropsWithChildren } from 'react'
import styles from './responsive.module.css'

export const Mobile = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles.mobile}>
    {children}
  </div>
}

export const Desktop = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles.desktop}>
    {children}
  </div>
}
