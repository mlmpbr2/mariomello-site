import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'IA - Projetos', path: '/ia-projetos' },
  { label: 'Projetos Betelgeuse', path: '/projetos-betelgeuse' },
  { label: 'BI-Projetos', path: '/bi-projetos' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Whats App - API', path: '/whats-app-api' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="w-full border-b border-white/10 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-[#e6c275]">
            Mario Mello
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm transition-colors rounded-md ${
                  location.pathname === link.path
                    ? 'text-[#e6c275] underline underline-offset-4'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5541991910800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#e6c275] text-black hover:bg-[#d4b065] font-medium">
                <MessageCircle className="w-4 h-4 mr-2" />
                Olá...
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm rounded-md mt-1 ${
                location.pathname === link.path
                  ? 'text-[#e6c275] bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5541991910800"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
            onClick={() => setOpen(false)}
          >
            <Button className="w-full bg-[#e6c275] text-black hover:bg-[#d4b065] font-medium">
              <MessageCircle className="w-4 h-4 mr-2" />
              Olá...
            </Button>
          </a>
        </div>
      )}
    </nav>
  )
}
