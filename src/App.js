import logo from './logo.svg';
import './App.css';
import './Components/NavbarComponent'
import NavbarComponent from './Components/NavbarComponent';
import DashboardComponent from './Components/DashboardComponent'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import './Css/Styles.css'
library.add(fab, faMotorcycle)
function App() {
  return (
    <>
    <NavbarComponent />
    <div className="App">
        <h1>Hello Racer!</h1>
        <DashboardComponent />
    </div>
    </>
  );
}

export default App;
