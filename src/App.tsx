import Footer from "./components/footer"
import Hero from "./components/header/hero"
import Navbar from "./components/header/navbar"
import ByProducts from "./components/section/by_products"
import CtaSection from "./components/section/cta"
import ProductsShowcase from "./components/section/products_showcase"

function App() {

  return (
    <div className="h-screen w-full font-cabin">
      <Navbar />
      <Hero />
      <ProductsShowcase />
      <ByProducts />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
