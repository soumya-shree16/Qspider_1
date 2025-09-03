export const initialState={
    users:[],
    loading:true,
    error:"",
    friends:[]
    
}

export const reducer=(state,action)=>{
    switch (action.type) {
        case "success":
            return {...state,loading:false,users:action.payload}
         case "error":
            return {...state,loading:false,error:action.payload}   
        case "removeuser":
            return {...state,users:action.payload}
        case "friend":
            return {...state,
                friends:[...state.friends,action.payload]}    
       
    }
}