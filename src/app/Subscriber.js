import {store} from './action'

store.subscribe(()=>{
console.log("subscribed called..")
});