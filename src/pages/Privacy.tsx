import { Shield, Mail, MapPin } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-[#e6c275]" />
          <h1 className="text-4xl font-bold text-[#e6c275]">
            Política de Privacidade
          </h1>
        </div>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              Política de Privacidade – ig2_comments_api e get comments
            </h2>
            <p>
              Este aplicativo foi desenvolvido por Mario Luiz de Mello para
              extração e análise estatística de comentários em páginas e contas
              do Instagram geridas pelo próprio administrador.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#e6c275] mb-2">
              Coleta de Dados
            </h3>
            <p>
              Coletamos apenas comentários públicos, ID da mídia e identificadores
              básicos fornecidos pela Graph API da Meta, mediante login e
              consentimento do titular da conta.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#e6c275] mb-2">
              Uso dos Dados
            </h3>
            <p>
              Os dados são utilizados exclusivamente para análise de sentimento e
              relatórios de engajamento, exibidos apenas para o usuário que
              conectou a conta. Não compartilhamos com terceiros.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#e6c275] mb-2">
              Armazenamento
            </h3>
            <p>
              Os dados ficam armazenados por até 30 dias e são excluídos
              automaticamente.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#e6c275] mb-2">
              Exclusão
            </h3>
            <p>
              Você pode solicitar a exclusão imediata pelo e-mail{' '}
              <a
                href="mailto:falecom@mariomello.com.br"
                className="text-[#e6c275] hover:underline"
              >
                falecom@mariomello.com.br
              </a>{' '}
              (LGPD).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#e6c275] mb-2">
              Contato
            </h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-[#e6c275] shrink-0" />
              <p>
                Rua Consul Carlos Renaux, 130 – CEP 88.306-460 – Itajaí – SC
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-[#e6c275] shrink-0" />
              <a
                href="mailto:falecom@mariomello.com.br"
                className="text-[#e6c275] hover:underline"
              >
                falecom@mariomello.com.br
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
