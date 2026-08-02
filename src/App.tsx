import { Seo } from './components/common/Seo'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { AboutSection } from './components/sections/AboutSection'
import { BookingStepsSection } from './components/sections/BookingStepsSection'
import { BrandFeaturesSection } from './components/sections/BrandFeaturesSection'
import { ContactSection } from './components/sections/ContactSection'
import { FeaturedDesignsSection } from './components/sections/FeaturedDesignsSection'
import { HeroSection } from './components/sections/HeroSection'
import { InstagramGallerySection } from './components/sections/InstagramGallerySection'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'





function App() {
  return (
    <>
      <Seo />
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <BrandFeaturesSection />
        <PortfolioSection />
        <FeaturedDesignsSection />
        <ServicesSection />
        <AboutSection />
        <BookingStepsSection />
        <TestimonialsSection />
        <InstagramGallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
