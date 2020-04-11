import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import {Link } from 'react-router-dom';


// const electron = require('electron');
// import { ipcRenderer } from 'electron';
// const electron = require('electron');
//const electron = window.require('electron');
//const ipcRenderer = electron.ipcRenderer;
//const Menu = electron.remote.Menu;


class ViewEmp extends Component {
  state = {
    employeeInfo: []
  }
  // }
  // constructor(props){

  //   super(props);
  //   this.state={
  //     isAddProduct: false,
  //     error:null,
  //     response:{},
  //     product:[],
  //     isEditProduct:false
  //   }
  //   this.onFormSubmit= this.onFormSubmit.bind(this);

  // }
  // onCreate(){
  //   this.setState({isAddProduct:true});

  // }
  // onFormSubmit(data){
  //   const apiUrl="backend api";
  //   const myHeaders= new Headers();
  //   myHeaders.append('Content-Type','application/json');

  //   const options={
  //     method:'POST',
  //     body: JSON.stringify(data),
  //     myHeaders
  //   };
  //   fetch(apiUrl, options)
  //   .then(res=> res.json()
  //   .then(result=>{
  //     this.setState({
  //       response:result,
  //       isAddProduct:false,
  //       isEditProduct:false
  //     } )
  //   },
  //   (error)=>{
  //     this.setState({error});
  //   }
  //   )

  // }
  // editProduct= productId=>{
  //   const apiUrl="backend api";
  //   const myHeaders= new Headers();
  //   myHeaders.append('Content-Type','application/json');
  //   const formData = new FormData();
  //   formData.append('productId', productId);  
  //   const options={
  //     method:'POST',
  //     body: formData
  //   };
  //   fetch(apiUrl, options)
  //   .then(res=> res.json()
  //   .then(result=>{
  //     this.setState({
  //       response:result,
  //       isAddProduct:true,
  //       isEditProduct:true 
  //     })
  //   },
  //   (error)=>{
  //     this.setState({error});
  //   }
  //   )

  // }
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     error:null,
  //     employeeInfo:[]
  //   }
  // }
  // componentDidMount(){
  //   const apiUrl = '';
  //   fetch(apiUrl)
  //   .then(res=>res.json())
  //   .then(
  //     (result)=>{
  //       this.setState({
  //         employeeInfo:result 
  //        
  //       });
  //     },
  //     (error)=> {
  //       this.setState({ error});
  //     }
  //   )
  // }
  componentDidMount() {
    axios.get("http://192.168.1.4:8000/api/v1/employe/")
      .then(res => {
        this.setState({
          employeeInfo: res.data
        })
        //   console.log(res.data.data.children);
      })
      .catch(error => {
        console.log(error);
      })
  }

//   singleEmployee = (image) => {
//     ipcRenderer.send('toggle-image', image);
//   }

//   singleEmployeeEdit = (image1) => {
//     ipcRenderer.send('toggle-image1', image1);
//   }
  // initMenu = () => {
  //   const menu = Menu.buildFromTemplate([
  //     {
  //       label: "File",
  //       submenu: [
  //         { label: "New Window" },
  //         {
  //           label: "Settings",
  //           accelerator: "CmdOrCtrl+,",
  //           click: () => {
  //             ipcRenderer.send("toggle-settings");

  //           }
  //         },
  //         { type: "separator" },
  //         {
  //           label: "Quit",
  //           accelerator: "CmdOrCtrl+Q"
  //         } 
  //       ]
  //     },
  //     // { type: "separator" },

  //     {
  //       label: "Edit",
  //       submenu: [
  //         { label: "Menu Item 1" },

  //       ]
  //     },

  //   ])
  // }


  // let employeeInfo= this.state.employeeInfo.map((employeeInfos)=>{
  //   return(
      
  //     <table className="table table-bordered">
  //     <thead className="thead-dark" style={{backgroundColor: "#11669F"}}>
    
    
  //       <tr>
  //         <th style={{ width: 50 }} score="col">employeId</th>
  //         <th style={{ width: 100 }} score="col">First Name</th>
  //         <th style={{ width: 100 }} score="col">Last Name</th>
  //         <th style={{ width: 100 }} score="col">Department</th>
  //         <th style={{ width: 100 }} score="col">Job Title</th>
  //         <th style={{ width: 100 }} score="col">Position</th>
  //         {/* <th style={{ width: 100 }} score="col">Salary</th> */}
  //         <th style={{ width: 100 }} score="col">Employment Status</th>
  //         {/* <th style={{ width: 100 }} score="col">Location</th> */}
  //         <th style={{ width: 50 }} score="col">__</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {employeeInfo.map(employeeInfos => (
  //         <tr key={employeeInfos.employeId}>
  //           <td>{employeeInfos.employeId}</td>
  //           <td>{employeeInfos.firstName}</td>
  //           <td>{employeeInfos.lastName}</td>
  //           {/* <td>{employeeInfos.email}</td> */}
  //           {/* <td>{employeeInfos.hiredDate}</td> */}
  //           {/* <td>{employeeInfos.telephone}</td> */}
  //           {/* <td>{employeeInfos.birthDate}</td> */}
  //           {/* <td>{employeeInfos.country}</td> */}
  //           {/* <td>{employeeInfos.region}</td> */}
  //           {/* <td>{employeeInfos.city}</td> */}
  //           <td>{employeeInfos.department}</td>
  //           <td>{employeeInfos.role}</td>
  //           <td>{employeeInfos.level}</td>
  //           <td>{employeeInfos.termOfEmployment}</td>
  //           <td>
  //             <Button color="success" size ="sm" className="mr-2">Edit</Button>
  //             <Button color="danger" size ="sm">Delete</Button>
    
  //           </td>
    
    
    
  //           {/* <td>{employeeInfos.Location}</td> */}
    
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
    
  //   )
  //              })
  

  render() {
    const { error, employeeInfo } = this.state;
    if (error) {
      return (
        <div>Error: {error.message}</div>
      )
    }
    else {
      return (
        <div>
          <AppBar style={{ backgroundColor: "#11669F" }} position="static">

            <Toolbar>
              <h5>EATH {'  '}</h5>
              <span><p style={{ flex: 1 }}>Admin</p></span>

            </Toolbar>
          </AppBar>

          <div className='float-right'>
            <FormGroup required fullWidth>
              {/* <Label>Search</Label> */}
              <Input type="text" name="description" multiline rows="3" placeholder="search" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
              <Button>Search</Button>
            </FormGroup>
          </div>

          <table className="table table-bordered">
            <thead className="thead-dark" style={{backgroundColor: "#11669F"}}>
          
              <tr>
                <th style={{ width: 50 }} score="col">employeId</th>
                <th style={{ width: 100 }} score="col">First Name</th>
                <th style={{ width: 100 }} score="col">Last Name</th>
                <th style={{ width: 100 }} score="col">Department</th>
                <th style={{ width: 100 }} score="col">Job Title</th>
                <th style={{ width: 100 }} score="col">Position</th>
                {/* <th style={{ width: 100 }} score="col">Salary</th> */}
                <th style={{ width: 100 }} score="col">Employment Status</th>
                {/* <th style={{ width: 100 }} score="col">Location</th> */}
                <th style={{ width: 50 }} score="col">__</th>
              </tr>
            </thead>
            <tbody>
              {employeeInfo.map(employeeInfos => (
                <tr key={employeeInfos.employeId}>
                  <td>{employeeInfos.employeId}</td>
                  <td>{employeeInfos.firstName}</td>
                  <td>{employeeInfos.lastName}</td>
                  {/* <td>{employeeInfos.email}</td> */}
                  {/* <td>{employeeInfos.hiredDate}</td> */}
                  {/* <td>{employeeInfos.telephone}</td> */}
                  {/* <td>{employeeInfos.birthDate}</td> */}
                  {/* <td>{employeeInfos.country}</td> */}
                  {/* <td>{employeeInfos.region}</td> */}
                  {/* <td>{employeeInfos.city}</td> */}
                  <td>{employeeInfos.department}</td>
                  <td>{employeeInfos.role}</td>
                  <td>{employeeInfos.level}</td>
                  <td>{employeeInfos.termOfEmployment}</td>
                  <td><button>
                          <Link to={{
                            pathname: `/employe/${employeeInfos.employeId}`,
                            state: { employeeInfos: employeeInfos.employeId }
                          }}>View</Link>
                        </button></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
export default ViewEmp;
//   render(){
//     // let productForm;
//     // if(this.state.isAddProduct || this.state.isEditProduct){
//     //   productForm= <AddProduct onFormSubmit ={this.onFormSubmit} product={this.state.product}/>

//     // }
//     return (

//       // <div>
//       //   <Container>
//       //     <h1>React Tutorial</h1>
//       //     {!this.state.isAddProduct && <Button variant="primary"></Button>}
//       //   </Container>
//       // </div>

//       <div className="App">

//         {/* <ul> */}
//         {/* {this.state.posts.map(post =>
//             <li key={post.data.id} className="list-group-item"
//               onClick={() => this.singleEmployee(post.data.preview.images[0].source.url)}>
//               <img src={post.data.thumbnail} alt="thumb" className="thumbnail"></img>
//               <div> {post.data.title}</div>
//             </li>
//           )} */}
//           {/* {this.state.employeeInfo.map(employeeInfos =>
//             <li key={employeeInfos.data.id} className="list-group-item"
//               onClick={() => this.singleEmployee(employeeInfos.data.preview.images[0].source.url)}>
//               <img src={employeeInfos.data.thumbnail} alt="thumb" className="thumbnail"></img>
//               <div> {employeeInfos.data.title}</div>
//             </li>
//           )} */}




//         <AppBar style={{ backgroundColor:"#11669F"}} position="static">

//           <Toolbar>
//             <h5>EATH {'  '}</h5>
//             <span><p style={{ flex: 1 }}>Admin</p></span>

//           </Toolbar>
//         </AppBar>
//         <div style={{backgroundColor:"#EDEDED"}}>
//         <h1>Employees Overview</h1>



//              <div className='float right'>
//           <FormGroup required fullWidth>
//             {/* <Label>Search</Label> */}
//             <Input type="text" name="description" multiline rows="3" placeholder="search" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
//             <Button>Search</Button>
//           </FormGroup>
//         </div>

//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th style={{ width: 50 }} score="col">code</th>
//               <th style={{ width: 100 }} score="col">Employee Name</th>
//               <th style={{ width: 100 }} score="col">Department</th>
//               <th style={{ width: 100 }} score="col">Job Title</th>
//               <th style={{ width: 100 }} score="col">Position</th>
//               <th style={{ width: 100 }} score="col">Start Date</th>
//               <th style={{ width: 100 }} score="col">Salary</th>
//               <th style={{ width: 100 }} score="col">Employment Status</th>
//               <th style={{ width: 100 }} score="col">Location</th>

// {/* <tbody>
//   {employeeInfo.map(employee)=>(
//     <tr key={employee.id}>
//        <th style={{ width: 50 }} scope="row">{employee.id}</th>
//   <td style={{ width: 100 }}>{employee.name}</td>



//     </tr>
//   )}
//           </table>
//         <Button style={{ backgroundColor: "#11669F" }}  onClick={() => this.singleEmployee()}>Add new Employee</Button>
// </tbody> */}

//               <th style={{ width: 50 }} score="col">__</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th style={{ width: 50 }} scope="row">1</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">2</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">3</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">4</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">5</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">6</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">7</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">8</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">9</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">10</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//             <tr>
//               <th style={{ width: 50 }} scope="row">11</th>
//               <td style={{ width: 100 }}>Hanna Belay</td>
//               <td style={{ width: 100 }}>Finance</td>
//               <td style={{ width: 100 }}>Accountant</td>

//               <td style={{ width: 100 }}>Senior</td>
//               <td style={{ width: 100 }}>2/12/2019</td>
//               <td style={{ width: 100 }}>10,000</td>
//               <td style={{ width: 100 }}>Full-time</td>
//               <td style={{ width: 100 }}>Wello Sefer</td>


//               <td><Button type="submit" className="btn-lg btn-dark btn-block"  onClick={() => this.singleEmployeeEdit()}>Edit </Button></td>
//             </tr>
//           </tbody>
//         </table>
//         <Button style={{ backgroundColor: "#11669F" }}  onClick={() => this.singleEmployee()}>Add new Employee</Button>

//       </div>
//       </div>

//     );
//   }
// }
