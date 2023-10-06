import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkPorps {
  text: string
  to: string
}

const style: CSSProperties = {
  color: '#0070f3',
  fontWeight: '900'
}

export const ActiveLink: React.FC<ActiveLinkPorps> = ({ text, to }) => {
  const { asPath } = useRouter()
  return (
    <Link href={ to }>
      <span style={ asPath === to ? style : undefined }>{ text }</span>
    </Link>
  )
}
