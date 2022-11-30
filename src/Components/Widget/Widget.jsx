import React from "react";
import './Widget.scss';

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type})=>{
    let data;

    const amount =100;
    const diff = 20;

    switch(type){
        case "user":
        data={
            title:"USER",
            isMoney: false,
            link:"See all users",
            icon: <PersonOutlinedIcon className="icon" 
            style={{
                backgroundColor:"rgba(255, 0, 0, 0.2)",
                color:"crimson"
            }}
            />,
        };
        break;
        case "order":
            data={
                title:"order",
                isMoney: false,
                link:"View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon"
                style={{
                    backgroundColor:"rgba(0, 128, 0, 0.2)",
                    color:"green"
                }}
                />,
            };
        break;
        case "earning":
            data={
                title:"EARNING",
                isMoney: false,
                link:"View net eanings",
                icon: <MonetizationOnOutlinedIcon className="icon"
                style={{
                    backgroundColor:"rgba(9, 132, 227,1.0)",
                    color:"blue"
                }}
                />,
            };
        break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney: false,
                link:"See details ",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"
                style={{
                    backgroundColor:"rgba(108, 92, 231,1.0)",
                    color:"purple"
                }}
                />,
            }; 
        break;       
        default:
        break;
    }
    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"}{amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}


export default Widget