// import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css';
import Mainpage from './Components/Mainpage';
// import Intro from './Components/Intro/Intro.jsx';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Intro/> */}
    <BrowserRouter>
      <Mainpage/>
    </BrowserRouter>
    </div>
  );
}

export default App;
