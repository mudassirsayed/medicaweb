import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from './components/reusable/PrivateRoute'
import Login from './components/pages/auth/login/Login'
import Home from "./components/pages/home/Home";
import Register from "./components/pages/auth/register/Register";
import setAccessToken from './components/utils/setAccessToken'
import {onLoginSuccess} from './components/Redux/Authentication/AuthAction'



function App() {
  if (localStorage.getItem("user")) {
    let token = localStorage.getItem('user')
    setAccessToken(token);
    // const decoded = jwt_decode(token);
    store.dispatch(onLoginSuccess(token));
  }

  return (
    <Provider store={store}>
    <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <PrivateRoute exact path="/homepage" component={Home} />
</Router>
</Provider>
  );
}

export default App;


