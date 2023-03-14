import {Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/home'
import About from './pages/about'
import Address from './pages/address'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div className="App" class='h-full'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/address' element={<Address />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
