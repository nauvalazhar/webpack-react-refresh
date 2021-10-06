import './app.scss';
import Card from './Card';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import News from './News';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

