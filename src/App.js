import './App.css';
import React from 'react';
// import * as typeformEmbed from '@typeform/embed'
import { ReactTypeformEmbed } from 'react-typeform-embed';

import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";


//screens files import

import FormDisplay from './screen/formdisplay';
import Questions from './screen/questions';
import UploadingVideos from './screen/uploadingvideos';
import MappingVideos from './screen/mappingvideos';
import CreateForm from './screen/createform';
import Dashboard from './screen/dashboard';



// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {apiResponse:""};

//   }
  // callAPI(){
  //   fetch('http://localhost:9000/masterkeyapi')
  //   .then(res=>res.text())
  //   .then(res=>this.setState({apiResponse:res}))
  //   // var json_data = JSON.parse(this.state)
  //   // var json_data = this.state.json()
  //   // console.log(this.json_data)
  // }

  // componentWillMount(){
  //   this.callAPI();
  // }

  // componentDidMount(){
  //   const popup1 = typeformEmbed.makePopup('', 
  //   {
  //     mode: 'popup',
  //     hideHeaders: true,
  //     hideFooters: true,
  //     autoClose: 3000,
  //     onSubmit: function(){
  //       console.log('form submitted')
  //     }
  //   })
  //   document.getElementById('btn-popup').addEventListener('click', function(){
  //     popup1.open();
  //   })
  // }



// render() {
  
//   return (
//     <div className="App">
//     {/* <script src="https://embed.typeform.com/embed.js"></script> */}
//       <header className="App-header">
//       {/* <button data-tf-popup="<form-id>">open form</button> */}
// {/* <script src="//embed.typeform.com/next/embed.js"></script> */}
//         {/* <p>Hello</p> */}
//         <ReactTypeformEmbed url="https://form.typeform.com/to/NEOVpLNI" onSubmit={()=>{
//           {console.log("form completed") }
//          }} /> 
//         {/* <p>{this.state.apiResponse}</p> */}
//       </header>
//     </div>
//   );
// }


// }

function App() {
  return(
    <>
    <div className='App'>
      {/* <Route exact path="/" component={FormDisplay} /> */}
      {/* <Route exact path="/" component={Questions} /> */}
      {/* <Route exact path="/" component={UploadingVideos} /> */}
      {/* <Route exact path="/" component={MappingVideos} /> */}
      {/* <Route exact path="/" component={CreateForm} /> */}
      <Route exact path="/" component={Dashboard} />

    </div>


    </>
  );
}


export default App;

