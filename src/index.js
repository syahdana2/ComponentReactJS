import React from 'react';
import App from './Component/App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './Component/HelloComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const HelloComponents = () => {
    return <p>Hello Components</p>;
}

class StateFullComponent extends React.Component {
    render() {
        return <p>StateFullComponent</p>;
    }
}

class Test extends React.Component { 
  constructor(props) 
  { 
      super(props); 
      this.state = { hello : "World!" }; 
  } 

  componentWillMount() 
  { 
      console.log("componentWillMount()"); 
  } 

  componentDidMount() 
  { 
      console.log("componentDidMount()"); 
  } 

  changeState() 
  { 
      this.setState({ hello : "Geek!" }); 
  } 

  render() 
  { 
      return ( 
          <div> 
          <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
          <h2> 
          <a onClick={ this.changeState.bind(this) }>Press Here!</a> 
          </h2> 
          </div>); 
  } 

  shouldComponentUpdate(nextProps, nextState) 
  { 
      console.log("shouldComponentUpdate()"); 
      return true; 
  } 

  componentWillUpdate() 
  { 
      console.log("componentWillUpdate()"); 
  } 

  componentDidUpdate() 
  { 
      console.log("componentDidUpdate()"); 
  } 
}  


root.render(
  <React.StrictMode>
    <App/>
    <Test/>
    <HelloComponent/>
    <HelloComponents/>
    <StateFullComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


