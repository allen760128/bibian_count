import React,{Component} from 'react';


class sec1 extends Component{
    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.showSlide();
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        this.stopSlide();
    }
    showSlide=()=>{
        let slideIndex=1;
        const color=['#0f1f6c','#ffd01e','#fff'];
        const slides=document.querySelectorAll('.slide');
        const back=document.getElementsByClassName('slideWrap')[0];
        back.style.backgroundColor='#0f1f6c';
        const slideShow=()=>{
            
                for(let x=0;x<slides.length;x++){
                    if(slideIndex>slides.length){slideIndex=1}
                    /*if(slideIndex<1){slideIndex=slides.length}*/
                    slides[x].style.display='none';
                }
            slides[slideIndex-1].style.display='block';
            back.style.backgroundColor=color[slideIndex-1];
        }
        const runtime=()=>{
            const slidess=document.querySelectorAll('.slide');
            slideIndex=slideIndex++>slidess.length?slideIndex=1:slideIndex;
            slideShow(slideIndex);
        }
        setInterval(runtime,2000);
    }
    stopSlide=()=>{
        clearInterval(this.runtime);
    }
    
    render(){
        return(
            <div className='sec1'>
                <div className="slideWrap">
                    <img className="slide" src="img/BG1_1.png" alt="" />
                    <img className="slide" src="img/BG1_2.png" alt="" />
                    <img className="slide" src="img/BG1_3.png" alt="" />
                </div>
            </div>
        );
    }
}



export default sec1;

