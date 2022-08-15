import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="app">
          <Switch>
            <Route exact path='/login' component={LoginScreen} />
          </Switch>
       </div>
    </Router>
  );
}

export default App;
