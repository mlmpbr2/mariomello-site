import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import IAProjetos from './pages/IAProjetos'
import BIProjetos from './pages/BIProjetos'
import Privacy from './pages/Privacy'
import WhatsAppAPI from './pages/WhatsAppAPI'
import ProjetosBetelgeuse from './pages/ProjetosBetelgeuse'
import Contato from './pages/Contato'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ia-projetos" element={<IAProjetos />} />
          <Route path="/bi-projetos" element={<BIProjetos />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/whats-app-api" element={<WhatsAppAPI />} />
          <Route path="/projetos-betelgeuse" element={<ProjetosBetelgeuse />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
