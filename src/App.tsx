import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AllInOneClass6 from './pages/allInOneClass6'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/ss-rms-class-6" replace />} />
        <Route path="/ss-rms-class-6" element={<AllInOneClass6 />} />
      </Routes>
    </>
  )
}

export default App
