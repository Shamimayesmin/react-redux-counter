import {Middleware} from '@reduxjs/toolkit'

// custom middleware
const logger: Middleware = (store) =>(next)=>(action)=>{
    console.log('Current state',store.getState());
    console.log('Action',action);

    next(action)

    console.log('Updated state',store.getState());
}

export default logger;