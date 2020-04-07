import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
//import HeartIcon from '@material-ui/icons/HeartIcon';
import CardContent from '@material-ui/core/CardContent';
// import Button 
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
//import AutoCompleteText from './AutoCompleteText';
// import Popup from './popup';


// const electron = require('electron');
// import { ipcRenderer } from 'electron';
// const electron = require('electron');
// const electron = window.require('electron');
// const ipcRenderer = electron.ipcRenderer;
// const Menu = electron.remote.Menu;




// import React, { Component } from 'react';  
// import Popup from './components/Popup';  


// class App extends Component {  

//   constructor(props){  
// super(props);  
// this.state = { showPopup: false };  
// }  

//   togglePopup() {  
// this.setState({  
//      showPopup: !this.state.showPopup  
// });  
//  }  

//   render() {  
// return (  
// <div>  
// <h1> Simple Popup Example In React Application </h1>  
// <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  

// {this.state.showPopup ?  
// <Popup  
//           text='Click "Close Button" to hide popup'  
//           closePopup={this.togglePopup.bind(this)}  
// />  
// : null  
// }  
// </div>  

// );  
// }  
// }  

// export default App;




// class AutoCompleteText extends React.Component {
//     constructor(props) {
//         super(props);
//         this.items = [
//             'David',
//             'Daimen',
//             'sara',
//             'jane',
//         ];
//         this.state = {
//             suggestions: [],
//         };
        
//     }
//     onTextChamged = (e) => {
//         const value = e.target.value;
//         let suggestions = [];
//         if (value.length > 0) {
//             const regex = new RegExp(`^${value}`, 'i');
//             suggestions = this.items.sort().filter(v => regex.test(v));
//         }
//         this.setState(() => ({ suggestions }));
//     }
//     renderSuggestions() {
//         const { suggestions } = this.state;
//         if (suggestions.length === 0) {
//             return null;
//         }
//         return (
//             <div>
//                 <input onChange={this.onTextChamged} type="text" />
//                 <ul>
//                     {suggestions.map((item) => <li>{item}</li>)}

//                 </ul>
//             </div>
//         )
//     }
//     // render(){
//     //     return(

//     //             {/* <ul>
//     //                 {this.items.map((item)=><li>{item}</li>)}
//     //             </ul> */}
//     //             {this.renderSuggestions()}

//     //     );
//     // }
// }








class SalesOrder extends Component {
 
    state = {
        employeeInfo: []
      }
    constructor(props) {
        super(props);
        this.items = [
            'Moya Biscuit',
            'Cheralia Biscuit',
            'HipHop Biscuit',
            'Moya Juice',
        ];
    //    this.orderInfo= [];
        this.state = {
            suggestions: [],
            text:'',
            // showPopup: false,
        };
        //this.state = { showPopup: false }; 
    }

//   componentDidMount() {
//     axios.get("https://reddit.com/r/aww.json")
//       .then(res => {
//         this.setState({
//           orderInfo: res.data.data.children
//         })
//         //   console.log(res.data.data.children);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

    // togglePopup() {  
    //     this.setState({  
    //          showPopup: !this.state.showPopup  
    //     });  
    //      } 
    onTextChamged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text:value }));
    }
    suggestionSelected(value){
        this.setState(()=>({
            text: value,
            suggestions:[],
        }))
    
        
    }
    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        // return (
        // <div>
        //     <input onChange={this.onTextChamged} type="text" />
        //     <ul>
        //         {suggestions.map((item) => <li>{item}</li>)}

        //     </ul>
        // </div>

        return (
            <ul style={{listStyle:null}}>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>


        );

    }
  
    singleDepartment = (image2) => {
        // ipcRenderer.send('toggle-image2', image2);
    }
    // successPopup=()=>{(
    //     <div className="modal" tabindex="-1" role="dialog">
    //     <div className="modal-dialog" role="document">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title">Modal title</h5>
    //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div className="modal-body">
    //           <p>Modal body text goes here.</p>
    //         </div>
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-primary">Save changes</button>
    //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )


    // }


    render() {
        const {text}=this.state;
        return (
            <>
                <AppBar style={{ backgroundColor: "#11669F" }} position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" style={{ flex: 1 }}>
                            EATH_ERP
            </Typography>
                        <div style={{ wordSpacing: 10 }}>
                            <p style={{ paddingLeft: 10 }} className="float-right" >
                                Logout
                            </p>
                            <p className="float-right">Admin</p>
                        </div>
                    </Toolbar>
                </AppBar>

                {/* {this.state.orderInfo.map(orderInfo =>
            <li key={orderInfo.data.id} className="list-group-item"
              onClick={() => this.singleEmployee(orderInfo.data.preview.images[0].source.url)}>
              <img src={orderInfo.data.thumbnail} alt="thumb" className="thumbnail"></img>
              <div> {orderInfo.data.title}</div>
            </li>
          )} */}



                {/* <h2 className="float-left">Create sales Order</h2> */}
                <Grid>

{/* 
                    <div>
                        

                        {this.state.showPopup ?
                            <Popup
                                text='Your Sales Request is successfully sent '
                                closePopup={this.togglePopup.bind(this)}
                            />
                            : null
                        }
                    </div>   */}
{/* 
<div className="modal" tabindex="-1" role="dialog">
     <div className="modal-dialog" role="document">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title">Modal title</h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div className="modal-body">
           <p>Modal body text goes here.</p>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-primary">Save changes</button>
           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
         </div>
       </div>
     </div>
   </div> */}


                    <h2 style={{ padding: 20 }} className="text-center">Sales order Form</h2>

                    <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">Item&nbsp;Name</label>
                        </div>

                        <div>
                            <p className="input-group">
                                <div>
                                    <input value={text}  type="text"  onChange={this.onTextChamged} type="text" className="form-control"/>
                               
                                    {this.renderSuggestions()}
                                </div>
                                {/* <input type="text" id="from" onChange={<AutoCompleteText />} className="form-control" /> */}
                                <span className="input-group-btn">
                                    <Link to="/imagel">

                                        <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-list"></i></button>
                                    </Link>

                                </span>
                            </p>
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Item ID</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>

                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Quantity</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                    </div>
                    <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">Sales&nbsp;Person</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Expected Date</label>
                        </div>
                        <div>
                            <p className="input-group">
                                <input type="text" id="to" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </div>

                    </div>
                    <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">Client Name</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Client Address</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Discount</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>

                    </div>
                    <div>
                   
                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Description</label>
                        </div>
                        <div>
                            <input style={{ marginLeft: 10 }} type="text" id="another-input" className="form-control" />
                        </div>
                    </div>
                    <div style={{ padding: 25 }}>
                        <Button style={{ backgroundColor: "#11669F" }} className="float right">Sale</Button>
                    </div>
                </Grid>
            </>
        );
    }
}
export default SalesOrder;


  // this.order=[
        //     'itemName',
        //     'itemID',
        //     'Quantity',
        //     'ExpectedDate',
        //     'ClientName',
        //     'ClientAddress',
        //     'Discount',
        //     'Description'
        // ];