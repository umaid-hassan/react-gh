//import { Route, BrowserRouter, HashRouter } from 'react-router-dom'
//import { Route, HashRouter, Switch } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './components/pages'
//import Home from './components/pages/Home'
//import Blog from './components/pages/Blog'
function App() {

  return (
      <BrowserRouter >
          {
            routes.map((route, idx) => (
              <Route exact path={route.path} component={route.component} key={idx}></Route>
            ))
          }
      </BrowserRouter>
      // <HashRouter>
      //     <Switch>
      //         <Route exact path="/" component={Home} />
      //         <Route exact path="/blog" component={Blog} />
      //     </Switch>
      // </HashRouter>
    //   <HashRouter basename='/'>
    //   <div>
    //    <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/Blog">Blog</Link></li>
    //    </ul>
    //    <hr />
    //    <Route exact path="/" component={Home} />
    //    <Route path="/Blog" component={Blog} />
    //   </div>
    //  </HashRouter>
  );
}

export default App;
