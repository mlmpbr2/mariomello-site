import { Link } from 'react-router'
import { Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

const footerLinks = [
  { label: 'Início', path: '/' },
  { label: 'IA - Projetos', path: '/ia-projetos' },
  { label: 'Projetos Betelgeuse', path: '/projetos-betelgeuse' },
  { label: 'BI-Projetos', path: '/bi-projetos' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Whats App - API', path: '/whats-app-api' },
]

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Endereço</h3>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <p>
                Rua Consul Carlos Renaux, 130<br />
                CEP 88.306-460 - Itajaí - SC
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:falecom@mariomello.com.br" className="hover:underline">
                falecom@mariomello.com.br
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <MessageCircle className="w-4 h-4 shrink-0" />
              <a href="https://wa.me/5541991910800" target="_blank" rel="noopener noreferrer" className="hover:underline">
                (41) 99191-0800
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contato" className="text-gray-600 hover:text-gray-900 hover:underline">
                Contato
              </Link>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-gray-600">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mario.mello8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mario.luiz.mello"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mariomello8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          Betelgeuse Serviços de TI - CNPJ 51.770.124/0001-9 - ITAJAI - SC
        </div>
      </div>
    </footer>
  )
}
