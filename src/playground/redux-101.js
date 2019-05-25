import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {})=>({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1} = {})=>{
    return{
        type: 'DECREMENT',
        decrementBy
    }
}
const countReset = ()=>({
        type:'RESET'
    })
const countFeducer = (state = { count: 0 }, action)=>{
    // console.log(action.type);
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy  
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return{
                count: 110
            }
        default:
            return state; 
    }
}
let store = createStore(countFeducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 7 }));
store.dispatch(incrementCount());
//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(countReset());

