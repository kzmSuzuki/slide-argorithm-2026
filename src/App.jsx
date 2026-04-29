import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StyleGuidePage from './pages/StyleGuidePage'
import SlideViewer from './components/SlideViewer/SlideViewer'
import PrintPage from './pages/PrintPage'
import Lesson04QrPrintPage from './pages/Lesson04QrPrintPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styles" element={<StyleGuidePage />} />
        <Route path="/print/lesson04-groups" element={<Lesson04QrPrintPage />} />
        <Route path="/print/:lessonId" element={<PrintPage />} />
        <Route path="/:lessonId" element={<SlideViewer />} />
      </Routes>
    </BrowserRouter>
  )
}
