import React,{PureComponent} from 'react'
import jsPDF from 'jspdf';
//import { Button } from 'react-bootstrap/lib/InputGroup';
import PDF from './INVOICE'

export default class PdfGenerate extends PureComponent{

constructor(props){
    super(props);
    this.state={

    };
    
}
isPdfGenerator=()=>{

    var doc= new jsPDF('p','pt');
    doc.text('<PDF />');
    doc.output(<PDF />);
    doc.setFont('courier');
    doc.setFontType('normal');
    doc.text(20,30,"this is text with Courier font");
    doc.save("generated.pdf")
}
render(){


    return(
        <button onClick={this.isPdfGenerator}>Generate PDF</button>
    )
}
}