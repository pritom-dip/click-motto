import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
import "./App.css"
import "./responsive.css"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes/routes';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {
            routes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                ></Route>
              )
            })
          }
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
