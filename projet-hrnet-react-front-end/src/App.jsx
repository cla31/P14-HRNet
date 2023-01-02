import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CurrentEmployee from './pages/CurrentEmployee'
import Login from './pages/Login'
import Home from './pages/Home'
import PageError from './pages/PageError'
import { Provider } from 'react-redux'
import { store } from './redux/redux'
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/CurrentEmployee" element={<CurrentEmployee />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
