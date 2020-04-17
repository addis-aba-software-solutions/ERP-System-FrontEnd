import React from 'react'

class Div extends React.Component {
constructor(props){
  super(props);
  this.setState({
    Div:[{items: ''}]
  })
  this.manangeDiv = this.manangeDiv.bind(this);
}
manangeDiv(e,type){
  let array = this.state.array;
  if (type=='add') {
    //this line will duplicate the object of array and push it in to same array
    array.push(array[1]);
  }
  this.setState({
    array
  })
}
render(){
  return(
    <div>
      {/* Add button will increase array length by one, and Remove button will decrease array length by one */}
      <button onClick={(e)=>this.manangeDiv(e)}> add </button> 
      {
        //this map funtion will create dynamic loop on the basis of array length
        this.state.Div.map((index)=>{
          return(
            <div key={index}> Dynamic Div </div>
          );
        })
      }
    </div>
  );
}
}

export default Div;