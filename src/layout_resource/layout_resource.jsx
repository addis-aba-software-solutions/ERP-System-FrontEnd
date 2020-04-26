import Cover from "./../Assets/Trial.jpg";
const classes = {
  root: {
    display: 1,
  },
  signinForm: {},
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  main: {
    backgroundColor: "#11669F",
    height: "100vh",
    backgroundImage: `url(${Cover})`,
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 1,
    backgroundColor: "#11669F",
  },
  form: {
    padding: 10,
    paddingTop: 10,
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 10,
    backgroundColor: "#11669F",
    alignItems: "center",
    marginLeft: 115,
    width: 100,
    flex: 1,
    // marginBottom: 10
  },
};

export default classes;
