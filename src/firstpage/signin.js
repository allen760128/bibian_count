import React from 'react';
import { connect } from 'react-redux';



const signin=(props)=>{
    const {switched}=props;
    const opened=props.open;
    const {usvalue,pwvalue,emvalue}=props;
    const uskeychanged=props.uskeychange;
    const useralert=uskeychanged?'':'請輸入至少8位英數，並包含大小寫英文';
    const pwkeychanged=props.pwkeychange;
    const pwalert=pwkeychanged?'':'請輸入至少8位英數，並包含大小寫英文';
    const emkeychanged=props.emkeychange;
    const emalert=emkeychanged?'':'請輸入正確電子郵件';
    const left={left:switched?'-1600px':'0px'};
    return(
        <div className='signInClass ' style={opened} >
        <div className="sign_outer">
            <div className="container contain" style={left}>
                <form action="/action_page.php" id="frm1">
                <label htmlFor="username">使用者名稱</label>
                <input id="userna" type="text" name="username" className='inputType'
                    placeholder="Enter Username" 
                    value={usvalue} 
                    onKeyDown={(e)=>{props.handleUskeydown(e)}} 
                    onChange={(e)=>{props.onchange(e)}} required/>
                <span className="userAlert1 userScale">{useralert}</span>
                <label htmlFor="pw">使用者密碼</label>
                <input id="userpw" type="password" name="pw" className='inputType'
                    placeholder="Enter Password" 
                    value={pwvalue} 
                    onKeyDown={(e)=>{props.handlePwkeydown(e)}} 
                    onChange={(e)=>{props.pwchange(e)}} required/>
                <span className="userAlert2 userScale">{pwalert}</span>
                <button type="submit" className="ebutton btn" id="signSub" >登入</button>
                <label htmlFor=""><input type="checkbox" name="" id=""/>記住我</label>
                <button className="cancelbtn btn" type="button" 
                    onClick={()=>{props.close()}}>取消</button>
                <span className="psw" id='psw1' 
                    onClick={()=>{props.handleSwitch()}}>
                        <a href="#">忘記密碼?</a>
                </span>
                </form>
            </div>
            <div className="container2 contain" style={{right:switched?'0px':'-1400px'}}>
                <form action="/index.html" id="frm2">
                <h3>重設密碼</h3>
                <label htmlFor="pw">E-mail信箱</label>
                <input id="usermail" type="text" name="email"  className='inputType'
                    placeholder="Enter e-mail" 
                    value={emvalue} 
                    onKeyDown={(e)=>{props.handleEmkeydown(e)}} 
                    onChange={(e)=>{props.emchange(e)}} required/>
                <span className="userMail userScale">{emalert}</span>
                <button type="submit" className="ebutton mt_10  btn" id="mailSub">寄出</button>
                <button className="cancelbtn mt_10  btn" id="c2btn" type="button" 
                    onClick={()=>{props.handleSwitch2()}}>取消</button>
            </form>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        switched:state.switched
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleSwitch(){
            const action={
                type:'hswitch',
                switched:true
            }
            dispatch(action);
        },
        handleSwitch2(){
            const action={
                type:'hswitch2',
                switched:false
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(signin);