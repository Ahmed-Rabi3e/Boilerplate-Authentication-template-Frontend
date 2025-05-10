import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { footer } from "@/assets/images";

export default function Footer() {
  return (
    <footer className="bg-[#131313] text-white relative overflow-hidden pt-16">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-600"></div>
      <div className="absolute top-40 right-1/3 w-4 h-4 bg-orange-500 rotate-45"></div>
      <div className="absolute bottom-20 right-1/4 w-44 h-44 rounded-full bg-[#F53D6B]/10"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 - About */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Creative Digital Marketing Agency
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
            <div className="flex items-center space-x-2">
              <button className="bg-emerald-400 hover:bg-emerald-500 text-black font-medium py-2 px-6 rounded-full transition-colors">
                Contact us
              </button>
              <span className="text-gray-400">Or</span>
              <Link
                to="tel:+01234567890"
                className="flex items-center text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +0 123 456-789
              </Link>
            </div>
          </div>

          {/* Column 2 - Services */}

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-emerald-400" />
                <span className="text-gray-400">
                  123 Marketing Street, Digital City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                <Link
                  to="tel:+01234567890"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  +0 123 456-789
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                <Link
                  to="mailto:info@digitalagency.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  info@digitalagency.com
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="z-10">
            <img src={footer} alt="footer" className="" />
          </div>
        </div>

        {/* Bottom section with copyright */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Creative Digital Marketing Agency. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
