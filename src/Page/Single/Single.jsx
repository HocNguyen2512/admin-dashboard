import React from "react";
import './Single.scss';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

const Single = () =>{
    return (
        <div className="single">
           <Sidebar/>
           <div className="singleContainer">
            <Navbar/>
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://i1.sndcdn.com/avatars-000299868797-urkzpd-t500x500.jpg" 
                        alt="" className="itemImg" 
                        />
                        <div className="details">
                            <h1 className="itemTitle">Jame Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">Jamedoe@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">phone:</span>
                                <span className="itemValue">098888888</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">Nguyen xa-Minh Khai</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">VietNam</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart  aspect={ 3 / 1} title="User Spending (Last 6 Monthss)" />
                </div>
            </div>
            <div className="bottom">
               <h1 className="title">Last Transactions</h1>
                <List/>
            </div>
           </div>
        </div>
    )
}
export default Single