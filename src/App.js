import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer'
import Header from './pages/Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import PartsDetails from './pages/Home/CarParts/PartsDetails/PartsDetails';
import LogIn from './pages/Authentication/LogIn/LogIn';
import Registration from './pages/Authentication/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import About from './pages/About/About';
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivetRoute path="/partsDetails/:partsId">
              <PartsDetails />
            </PrivetRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
