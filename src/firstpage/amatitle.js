import React from 'react';

const amatitle=(props)=>{

    /*使用function component時，props前this需刪除*/ 
    const title1=props.data1;
        const title2=props.data2;
        const title3=props.data3;
        const pic=props.data4;
    return(
        <div className="amatitle">
                        <div className="amapic">
                            <img src={pic} alt="" />
                        </div>
                        <div className="title">{title1}<span>{title2}</span>{title3}</div>
                    </div>
    );
}
/*
class amatitle extends Component{
    render(){
        const title1=this.props.data1;
        const title2=this.props.data2;
        const title3=this.props.data3;
        const pic=this.props.data4;
        return(
            <div className="amatitle">
                        <div className="amapic">
                            <img src={pic} alt="" />
                        </div>
                        <div className="title">{title1}<span>{title2}</span>{title3}</div>
                    </div>
        );
    }
}*/
export default amatitle;