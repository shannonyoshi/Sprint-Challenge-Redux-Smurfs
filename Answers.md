1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, reduce, concat, assign return new objects, so don;t produce "side-effcts"

We would use assign to avoid accidentally changing the values of the original object


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Redux is known as a 'single source of truth' because state is held in the store, in one place.

The store holds state data for the application. 

When a user wants to change something, an action creator will create an object, which holds the information that is changing and the type of change being made.

This action object is sent to the reducer, which reduces this object and the previous state tree into a new state tree with the updates. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state refers to the state tree that Redux holds globally.  Component state refers to the branch of state available in that component. Component state is useful for small applications which don't require much information on state. Redux is useful for larger scale applications because you can access any state data you need without having to pass state down as props.

1.  What is middleware?

middleware allows us to intercept data and alter it. For example, this allows us to authenticate users and ensure private access by stopping information from showing if the user is not authenticated. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk enables async operations, so instead of calling the api and waiting to get the data back, the program will continue to run while the data is being fetched.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()

mapStateToProps tells connect which information from the store is needed, then any action functions that are needed can be passed in; these are then made available as props on the component. Lastly, the component listed tells the store which component needs access to this information.
