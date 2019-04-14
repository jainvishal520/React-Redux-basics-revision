const { createStore } = Redux;
const initState = {
  todos: [],
  posts:[]
}

//redux store creation
const store = createStore(myreducer);

// reducer takes state and action as params and interacts with store
function myreducer(state = initState, action){
  if(action.type == 'ADD_TODO'){
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
  
  if(action.type == 'ADD_POST'){
    return{
      ...state,
      posts:[...state.posts, action.post]
    }
  }
}

//subscribing to a store
store.subscribe(() => {
  console.log("state updated");
  console.log(store.getState())
})

// dispatching actions to the reducer
store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
store.dispatch({type: 'ADD_TODO', todo: 'buy some moree milk'})
store.dispatch({type: 'ADD_POST', post: 'Post with yoshi'})
store.dispatch({type: 'ADD_POST', post: 'Post with vishal'})