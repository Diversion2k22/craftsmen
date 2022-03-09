import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products/:category'>
          <ProductList />
        </Route>
        <Route path='/product/:id'>
          <Product />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
