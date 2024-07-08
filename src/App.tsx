import Navbar from "./components/header/navbar"
import { AppRouter } from "./routes"

function App() {

  return (
    <div className="w-full font-cabin">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
