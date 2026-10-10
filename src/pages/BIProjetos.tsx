import { BarChart3, Lock } from 'lucide-react'

export default function BIProjetos() {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-10 h-10 text-white/30" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e6c275] mb-4">
          Power BI - Projetos
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Esta seção está em desenvolvimento. Os projetos serão exibidos assim
          que a integração com a conta do Power BI for configurada.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-white/40">
          <BarChart3 className="w-5 h-5" />
          <span className="text-sm">Em breve</span>
        </div>
      </div>
    </div>
  )
}
