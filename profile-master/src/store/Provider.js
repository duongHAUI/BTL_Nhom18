import { useState,useReducer}from 'react';
import Context from './Context';
import {reducer,initState}from './reducer';
function Provider({children}){
    const [state,dispatch]=useReducer(reducer,initState)
    // const [product,setProduct]=useState('')
    
    // const handleProduct=(productsIndex)=>{
    //     return setProduct( productsIndex)
        
    // }
    // const valueProductIndex={
    //     product,
    //     handleProduct
    // }
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider;