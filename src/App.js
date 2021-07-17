import './index.scss';
import Home from './components/Home';
import Order from './pages/Order';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/order' exact component={Order}/>
    </div>
  );
}

export default App;
