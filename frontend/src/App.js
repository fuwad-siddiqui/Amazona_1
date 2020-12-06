import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';

function App() {

  const OpenMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-Container">
      <header className="header">
        <div className="brand" >
          <button onClick={OpenMenu}>
            &#9776;
        </button>
        <Link to="/">amazona</Link>      
        </div>
        <div className="header-links" >
          <a href="cart.html">Cart</a>
          <a href="SignIn">SignIn</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>shopping Categeries</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirt</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/Product/:id"  component={ProductScreen}></Route>
          <Route path="/"  exact={true} component={HomeScreen}   />        
        </div>
      </main>
      <footer className="footer">    All rights reserved l.  </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
