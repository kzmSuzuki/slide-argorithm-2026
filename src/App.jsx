import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StyleGuidePage from './pages/StyleGuidePage'
import SlideViewer from './components/SlideViewer/SlideViewer'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styles" element={<StyleGuidePage />} />
        <Route path="/:lessonId" element={<SlideViewer />} />
      </Routes>
    </BrowserRouter>
  )
}
