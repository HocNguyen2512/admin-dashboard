import "./Datatable.scss";
import { DataGrid} from '@mui/x-data-grid';
import {userColumns, userRows} from "../../DataTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ()=>{
    const [data, setData] = useState(userRows)

    const handleDelete = (id)=>{
        setData(data.filter((item) => item.id !==id));
    };
    const actionColumn = [{ field:"action", headerName:"Action", width: 200, renderCell:(params)=>{
        return(
            <div className="cellAction">
                <Link to="/users/test" style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                </Link>
                <Link to="/">
                    <div className="deleteButton"
                    onClick={()=>handleDelete(params.row.id)}
                    >Delete</div>
                </Link>
            </div>
        )
    }}]
    return(
        <div className="dataTable">
            <div className="dataTableTitle">
                Add New User 
                <Link to="/users/new" style={{textDecoration:"none"}} className="add-new">
                    Add New
                </Link>
            </div>
            <DataGrid
            className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable