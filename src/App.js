import { Container } from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Title from "./components/Title";

const App = () => {
  return (
    <Router>
      <Container>
        <Title />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
