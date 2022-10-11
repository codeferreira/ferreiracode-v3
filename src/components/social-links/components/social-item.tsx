import React from 'react'

type SocialItemProps = {
  children: React.ReactNode
  link: string
}

const SocialItem = ({ children, link }: SocialItemProps) => {
  return (
    <li className="bg-purple-100 p-2 rounded-full">
      <a
        href={link}
        target="_blank"
        className="text-purple-800"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  )
}

export default SocialItem
