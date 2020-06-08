import React from 'react';
import './App.css';
import { Switch, Route, Link,} from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux'
import store from './store'

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <header className="header">
            <div className="nav">
              <Link to="catalog" className="nav-link">Catalog</Link>
              <Link to="cart" className="nav-link">Cart</Link>
            </div>
          </header>
          <Switch>
            <Route exact path="/" component={Catalog} hello="aa"/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
