import Footer from "../components/footer"
import Hero from "../components/header/hero"
import ByProducts from "../components/section/by_products"
import CtaSection from "../components/section/cta"
import ProductsShowcase from "../components/section/products_showcase"

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <ByProducts />
      <CtaSection />
      <Footer />
    </>
  )
}

export default HomePage;