import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0a0c1bfd] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col">
          <span className="title-navbar text-2xl">TruShoppinG</span>
          <p className="mb-2">123 Main Street</p>
          <p className="mb-2">Suite 456</p>
          <p className="mb-2">Anytown, USA 12345</p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold mb-4">Follow Us</span>
          <div className="flex">
            <Link href="#" className="mr-4">
              <FaFacebook className="text-white text-2xl duration-500 hover:rotate-[360deg] hover:-translate-y-2 hover:text-[#fd6a53]" />
            </Link>
            <Link href="#" className="mr-4">
              <FaTwitter className="text-white text-2xl duration-500 hover:rotate-[360deg] hover:-translate-y-2 hover:text-[#fd6a53]" />
            </Link>
            <Link href="#" className="mr-4">
              <FaInstagram className="text-white text-2xl duration-500 hover:rotate-[360deg] hover:-translate-y-2 hover:text-[#fd6a53]" />
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
