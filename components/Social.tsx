import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/SimoElaroui' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/mohammed-elaroui' },
  { icon: <FaYoutube />, path: 'https://www.youtube.com/@ElarouiMohammed' },
  { icon: <FaTwitter />, path: 'https://x.com/ElarouiMoha8006' },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=61567284479991&mibextid=ZbWKwL' },
  { icon: <FaPhone />, path: 'tel:+212621968687', label: '+212 621 968 687' },
  { icon: <FaEnvelope />, path: 'mailto:elarouimohammed3@gmail.com', label: 'elarouimohammed3@gmail.com' },
];

const Social = ({ containerStyles = "", iconStyles = "", textStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link 
          key={index} 
          href={item.path}
          className="m-2 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={iconStyles}>{item.icon}</span>
          {item.label && <span className={textStyles}>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Social;
