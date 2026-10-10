import { MessageCircle, ShieldCheck, Lock, UserCheck, Building2 } from 'lucide-react'

export default function WhatsAppAPI() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle className="w-8 h-8 text-[#e6c275]" />
          <h1 className="text-4xl font-bold text-[#e6c275]">
            WhatsApp Business API — Fala Navega
          </h1>
        </div>

        <div className="space-y-10 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#e6c275]" />
              Sobre o serviço
            </h2>
            <p>
              O Fala Navega é uma solução de atendimento via WhatsApp Business
              Platform (API oficial da Meta), desenvolvida pela Betelgeuse
              Serviços de TI (Mario Mello — Ciência de Dados e Tecnologia da
              Informação) para a administração pública municipal.
            </p>
            <p className="mt-4">
              A solução permite que o cidadão se comunique de forma simples e
              direta com a prefeitura pelo WhatsApp, para:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/70">
              <li>Tirar dúvidas sobre serviços municipais;</li>
              <li>
                Consultar informações públicas (horários, documentos, taxas);
              </li>
              <li>
                Registrar solicitações e reclamações (ex.: limpeza urbana,
                iluminação, manutenção de vias);
              </li>
              <li>
                Receber respostas automatizadas ou atendimento humano assistido,
                tudo pelo mesmo canal.
              </li>
            </ul>
            <p className="mt-4">
              O Fala Navega está em fase de demonstração/piloto e utiliza
              exclusivamente a API oficial da Meta, com número comercial
              verificado e políticas de uso da plataforma integralmente
              respeitadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#e6c275]" />
              Uso dos dados da plataforma (Platform Data)
            </h2>
            <p>
              As informações obtidas por meio da WhatsApp Business Platform são
              utilizadas exclusivamente para prestar o serviço de atendimento
              descrito acima. Em detalhes:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/70">
              <li>
                Apenas recebemos mensagens enviadas voluntariamente pelos
                usuários ao número oficial do serviço;
              </li>
              <li>
                Os dados das conversas são processados somente para gerar
                respostas ao próprio usuário e registrar o atendimento;
              </li>
              <li>
                Não vendemos, não compartilhamos e não transferimos dados a
                terceiros para qualquer finalidade (inclusive publicidade);
              </li>
              <li>
                O acesso às conversas é restrito a pessoas autorizadas, com
                registro e controle de acesso;
              </li>
              <li>
                As mensagens são trafegadas com criptografia pela própria
                plataforma da Meta e armazenadas pelo período estritamente
                necessário à prestação do serviço.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#e6c275]" />
              Conformidade legal
            </h2>
            <p>
              O tratamento de dados pessoais segue a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 — LGPD) e a Política de Mensagens
              comerciais da Meta (WhatsApp Business Messaging Policy),
              incluindo: finalidade legítima e específica, minimização de dados,
              direitos do titular (confirmação, acesso, correção e eliminação) e
              medidas técnicas de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#e6c275]" />
              Regras de uso do serviço
            </h2>
            <ul className="space-y-2 list-disc list-inside text-white/70">
              <li>
                O serviço não inicia conversas com usuários: apenas responde a
                mensagens recebidas;
              </li>
              <li>
                Não é utilizado para envio de mensagens em massa, spam ou
                conteúdo de marketing não solicitado;
              </li>
              <li>
                Em caso de adoção institucional por um município, a operação
                será migrada para a conta comercial oficial da própria
                administração, conforme exigência da Meta.
              </li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#e6c275] mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Responsável técnico
            </h2>
            <p className="text-white/80">
              <strong>Betelgeuse Serviços de TI</strong>
              <br />
              CNPJ 51.770.124/0001-9 — Itajaí/SC
              <br />
              Site:{' '}
              <a
                href="https://www.mariomello.com.br"
                className="text-[#e6c275] hover:underline"
              >
                https://www.mariomello.com.br
              </a>
              <br />
              Contato:{' '}
              <a
                href="mailto:falecom@mariomello.com.br"
                className="text-[#e6c275] hover:underline"
              >
                falecom@mariomello.com.br
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
