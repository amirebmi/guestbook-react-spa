import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Import routers
import GuestBook from "./components/GuestBook";
import AddComment from "./components/AddComment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddComment />
        </Route>
        <Route path="/">
          <GuestBook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
