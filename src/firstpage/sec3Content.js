import React,{useState} from 'react';
import content from './sec3Data.json';

const Sec3Content=(props)=>{
    const [chBrrr,setChbr]=useState(
        //此處chBrrr為判斷onload時視窗大小
         document.body.offsetWidth<769?true:false
    );
    //此處為視窗縮放偵測大小改變offsetWidth值
    window.onresize=()=>{
        setChbr(
            document.body.offsetWidth<769?true:false
        );
    };
    const chBr=chBrrr?'':<br/>;
    return(
        <div className="sec3Content">
            <ul>
                {content.map(contents=>(
                <li key={contents.id}>
                    <div className="contentWrap">
                        <img src={contents.pic} alt="" />
                        
                        <div className='c1'>{contents.title1_1}{chBr}{contents.title1_2}{chBr}{contents.title1_3}</div>
                        <div className="c2">
                            <div className="c2_1">{contents.title2_1}{chBr}{contents.title2_2}</div>
                            <div className="c2_2">
                                <div className="c2_2rect">
                                    <div className="rec"></div>
                                </div>
                            </div>
                            <div className="c2_3">{contents.title2_3}{chBr}{contents.title2_4}</div>
                        </div>
                        <div className="c3">
                            <div className="c3_1">
                                <div className="rec"></div>
                                <div className="rec"></div>
                            </div>
                            <div className="c3_2">{contents.title3}</div>
                        </div>
                        
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Sec3Content;


/* class sec3Content extends Component{
    constructor(props){
        super(props);
        this.state={
            content,
            //此處chBrrr為判斷onload時視窗大小
            chBrrr: document.body.offsetWidth<769?true:false,
        }
        // window.onload=()=>{
        //     if(document.body.offsetWidth<769) {
        //         this.state={
        //             chBrrr:true
        //           };
        //     }else{
        //         this.state={
        //             chBrrr:false
        //           };
        //     }
        // }
        
}
    componentDidMount(){
        
        //   window.onresize=()=>{
        //     if(document.body.offsetWidth<769) {
        //       this.setState({
        //         chBrrr:true
        //       });
        //     }else{
        //         this.setState({
        //             chBrrr:false
        //           });
        //     }
        //   }
          window.onresize=()=>{
              this.setState({
                chBrrr:document.body.offsetWidth<769?true:false
              });
          }
        
        
    }
    
    // componentWillUnmount(){
    //     this.setState=()=>false;
    // }
    render(){
        const {content,chBrrr}=this.state;
        const chBr=chBrrr?'':<br/>;
        return(
            <div className="sec3Content">
                        <ul>
                            {content.map(contents=>(
                            <li key={contents.id}>
                                <div className="contentWrap">
                                    <img src={contents.pic} alt="" />
                                    
                                    <div className='c1'>{contents.title1_1}{chBr}{contents.title1_2}{chBr}{contents.title1_3}</div>
                                    <div className="c2">
                                        <div className="c2_1">{contents.title2_1}{chBr}{contents.title2_2}</div>
                                        <div className="c2_2">
                                            <div className="c2_2rect">
                                                <div className="rec"></div>
                                            </div>
                                        </div>
                                        <div className="c2_3">{contents.title2_3}{chBr}{contents.title2_4}</div>
                                    </div>
                                    <div className="c3">
                                        <div className="c3_1">
                                            <div className="rec"></div>
                                            <div className="rec"></div>
                                        </div>
                                        <div className="c3_2">{contents.title3}</div>
                                    </div>
                                    
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
        );
    }
}
export default sec3Content; */