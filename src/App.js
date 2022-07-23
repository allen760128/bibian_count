import React from 'react';
import './index.css';
import './reset.css';
import { HashRouter,Switch,Route } from 'react-router-dom';
import FirstPage from './firstPage';
import Input from './firstpage/input';

const App=(props)=>{
    return(
         <HashRouter>
             <Switch>
                 <Route path='/' exact component={FirstPage}></Route>
                 <Route path='/input'   component={Input}></Route>
             </Switch>
         </HashRouter>
    );
}

export default App;
















/*<HashRouter>
                    <Switch>
                        <Route  path='/' exact component={Firstpage}/>
                        <Route path='/input'  component={Input}/>
                    </Switch>
                </HashRouter>*/



                /*import Firstpage from './firstPage';
                import {HashRouter,Route,Switch} from 'react-router-dom';
                import Input from './firstpage/input';
                import Sec3 from './firstpage/sec3';*/
