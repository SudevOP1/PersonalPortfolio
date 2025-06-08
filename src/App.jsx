import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Projects from "./pages/Projects"
import DataProvider from "./DataContext.jsx"

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
