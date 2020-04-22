// // import React from 'react';

// // import Button from '@material-ui/core/Button';
// // import TextField from '@material-ui/core/TextField';
// // import Dialog from '@material-ui/core/Dialog';
// // import DialogActions from '@material-ui/core/DialogActions';
// // import DialogContent from '@material-ui/core/DialogContent';
// // import DialogContentText from '@material-ui/core/DialogContentText';
// // import DialogTitle from '@material-ui/core/DialogTitle';

// // export default function FormDialog() {
// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
// //         Open form dialog
// //       </Button>
// //       <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
// //         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             To subscribe to this website, please enter your email address here. We will send updates
// //             occasionally.
// //           </DialogContentText>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="name"
// //             label="Email Address"
// //             type="email"
// //             fullWidth
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleClose} color="primary">
// //             Subscribe
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

//  class ResponsiveDialog extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={
//        open:true
//        }
//    }
//    componentWillMount(){
//        alert()
//  this.setState({
//      open:true
//  })
//    }
   

//    handleClose = () => {
//     this.setState({
//         open:!this.state.open,
//     })
//   };
// render(){
//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//         Open responsive dialog
//       </Button>
//       <Dialog
//         // fullScreen={fullScreen}
//         open={this.props.show && this.state.open}
//         onClose={this.handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//         <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Let Google help apps determine location. This means sending anonymous location data to
//             Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={this.handleClose} color="primary">
//             Disagree
//           </Button>
//           <Button onClick={this.handleClose} color="primary" autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
// }
// export default ResponsiveDialog



import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
