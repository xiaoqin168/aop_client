import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './layout';
import { Container as Page1 } from './page/page1';
import { Container as Page2 } from './page/page2';
import { Container as Page3 } from './page/page3';
import { Container as Page4 } from './page/page4';

export default <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Page4}/>
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
        <Route path="page3" component={Page3} />
    </Route>
</Router>;
