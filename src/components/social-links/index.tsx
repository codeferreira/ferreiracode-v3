import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialItem from './components/social-item'

const SocialLinks = () => {
  return (
    <ul className="flex gap-6">
      <SocialItem link="https://www.linkedin.com/in/ferreiracode/">
        <FaLinkedin size={30} />
      </SocialItem>
      <SocialItem link="https://www.instagram.com/ferreiracode/">
        <AiFillInstagram size={32} />
      </SocialItem>
      <SocialItem link="https://twitter.com/ferreiracoder">
        <AiFillTwitterCircle size={32} />
      </SocialItem>
      <SocialItem link="https://github.com/codeferreira">
        <FaGithub size={30} />
      </SocialItem>
    </ul>
  )
}

export default SocialLinks
