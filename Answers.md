1. What problem does the context API help solve?
// Context API helps with prop drilling throughout and between sibling and other components around the app. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
// Actions: objects that have `{type: payload}` properties used to store data based on an event change. `type` provides a description of the data being stored, and `payload` is the data.

// Reducers: functions that transform state, they are used by passing in your initial state as the first parameter, and then the action object that you want to change the state to. The `reducer` function returns a new object with the updated state. 

// Store: ojbect that contains the state tree for the whole app. In Redux, it is the single source of truth in the application because it is one centralized location where you can pass in reducers and actions to be used around different places in the app. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
// Application state is global, meaning it can be used thrroughout multiple components. Component state is only usable inside its component and said components children. 
The use cases between the two vary depending on the specificity of the action you are trying to produce with each.  

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
// Thunk is a function of Middleware in Redux that preforms asynchronous actions with reducers within an event and returns another function. On an action creator, thunk takes the returned data and forwards the action to the reducer, unless the returned data is a function, in which case thunk will pass in the dispatch function as an argument. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
// Redux, because it seems like it would be an efficient way to keep track of multiple slices of state with varying different uses with the store and reducers. It forces us to write predictable code, which will be helpful when working with and maintaining large apps. 