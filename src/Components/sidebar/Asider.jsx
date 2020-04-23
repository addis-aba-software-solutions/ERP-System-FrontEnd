import React from 'react';
import { Link } from "react-router-dom";



class Asider extends React.Component {
  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active" >
              <Link className="" to='/'>
                <i className="icon_house_alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_profile"></i>
                <span>Employe</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/add_employe">Add Employe</Link></li>
                <li><Link to="/all_employe">View Employe</Link></li>
              </ul>
            </li>
        
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>Finance</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/view">Task 1</Link></li>
                <li><Link to="/view">Task 2</Link></li>
                <li><Link to="/view">Task 3 </Link></li>
                <li><Link to="/view">Task 3 </Link></li>
              </ul>
            </li>
           
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>Sales</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/view">Task 1</Link></li>
                <li><Link to="/view">Task 2</Link></li>
                <li><Link to="/view">Task 3 </Link></li>
              </ul>
            </li>

            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>Logistics</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/view">Task 1</Link></li>
                <li><Link to="/view">Task 2</Link></li>
                <li><Link to="/view">Task 3 </Link></li>
              </ul>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>Inventory</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/add_item">Add Product</Link></li>
                <li><Link to="/view">Task 2</Link></li>
                <li><Link to="/add_item">Task 3 </Link></li>
              </ul>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>It</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/view">Add User</Link></li>
                <li><Link to="/view_account">View Users</Link></li>
              </ul>
            </li>

          </ul>
        </div>

      </aside>


    )
  }
}

export default Asider