import { quickLinks, supportLinks, connectLinks } from '../constants/index'
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white text-neutral-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Maple Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-neutral-900">Maple</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Making study abroad dreams simple, stress-free, and achievable. 
            Your trusted partner in scholarships, admissions, and global opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-900">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-blue-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-900">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-blue-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-900">Connect</h3>
          <ul className="space-y-2">
            {connectLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-blue-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Maple Consultancy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
