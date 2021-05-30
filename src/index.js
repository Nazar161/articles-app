import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './components/app'


// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     this.nextYear = this.nextYear.bind(this)

//     // this.nextYear = () => {
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // }
//   }

//   // nextYear = () => {
//   //   this.setState(state => ({            //Новый синтаксис ES9
//   //     years: ++state.years                  
//   //   }))
//   // }

//   nextYear() {
//     // this.state.years++
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <h1>Hello, My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const AllMembers = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="vk.com"/>
//       <WhoAmI name="Mike" surname="Smith" link="vk.com"/>
//       <WhoAmI name="Nazar" surname="Sarkisian" link="facebook.com"/>
//     </>
//   )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <AllMembers/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
