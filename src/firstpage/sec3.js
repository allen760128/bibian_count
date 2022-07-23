import React from 'react';
import Amatitle from './amatitle';
import Sec3Content from './sec3Content';

const sec3=(props)=>{
    return(
        <div className="sec3">
                <div className="sec3Wrap">
                    <Amatitle data1={'人氣'} data2={'價差'} data3={'商品'} data4={'img/amalogo.png'}/>
                    <Sec3Content/>
                </div>
            </div>
    );
}


export default sec3;