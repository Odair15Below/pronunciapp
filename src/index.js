import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NextWord from './components/word';

import { AppDataContext } from "./appContext";
import { categories, phoneticSymbols, words } from './appData';
import Phonetics from './components/phonetics';

const appData = {
  wordsList: words,
  phoneticSymbols: phoneticSymbols,
  categories: categories,
  phonetics: {
    availableWords : [],
    word: {}
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <AppDataContext.Provider value={appData}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/pronunciapp" exact>
              <Phonetics />
            </Route>
            <Route path="/:phonetic">
              <NextWord />
            </Route>
            <Route path="/">
              <Phonetics />
            </Route>
          </Switch>
        </AppDataContext.Provider>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
