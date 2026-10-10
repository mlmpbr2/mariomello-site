import { ExternalLink, Github, Sparkles, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    name: 'RadarLeg',
    description:
      'Um projeto com base no MCP que consulta bases de dados da câmara e senado, transfere gov - e usa IA generativa - claude - para responder perguntas dos usuários sobre os dados.',
    link: 'https://pmnvt-radarleg.hf.space/',
    icon: Sparkles,
    tags: ['MCP', 'Claude', 'IA Generativa', 'Dados Públicos'],
  },
  {
    id: 2,
    name: 'Fala Navegantes',
    description:
      'Utilizando langchain, RAG - é capaz de receber áudios, imagens e textos anexados e responder perguntas dos cidadãos sobre problemas da cidade, endereços de UBS, escolas e outros serviços.',
    link: 'https://pmnvt-falanavegantes.hf.space/',
    icon: MessageSquare,
    tags: ['LangChain', 'RAG', 'Multimodal', 'Atendimento ao Cidadão'],
  },
]

export default function IAProjetos() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6c275] mb-4">
            Galeria de Projetos
          </h1>
          <p className="text-xl text-white/80">
            Projetos em Ciência de Dados e IA - generativa -
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#e6c275]/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e6c275]/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-[#e6c275]" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-[#e6c275] transition-colors">
                  {project.id}) {project.name}
                </h2>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#e6c275]/50 text-[#e6c275] hover:bg-[#e6c275]/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Acessar Projeto
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#e6c275]/10 to-transparent border border-[#e6c275]/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#e6c275] mb-4">
            NOSSOS PROJETOS NO GIT HUB
          </h3>
          <a
            href="https://github.com/mlmpbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#e6c275] text-black hover:bg-[#d4b065] font-medium">
              <Github className="w-4 h-4 mr-2" />
              github.com/mlmpbr
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
