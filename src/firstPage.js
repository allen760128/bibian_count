import React from 'react';

import Header from './firstpage/header';

import Sec1 from './firstpage/sec1';
import Sec2 from './firstpage/sec2';
import Float from './firstpage/float';
import Sec3 from './firstpage/sec3';
import Sec4 from './firstpage/sec4';
import Footer from './firstpage/footer';
import store from './firstpage/store';
import {Provider} from 'react-redux';

const firstPage=(props)=>{
    return(
        <div>
            <Provider store={store}>
                 <Header/>
                    <Sec1/>
                    <Sec2/>
                    <Sec3/>
                    <Sec4/>
                    <Footer/>
                    <Float/>
            </Provider>         
        </div>       
    );
}
export default firstPage;