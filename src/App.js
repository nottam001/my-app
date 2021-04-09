import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import React, { Component } from 'react';
import Review_main from './Review_main'
import Review_1 from './Review_1'
import Review_2 from './Review_2'
import Review_3 from './Review_3'
import Review_4 from './Review_4'
import Review_5 from './Review_5'
import Sales_main from './Sales_main'
import Sales_m from './Sales_m'
import Sales_y from './Sales_y'
import Sales_a from './Sales_a'
import Nav_a from './Nav_a'
import review_count from './review_count'
import CommentBox from './CommentBox'
import Test from './Test'
import review_g from './review_g'
import sales_g from './sales_g'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/rm" component={Review_main} />
          <Route path="/r" component={Review_1} />
          <Route path="/rr" component={Review_2} />
          <Route path="/rrr" component={Review_3} />
          <Route path="/rrrr" component={Review_4} />
          <Route path="/rrrrr" component={Review_5} />
          <Route path="/sm" component={Sales_main} />
          <Route path="/s" component={Sales_m} />
          <Route path="/ss" component={Sales_y} />
          <Route path="/sss" component={Sales_a} />
          <Route path="/nv" component={Nav_a} />
          <Route path="/cm" component={CommentBox} />
          <Route path="/test" component={Test} />
          <Route path="/rc" component={review_count} />
          <Route path="/rg" component={review_g} />
          <Route path="/sg" component={sales_g} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;