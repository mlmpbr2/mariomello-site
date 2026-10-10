import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, Cpu, Database, BrainCircuit, MapPin } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Obrigado por se inscrever! Email: ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#e6c275] leading-tight">
                Afinal, para que T.I.?
              </h1>
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed border-l-4 border-[#e6c275] pl-6 italic">
                "A tecnologia da informação está redefinindo os fundamentos dos
                negócios. Atendimento ao cliente, operações, estratégias de produto
                e de marketing e distribuição dependem muito, ou às vezes
                totalmente da tecnologia de informação (TI). A tecnologia da
                informação e seus custos passaram a fazer parte integrante do
                dia-a-dia da empresa."
                <span className="block mt-2 not-italic font-semibold text-[#e6c275]">
                  — O'BRIEN
                </span>
              </blockquote>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white/70">
                  <BrainCircuit className="w-5 h-5 text-[#e6c275]" />
                  <span className="text-sm">Inteligência Artificial</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Database className="w-5 h-5 text-[#e6c275]" />
                  <span className="text-sm">Ciência de Dados</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Cpu className="w-5 h-5 text-[#e6c275]" />
                  <span className="text-sm">Tecnologia da Informação</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/hero-tech.jpg"
                  alt="Tecnologia da Informação"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-gray-600 font-medium">
                  Rua Consul Carlos Renaux, 130
                </p>
                <p className="text-gray-500 text-sm">
                  CEP 88.306-460 - Itajaí - SC
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Mario Mello
              </h2>
              <p className="text-xl text-gray-600">
                Ciência de Dados e Tecnologia da Informação
              </p>
              <p className="text-gray-600 leading-relaxed">
                Especialista em soluções de tecnologia, ciência de dados e
                inteligência artificial aplicada a negócios e administração
                pública. Desenvolvimento de projetos inovadores que transformam
                dados em insights acionáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-12 flex items-center justify-center">
              <Send className="w-24 h-24 text-white/80" />
            </div>
            <div className="bg-[#0f0f0f] p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-bold text-[#e6c275]">
                Inscrever-se
              </h2>
              <p className="text-white/80">
                Assine nossa newsletter e mantenha-se atualizado
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-12"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#e6c275] text-black hover:bg-[#d4b065] font-medium h-12"
                >
                  Inscrever-se
                </Button>
              </form>
              <p className="text-xs text-white/50">
                Betelgeuse Serviços de TI - CNPJ 51.770.124/0001-9 - ITAJAI - SC
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
