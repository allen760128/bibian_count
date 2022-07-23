import React from 'react';


const Footer=(props)=>{
    const handleScrollToTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
    return(
        <div className='foot'>
            <div className='footerWrap'>
                <span style={{color:'yellow'}} onClick={handleScrollToTop}>TOP</span>
                <span>
                比比昂跨境電商 - 為 PChome 集團旗下子公司 日本比比昂（ビビアン）株式会社所擁有！<br/><br/>

                版權所有．轉載必究 <a href='#'>隱私權聲明</a> <a href='#'>會員權益</a><br/><br/>

                公司地址：235 新北市中和區安和路167號1樓 客服電話：<a href='#'>02-89410888</a><br/>
                客服時間：週一~週五：10:00~20:30  |  週六：15:00~21:00<br/>
                面交時間：週二~週六：10:00~19:00  |  <a href='#'>面交地點</a><br/><br/>

                Copyright ©2019 Bibian Co., Ltd. All Rights Reserved.<br/>
                </span>
            </div>
        </div> 
    );
}

export default Footer;






/*class footer extends Component{

    handleScrollToTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
    render(){
        return(
<div className='foot'>
                <div className='footerWrap'>
                <span style={{color:'yellow'}} onClick={()=>{this.handleScrollToTop()}}>TOP</span>
                    <span>
                    比比昂跨境電商 - 為 PChome 集團旗下子公司 日本比比昂（ビビアン）株式会社所擁有！<br/><br/>

版權所有．轉載必究 <a href='#'>隱私權聲明</a> <a href='#'>會員權益</a><br/><br/>

公司地址：235 新北市中和區安和路167號1樓 客服電話：<a href='#'>02-89410888</a><br/>
客服時間：週一~週五：10:00~20:30  |  週六：15:00~21:00<br/>
面交時間：週二~週六：10:00~19:00  |  <a href='#'>面交地點</a><br/><br/>

Copyright ©2019 Bibian Co., Ltd. All Rights Reserved.<br/>
                    </span>
                </div>
            </div>

        );
    }
}




export default footer;*/