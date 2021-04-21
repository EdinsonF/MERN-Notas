
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Inicio from './components/Inicio';


function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/notas" component={() => <Inicio /> }/>
      </Switch>
    </Router>
  );
}

export default App;
