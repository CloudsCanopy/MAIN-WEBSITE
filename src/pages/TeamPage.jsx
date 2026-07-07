import Navbar from '../components/Navbar'
import Team from '../components/Team'
import FinalCTA from '../components/FinalCTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary relative z-10">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <Team />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
