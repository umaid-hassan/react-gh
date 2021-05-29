import { Route, BrowserRouter } from 'react-router-dom'
import routes from './components/pages'
function App() {

  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          {
            routes.map((route, idx) => (
              <Route exact path={route.path} component={route.component} key={idx}></Route>
            ))
          }
      </BrowserRouter>
  );
}

export default App;
