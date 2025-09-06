import axios from "axios";

export const initialProductData = (product)=> product ;


export const productDataReducer = (state,action)=>{
       // console.log("action in reducer" , action.payload.sizes);
       switch(action.type){
             case 'SET_PRODUCT' :
                            return {
                                   ...state , 
                                          sizes : action.payload.sizes,
                                          materials : action.payload.materials,
                                          fits : action.payload.fits,
                            }
             default :      
                      return state
                        

       }
}

