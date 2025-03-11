import './App.css'
import ChatSection from './components/chatSection/chatSection'
import Footer from './components/footer/footer';
import Header from './components/header/header'

function App() {


  return (
    <>
     <div className="app-container">
      <Header/>
      <ChatSection/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
