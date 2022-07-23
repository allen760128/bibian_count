import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class input extends Component{
    constructor(props){
        super(props);
        this.state={
            focused:false,
            cli:false,
            open:false,
            clicc:false,
        }
        
    }
    
   /* setRef=(di)=>{
        di.style.color='yellow';;
    }*/
    handleFocus=()=>{
        this.setState({
            focused:true,
            cli:false,
        });
    }
    handleBlur=()=>{
        this.setState({
            focused:false,
        });
    }
    hdClick=()=>{
        this.setState({
            cli:true,
        });
    }
    ssd=()=>{
        this.setState({
            cli:false,
        });
    }
    jh=()=>{
        this.setState({
            open:true,
        });
    }
    closed=()=>{
        this.setState({
            open:false,
        });
    }
    handleclick=()=>{
        this.setState({
            clicc:true,
        });
    }
    render(){
        const {focused,cli,open,clicc}=this.state;
        const clip={opacity:cli?'0.5':'1'};
        const chanA={color:clicc?'red':''};
        const chanB={color:clicc?'green':''};
        
        return(
            <div className="inpp">
                <div className="inWrap" onClick={()=>{this.ssd()}}>
                    <input type="text" name="" id="" className={focused?'active':''} onFocus={()=>{this.handleFocus()}} onBlur={()=>{this.handleBlur()}}/>
                </div>
                <div className='pp' onClick={()=>{this.hdClick()}} style={clip}></div>
                <div className="iuu" onClick={()=>{this.jh()}}></div>
                <div className="wid" style={{left:open?'0%':'100%'}}> 
                  <div className='inWr' >
                      <div className='close' onClick={()=>{this.closed()}}>X</div>
                  </div>
                  
                </div>
                <div className='cha' style={chanA} /*ref={this.setRef}*/>這是一</div>
                <div className='cha' style={chanB}><Link to='/'  style={{color:'black'}} >這是這是</Link></div>
                <button className='chb' onClick={()=>{this.handleclick()}}>click</button>
            </div>
        );
    }
}
export default input;












/*constructor(props){
    super(props);
    this.state={
        focused:false,
    }
}
handleFocus=()=>{
    this.setState({
        focused:true,
    });
}
handleBlur=()=>{
    this.setState({
        focused:false,
    });
}*/

/*className={focused?'active':''} onFocus={()=>{this.handleFocus()}} onBlur={()=>{this.handleBlur()}}*/