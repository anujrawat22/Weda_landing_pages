import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllInOneClass6 from './pages/allInOneClass6'

function App() {
 
  return (
    <>
        <Routes>
      <Route path="/" element={<AllInOneClass6 />} />
     </Routes>
    </>
  )
}

export default App
