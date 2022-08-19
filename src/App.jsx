import './App.css'; 
import React,{useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light'); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  const RemoveClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode=(cls)=>{
    RemoveClass();
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      document.body.style.backgroundColor='grey'
      setMode('dark')
      showAlert('Dark Mode has been enabled','success')

      // document.title="TextUtils-Dark Mode"
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing Mode";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now"
      // },1500)
    }
    else
    {
      document.body.style.backgroundColor='white'
      setMode('light')
      showAlert('Light Mode has been enabled','success')
      // document.title="TextUtils-Light Mode"
    }
  }
// why exact path since /user ->compt 1 and /user/home ->compt 2 so use exact path
  return (
    <>
<Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>}>
          </Route>
    </Routes>
    </div>
</Router>
    </>
  );
}

export default App;
