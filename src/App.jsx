import './App.css';
import ChatSection from './components/chatSection/chatSection';
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
     <div className="app-container">
      <Header/>
      <ChatSection/>
      <Footer/>
      </div>
    </>
  )
}

export default App;
