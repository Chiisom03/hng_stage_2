import Navbar from "./components/header/navbar"
// import Footer from "./components/footer"
import { AppRouter } from "./routes"

function App() {

  return (
    <div className="w-full bg-[#FBFBFB] font-cabin">
      <Navbar />
      <AppRouter />
      {/* <Footer /> */}
    </div>
  )
}

export default App
