import React from "react";
import "./Sidebar.scss";

import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () =>{
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">
                    Saitama
                </span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}} >
                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}} >
                    <li>
                        <StoreIcon className="icon" />
                        <span>Product</span>
                    </li>
                    </Link>
                    <li>
                        <Inventory2Icon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <CircleNotificationsIcon className="icon" />
                        <span> Notficaytion</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Helth</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span>Log</span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USE</p>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LoginIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({tyle:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({tyle:"DARK"})}></div>
              
            </div>
        </div>
    )
}
export default Sidebar