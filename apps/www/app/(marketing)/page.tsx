import CtaSection from './sections/cta-section'
import FeaturesSection from './sections/features-section'
import IntegrationsSection from './sections/integrations-section'
import Footer from './sections/footer'
import HeroSection from '@/app/(marketing)/sections/hero-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <IntegrationsSection />
      <Footer />
    </>
  )
}
