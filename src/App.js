import React, { Component } from 'react';
import {  createStore } from 'redux';
import { ADD_ITEM } from './actionTypes'


import './App.css';

const tree = {
  "0" :{
    "0":"A",
    "1": {
      "0": "E",
      "1":{ "0":"K","1":"L"},
      "2":{ "0": "F"},
    },
    "2":{
      "0": "C",
      "1": { "0": "G"}
    },
    "3":{
      "0":"D",
      "1": { "0": "H", "1": { "0": "M"}},
      "2": { "0": "I"},
      "3": { "0": "J"}
    },
  }
};

function addTodo(text) {
  return {
    type: ADD_ITEM,
    text
  }
}
let todos = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          node: action.node,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

const store = createStore(todos, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

// const datas = store.getState();

let test = ( obj , s) =>{
  for (let a in obj) {
    if (typeof(obj[a]) == "object") {
      test(obj[a],a);
    } else {
      store.dispatch(()=>{
        return {
          type: ADD_ITEM
        }
      })
      store.dispatch(addTodo('text'))
      // this.setState(prevState => ({
      //   html:  prevState.html +  `<div>${obj[a]}</div>`    
      // }));
      // html =s + "=" + obj[a]; //如果是值就显示
    }
  }
}
test( tree , 0);
// Object.keys(datas).map( (a) => {  
//   Object.keys(datas[a]).map( (b) => {
//     Object.keys(datas[a][b]).map( (c) => {  
//       console.log(datas[a][b][c]);
//     })
//   })
// });


class App extends Component {
  render() {
    
    
    
    // const view = this.props.getState.html;
    
    //  datas.map( (element) =>{
    //    console.log(element);
    //  })
    return (
      <div className="App">
        <div>
          {/* {view} */}
        </div>
      </div>
    );
  }
}

export default App;
