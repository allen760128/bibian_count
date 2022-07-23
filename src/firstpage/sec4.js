import React from 'react';
import Amatitle from './amatitle';
import Sec4Content from './sec4Content';
import Sec4Content2 from './sec4Content2';

const sec4=(props)=>{
    return(
        <div className="sec4">
                <div className="sec4Wrap">
                    <Amatitle data1={'比比昂'} data2={'美國代購最划算!'}/>
                    <div className="tabWrap">
                        <div className="t1">
                            <div className="t1_1 tabDet"></div>
                            <div className="t1_2 tabDet">比比昂<div className='tag color1'></div></div>
                            <div className="t1_3 tabDet">M代購業者 <div className='tag color2'></div></div>
                            <div className="t1_4 tabDet">L代購業者<div className='tag color3'></div></div>
                        </div>
                        <Sec4Content/>
                    </div>
                    <Sec4Content2/>
                </div>
            </div>
    );
}

export default sec4;