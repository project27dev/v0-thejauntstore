import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NewInSection from "@/components/new-in-section"
import PrestigeSection from "@/components/prestige-section"
import IconicSection from "@/components/iconic-section"
import CategoryGrid from "@/components/category-grid"
import BestsellersSection from "@/components/bestsellers-section"
import NewsletterPopup from "@/components/newsletter-popup"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import GridScrollSection from "@/components/test"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <NewInSection />
      <PrestigeSection />
      <IconicSection />
      <CategoryGrid />
      <BestsellersSection />
      <GridScrollSection />
      <NewsletterPopup />
      <Footer />
      <FloatingContact />
    </main>
  )
}
