import React from 'react';
import contentData from './sec4Data.json';

const Sec4Content=(props)=>{
    return(
        <div className="itemWrap">
            <ul>
                {contentData.map(count=>(
                <li key={count.id}>
                    <ul>
                        <li>{count.title1}</li>
                        <li>{count.title2}</li>
                        <li>{count.title3}</li>
                        <li>{count.title4}</li>
                    </ul>
                </li>
                ))}                                
            </ul>
        </div>
    );
}

export default Sec4Content;
/* class sec4Content extends Component{
    state={
        contentData,
    }
    render(){
        const {contentData}=this.state;
        return(
            <div className="itemWrap">
                <ul>
                    {contentData.map(count=>(
                    <li key={count.id}>
                        <ul>
                            <li>{count.title1}</li>
                            <li>{count.title2}</li>
                            <li>{count.title3}</li>
                            <li>{count.title4}</li>
                        </ul>
                    </li>
                    ))}                                
                </ul>
            </div>
        );
    }
}
export default sec4Content; */