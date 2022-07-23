import React from 'react';
import Amatitle from './amatitle';

const sec2=(props)=>{
    return(
        <div className='sec2'>
                <div className="sec2Wrap">
                    <div className="good">
                        <ul>
                            <li>
                                <div className="goodWrap">
                                    <div className="pic">
                                        <img src="img/BG2_2.svg" alt="" />
                                    </div>
                                    <div className="content">業界最低空運費<br/><span>350元/KG</span></div>
                                </div>
                            </li>
                            <li>
                            <div className="goodWrap">
                                    <div className="pic">
                                        <img src="img/BG2_3.svg" alt="" />
                                    </div>
                                    <div className="content">購物<br/><span>免州稅</span></div>
                                </div>
                            </li>
                            <li>
                            <div className="goodWrap">
                                    <div className="pic">
                                        <img src="img/BG2_4.svg" alt="" />
                                    </div>
                                    <div className="content">代購服務費<br/><span>0元/KG</span></div>
                                </div>
                            </li>
                            <li>
                            <div className="goodWrap">
                                    <div className="pic">
                                        <img src="img/BG2_5.svg" alt="" />
                                    </div>
                                    <div className="content">超大包裹<br/><span>材積安心方案</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Amatitle data2={'熱搜'} data3={'分類TOP 3'} data4={'img/amalogo.png'}/>
                    <div className="top3">
                        <ul>
                            <li>
                                <img src="img/BG2_6.png" alt="" />
                            </li>
                            <li>
                            <img src="img/BG2_7.png" alt="" />
                            </li>
                            <li>
                            <img src="img/BG2_8.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default sec2;