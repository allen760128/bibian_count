import React from 'react';
import {Link} from 'react-router-dom';

const float=(props)=>{
    return(
        <div className='float'>
                <div className="floatContent">給我們網址<br/>
就可以代購</div>
                <div className="floatPic">
                    <Link to='/input' ><img src="img/BG2_9.svg" alt="" /></Link>
                </div>
            </div>
    );
}


export default float;