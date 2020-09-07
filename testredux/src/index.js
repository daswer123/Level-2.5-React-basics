import {createStore} from "redux";

const reducer = (state = 0,action) =>{

  switch (action.type) {
    case "INC" : 
      return state + 1;
    case "DEC" : 
      return state - 1;
    case "RES" :
      return 0;
    default:
      return state;
  }

}

const counter = document.querySelector(".counter-info p");
let state = createStore(reducer);

state.subscribe(() =>{
  counter.textContent = state.getState(); 
})


const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

console.log(counter,plus,minus,reset)

const inc = () => {
  return {type: "INC"}
}

const dec = () => {
  return {type: "DEC"}
}

const res = () => {
  return {type: "RES"}
}


plus.addEventListener("click", () => {
  state.dispatch(inc());
})

minus.addEventListener("click", () => {
  state.dispatch(dec());
})

reset.addEventListener("click", () => {
  state.dispatch(res());
})