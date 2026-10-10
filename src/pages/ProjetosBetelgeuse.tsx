import { Rocket, Edit3 } from 'lucide-react'

export default function ProjetosBetelgeuse() {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-[#e6c275]/10 border border-[#e6c275]/20 flex items-center justify-center mx-auto mb-6">
          <Rocket className="w-10 h-10 text-[#e6c275]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e6c275] mb-4">
          Projetos Betelgeuse
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
          Esta seção está reservada para os projetos da Betelgeuse Serviços de TI.
          Em breve será preenchida com novos conteúdos.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-4 text-white/40">
            <Edit3 className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Em construção</span>
          </div>
          <p className="text-white/50 text-sm">
            Área reservada para futuros projetos e serviços da Betelgeuse.
            Volte em breve para conferir as novidades.
          </p>
        </div>
      </div>
    </div>
  )
}
