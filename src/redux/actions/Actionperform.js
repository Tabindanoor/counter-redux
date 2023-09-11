export const Increment =(num)=>{
   return {
    type:"INCREMENT",
    payload:num
   }
}

export const Decrement =()=>{
    return{
        type:'DECREMENT'
    }
}

export const Loggedin =()=>{
    return{
        type:"SIGNIN"
    }
}