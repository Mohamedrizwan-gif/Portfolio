import { Route } from 'react-router-dom';

import Index from './pages/index/index';
import Myresume from './pages/myresume/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Index/>
      </Route>
      <Route path="/myresume">
        <Myresume/>
      </Route>
    </div>
  );
}

export default App;
