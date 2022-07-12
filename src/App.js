import './styles/app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Route path='/About'>
        <About/>
      </Route>
      <Route path='/Posts'>
        <Posts/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
