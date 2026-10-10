import { useState } from 'react'
import { MessageCircle, Mail, Send, User, MessageSquare } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:falecom@mariomello.com.br?subject=Contato via Site - ${form.nome}&body=${encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    )}`
    window.location.href = mailto
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e6c275] mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-white/70">
            Tire suas dúvidas ou solicite um orçamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Canais de Atendimento
              </h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5541991910800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <p className="text-lg font-semibold text-white">
                      (41) 99191-0800
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:falecom@mariomello.com.br"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#e6c275]/10 border border-[#e6c275]/20 hover:bg-[#e6c275]/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#e6c275]/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#e6c275]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">E-mail</p>
                    <p className="text-lg font-semibold text-white">
                      falecom@mariomello.com.br
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                Betelgeuse Serviços de TI
              </h2>
              <p className="text-white/60 text-sm">
                CNPJ 51.770.124/0001-9
                <br />
                ITAJAI - SC
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#e6c275]" />
              Envie uma mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Mensagem
                </label>
                <Textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#e6c275] text-black hover:bg-[#d4b065] font-medium h-12"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
