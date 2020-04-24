import React from "react";
import { Link } from "react-router-dom";
class Employee extends React.Component {
  state = {
    singleEmployee: [],
  };
  componentDidMount = () => {
    const employeId = this.props.location.state.employeeInfos;
    const req = fetch(`http://192.168.1.9:8000/api/v1/employe/${employeId}`);
    const res = req.json();
    this.setState({ singleEmployee: res.employeeInfo[0] });
    console.log(this.state.singleEmployee);
  };
  render() {
    const employeeInfos = this.state.singleEmployee;
    console.log(this.props);
    return (
      <div>
        {this.state.singleEmployee.length !== 0 && (
          <div>
            <div>
              <li>{employeeInfos.firstName}</li>
            </div>
            <button>
              <Link to="/UsersTable">Go Back</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Employee;
