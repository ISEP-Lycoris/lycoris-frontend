import { useMemo, type PropsWithChildren } from 'react'
import styles from './grid.module.css'

export enum GridType {
  Columns = 'Columns',
  Rows = 'Rows',
}

export const Grid = ({
  children,
  type = GridType.Columns,
}: PropsWithChildren<{
  type?: GridType
}>) => {
  const classType = useMemo(() => {
    switch (type) {
      case GridType.Columns:
        return ' ' + styles.columns
      case GridType.Rows:
        return ' ' + styles.rows
    }
  }, [type])

  return <div className={styles.grid + classType}>
    {children}
  </div>
}
