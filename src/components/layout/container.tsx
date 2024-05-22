import { useMemo, type PropsWithChildren } from 'react'
import styles from './container.module.css'

export const Global = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles.global}>
    {children}
  </div>
}

export enum ContainerVariant {
  Default = 'Default',
  Beige = 'Beige',
  DarkGreen = 'DarkGreen',
  Neutral = 'Neutral',
}

export const BaseContainer = ({
  children,
  variant = ContainerVariant.Default,
}: PropsWithChildren<{
  variant?: ContainerVariant
}>) => {
  const classVariant = useMemo(() => {
    switch (variant) {
      case ContainerVariant.Default:
        return ' ' + styles.containerVariantDefault
      case ContainerVariant.Beige:
        return ' ' + styles.containerVariantBeige
      case ContainerVariant.DarkGreen:
        return ' ' + styles.containerVariantDarkGreen
      case ContainerVariant.Neutral:
        return ' ' + styles.containerVariantNeutral
    }
    return ''
  }, [variant])

  return <div className={styles.container + ' ' + classVariant}>
    {children}
  </div>
}

export const Container = ({
  children,
  variant,
}: PropsWithChildren<{
  variant?: ContainerVariant
}>) => {
  return <BaseContainer variant={variant}>
    <InnerContainer>
      {children}
    </InnerContainer>
  </BaseContainer>
}

export const InnerContainer = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles.inner}>
  {children}
</div>
}

export const HeroContainer = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles.hero + ' ' + styles.containerVariantDefault}>
    <InnerContainer>
      {children}
    </InnerContainer>
  </div>
}
