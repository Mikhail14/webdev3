import './App.css';
import SearchBar from './SearchBar.jsx'
import HeaderApp from './HeaderApp.jsx'
import Login from './Login.jsx'
import Navigation from './Navigation.jsx'
import Content from './Content.jsx'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
            <div className="App"> 

                  <HeaderApp />
                  <Login />
                  <SearchBar />
                  <Navigation />
                  <Content />
      
            </div>
      </BrowserRouter>        
  );
}

export default App;