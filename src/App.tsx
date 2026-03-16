import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App

