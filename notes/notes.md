 # What is Single Page Application ?
A Single Page Application (SPA) is a type of web application that loads and updates content dynamically without refreshing the entire page.


 # What is Multi Page Application ?
A multi-page application is a form of web application in which each user action causes a new page to load from the server. MPAs are made up of multiple static pages, each with a specific purpose, such as a homepage, product catalog, contact form, or user profile.

# What is React js ?
-> React also known as ReactJS. It is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs) . It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.

 # Features of React:
1. Component-Based Architecture:-
-> React provides the feature to break down the UI into smaller, self-contained components. Each component can have its own state and props.

2. JSX (JavaScript XML):-

->JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It makes React components more readable and expressive.

3. Virtual DOM:-
-> React maintains a lightweight representation of the actual DOM in memory. When changes occur, React efficiently updates only the necessary parts of the DOM.

4. One-way Data Binding:-
-> One-way data binding, the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties (props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs.

5. Performance:-
-> As we discussed earlier, react uses virtual DOM and updates only the modified parts. So this makes the DOM to run faster. DOM executes in memory so we can create separate components which makes the DOM run faster.

6. Single-Page Application (SPAs):
-> React is recommended in creating SPAs, allowing smooth content smooth content updates without page reloads. Its focus on reusable components makes it ideal for real-time applications.


# What is JSX ?
-> JSX stands for JavaScript XML . JSX is used to write the HTML-like code in JavaScript.
-> JSX is basically a syntax extension of JavaScript. React JSX helps us to write HTML in JavaScript and forms the basis of React Development. Using JSX is not compulsory but it is highly recommended for programming in React as it makes the development process easier as the code becomes easy to write and read.

# Q. Why JSX ?
1) It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
2) It makes it easier for us to create templates.
3) Instead of separating the markup and logic in separate files, React uses components for this purpose. 
4) As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.

# Q. What is reconciliation process in React >
->reconciliation process in react ensure efficient and predictable updates to the UI by comparing the virtual dom with real dom, finding the minimum changes required and applying those updates in the most efficient way.

# components in react
react components are building blocks of reactjsapplication.they help to break the user interface into smaller ,reusable chuncks ,making the code easier to manange and mainatain components can be class based or function based  and each type plays an important role in building dynamic and interactive web applications.

# **TYPES OF COMPONENT:
 In React, we mainly have two types of components: 

 # 1) Functional Components:-
------------------------------
-> Functional components are just like JavaScript functions that accept  properties and return a React element.
-> We can create a functional component in React by writing a JavaScript function.

# 2) Class Based Components:-
------------------------------
-> Class components are more complex than functional components. It requires you to extend from React. Component and create a render function which returns a react element. You can pass data from one class to other class components. You can create a class by defining a class that extends Components and has a render function.

# Q:WHAT IS PROPS IN REACT?
props is a special keyword in react that stands for properties and is used for properties and is used for passing data from one component to another.Data with props are passed in a unidirectional flow from parent to child.

1)props stand for properties and is a special keyword in react.
2)props are being passed to components like function argument.
3)props can only be passed to components in one way.
4)props data is immutable.

# what is default props in react js?

The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed. The default Props can be defined as a property on the component class or function itself, to set the default props for the class or function component

# WHAT IS CONDITIONAL RENDERING IN REACT?
in react this is a process of displaying diff. content based on certain condition or states.it allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.

# HOOKS IN REACT JS
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks

Note: Hooks are used in functional based components only

# WHAT IS USESTATE HOOK IN REACT JS?
 useState is a React hook that allows functional components to declare state variables and manage their values. It returns an array containing the current state value and a function to update that value. When the state changes, React re-renders the component to reflect the updated state in the UI.

 # 


