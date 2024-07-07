import Hero from "./components/header/hero"
import Navbar from "./components/header/navbar"
import ProductsShowcase from "./components/section/products_showcase"

function App() {

  return (
    <div className="h-screen w-full font-cabin">
      <Navbar />
      <Hero />
      <ProductsShowcase />
    </div>
  )
}

export default App
