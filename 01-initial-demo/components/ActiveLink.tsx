import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkPorps {
  text: string
  to: string
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink: React.FC<ActiveLinkPorps> = ({ text, to }) => {
  const { asPath } = useRouter()
  return (
    <Link href={ to }><span style={ asPath === to ? style : {}  }>{ text }</span></Link>
  )
}
