import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-navy-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Full Stack Developer. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook className="text-2xl text-gray-400 hover:text-white" />
          <FaTwitter className="text-2xl text-gray-400 hover:text-white" />
          <FaInstagram className="text-2xl text-gray-400 hover:text-white" />
          <FaLinkedin className="text-2xl text-gray-400 hover:text-white" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
