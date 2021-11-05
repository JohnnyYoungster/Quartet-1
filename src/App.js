import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Performer from './pages/performer/index';
import Audience from './pages/audience/index';

const App = () => {
    return (
        <Router>
            <div>
                <div>

                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Performer</Link>
                        </li>
                        <li>
                            <Link to='/audience'>Audience</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/audience'>
                        <Audience />
                    </Route>
                    <Route path='/'>
                        <Performer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
