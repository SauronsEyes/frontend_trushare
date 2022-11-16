import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import AboutPage from './components/aboutPage';
import LoadingScreen from './components/loadingScreen';
import BooksPage from './components/booksPage';
import VideoDisplay from './components/videoDisplays';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ContactPage from './components/contactPage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAES1CSIgPojeTmas6k0r3fC8zwTiX8ok",
  authDomain: "madman-864b0.firebaseapp.com",
  projectId: "madman-864b0",
  storageBucket: "madman-864b0.appspot.com",
  messagingSenderId: "1038297861885",
  appId: "1:1038297861885:web:3b2e6efa996b59a077f894",
  measurementId: "G-WN00XGL5QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        
        <LoadingScreen/>
        <Routes>
          <Route path='/' element={<LandingPage/>}> </Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/books' element={<BooksPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>

          
        </Routes>
        <VideoDisplay/>
      </div>
    </BrowserRouter>
  );
}

export default App;
