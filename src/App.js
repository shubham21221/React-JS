// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Header from './myComponents/Header';
import Footer from "./myComponents/Footer";

function App() {
    var myStyle = {
              fontSize:50,
              color: '#FF0000'
            }
  return (
    <>
    <Header /> 
    <h1 style={myStyle}>Header</h1>
    <h1 className='h'> Header </h1>
    <Footer/>
  </>
  );
}

export default App;

// class App extends React.Component{
//   render (){
//     var i = 1;

//     // style the myStyle variable
//     var myStyle = {
//       fontSize:50,
//       color: '#FF0000'
//     }
//     return(
//       <div>

//         {/* printing the heading para */}
//         Hello World!
//         <h1>Header</h1>
//         <h2>Content</h2>
//         <p>This is the content</p>

//         {/* sum two intager */}
//         <h1>{1+1}</h1>

//         {/* if condition */}
//         <h1> {i == 1 ? 'True!' : 'False! '} </h1>
//         <h1> {i == 2 ? 'True!' : 'False! '} </h1>

//         {/* deffind veriable using the heding into css */}
//         <h1 style={myStyle}>Header</h1>

//         <Header/>
//         <Content/>
//         <Apps/>
//       </div>
//     );
//   }
// }

// class Header extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }
// class Content extends React.Component{
//   render(){
//     return (
//       <div>
//         <h2>
//           Content
//         </h2>
//       </div>
//     );
//   }
// }

//<====defind the row anw co

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:
//       [
//         {
//           "id":1,
//           "name":"foo",
//           "age":"39"
//         },
//         {
//           "id":2,
//           "name":"foo",
//           "age":"30"
//         },
//         {
//           "id":3,
//           "name":"foo",
//           "age":"40"
//         }
//       ]
//     }
//   }
//   render(){
//     return(
//       <div>
//         <Header/> 
//           <table>
//           <tbody>
//             {this.state.data.map((person, i) => <TableRow key = {i}
//             data = {person} />)}
//           </tbody>
//           </table>
//       </div>
//     );
//   }
// }
// class Header extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }

// class TableRow extends React.Component{
//   render(){
//     return(
//       <tr>
//         <td>{this.props.data.id}</td>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.age}</td>
//       </tr>
//     );
//   }
// }

//<===Props funtion use the differnt string to anther place

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       header: "Header fpr state..",
//       content: "Content from state.."
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.header}</h1>
//         <h2>{this.state.content}</h2>
//       </div>
//     );
//   }
// }

//<===Props funtion use the differnt string to anther place

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       name:"dkf",
//     }
//   }
//   render(){
//     return(
//       <div>
//         <JTP jtpProps = {this.state.name}/>
//       </div>
//     );
//   }
// }
// class JTP extends React.Component{
//   render(){
//     return(
//       <div>
//         <h3>welcome to {this.props.jtpProps}</h3>
//       </div>
//     );
//   }
// }

// export default App;


// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             data:'www.google.com'
//         }
//         this.handleEvent = this.handleEvent.bind(this);
//     }
//     handleEvent(){
//         console.log(this.props);
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h2>React constructor Example</h2>
//                 <input type="text" value={this.state.data}/>
//                 <button onClick={this.handleEvent}>place Click</button>
//             </div>
//         )
//     }
// }



