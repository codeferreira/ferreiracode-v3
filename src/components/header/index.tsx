import SocialLinks from 'components/social-links'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-6 pr-12 flex justify-between items-center">
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            width={150}
            height={50}
            alt="Ferreira Code Logo"
          />
        </a>
      </Link>

      <nav>
        <SocialLinks />
      </nav>
    </header>
  )
}

export default Header
