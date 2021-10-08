import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProductPage from './components/ProductPage';
import DisplayItemsInCart from './components/DisplayItemsInCart';
import AddProductForm from './components/AddProductForm';
import {ROUTES} from "./constants";
// import { products }  from "./data"
// import { render } from '@testing-library/react';


class App extends  React.Component 
{
 render(){
  return(
   <div className="App">
    <Router>
    <Link to={ROUTES.SUMMARY}>Summary</Link>
    <Switch>
          <Route exact path={ROUTES.HOME} component = {ProductPage}>
          </Route>
          <Route exact path={ROUTES.SUMMARY} component = {DisplayItemsInCart}>
          </Route>
          <Route exact path={ROUTES.ADD_PRODUCT} component = {AddProductForm}>
          </Route>
    </Switch>      
    </Router>
    </div>
  )};
}
export default App;
