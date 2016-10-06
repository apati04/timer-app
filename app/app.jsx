import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer}/>
      <IndexRoute component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
