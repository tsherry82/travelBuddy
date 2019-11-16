import React, { Component } from 'react';
import Dashboard from "../components/dashboard/Dashboard";
import { Link, Route } from "react-router-dom";
import feed from "../components/Feed/feed";

// function Dashboardd (props) {
//    render () {
//     return (
//         <Dashboard></Dashboard>
//         <Feed></Feed>
        

//         )
//    }
   
// }


class DashboardPage extends Component {
  

    render() {
        return (
            <Dashboard></Dashboard>
          
            
        );
    }
}

export default DashboardPage;