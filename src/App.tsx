import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Landing from './landing-page'
import PersonalityTest from './personality-test'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='personality-test' element={<PersonalityTest />} />
      </Routes>
    </>
  )
}

export default App
