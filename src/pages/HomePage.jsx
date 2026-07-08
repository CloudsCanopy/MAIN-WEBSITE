import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import About from '../components/About'
import Services from '../components/Services'
import FeaturedSolutions from '../components/FeaturedSolutions'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import Industries from '../components/Industries'
import FerrariShowcase from '../components/FerrariShowcase'
import Testimonial from '../components/Testimonial'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary relative z-10">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <FeaturedSolutions />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Industries />
        <FerrariShowcase />
        <Testimonial />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
