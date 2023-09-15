import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './landing'
import PersonalityTest from './personality-test'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='personality-test' element={<PersonalityTest />} />
      </Routes>
    </>
  )
}

export default App
