import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Auth from './pages/auth';
import AdminHome from './pages/admin/home';
import AdminProduct from './pages/admin/product';
import PrivateRoute from './pages/private/PrivateRoute';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute exact path="/admin" component={AdminHome} />
            <PrivateRoute exact path="/admin/product" component={AdminProduct} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
