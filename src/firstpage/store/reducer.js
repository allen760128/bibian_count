const defaultState={
    switched:false
};

export default (state=defaultState,action)=>{
    if(action.type==='hswitch'){
        return{
            switched:true
        }
    }
    if(action.type==='hswitch2'){
        return{
            switched:false
        }
    }
    
    return state;
}
