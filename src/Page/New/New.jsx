import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import './New.scss';


const New = ({inputs, title}) =>{
    const [file, setFile] = useState("")
    console.log(file)
    return (
        <div className="new">
           <Sidebar/>
           <div className="newContainer">
            <Navbar/>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                <img src={file ? URL.createObjectURL(file) :
                     "https://xaydungannguyen.vn/wp-content/themes/consultix/images/no-image-found-360x260.png"} alt="" />
                </div>
                <div className="right">
                    <form>
                    <div className="formInput">
                            <label htmlFor="file">
                                Image:
                                <DriveFolderUploadOutlined className="icon"/>
                            </label>
                            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                        </div>
                        {inputs.map((input)=>(
                            <div className="formInput" key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                        </div>
                        ))}
                        
                       
                        <button>Send</button>
                    </form>
                </div>
            </div>
           </div>
        </div>
    )
}
export default New