import React, { useEffect, useState } from "react"
import axois from "axios"
import { Link } from "react-router-dom"
import axios from "axios"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import 'bootstrap/dist/css/bootstrap.min.css';


const Basic = () =>
{
    
    const[search, setSearch] = useState("")
    const[basics, setbasic] = useState([])
    


    useEffect(() => {
        const fecthAllBasic = async ()=>{
            try
            {
                const res = await axois.get("http://localhost:8800/basic")
                setbasic(res.data);
            }catch(err)
            {
                console.log(err)
            }
        }
        fecthAllBasic()
    },[])

    const handleDelete = async (Bas_id)=>{
        try{
            await axios.delete("http://localhost:8800/basic/"+Bas_id)
            window.location.reload()
        }catch(err)
        {
            console.log(err)
        }
    }


    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase()); // Convert search term to lowercase for case-insensitive search
        };


    return (
        <div className="d-flex vh-100 bg-success justify-content-center align-items-center">
            <div className="w-80 bg-white rounded p-3">
                <h2>Basic Info</h2>
                <div className="d-flex justify-content-end">
                    <Link to ="/add" className="btn btn-success"> Add new Info</Link>
                </div>

                <Form>
                    <InputGroup className="my-3">
                        <Form.Control
                        type ="text"
                        onChange={handleSearch} 
                        value={search}
                        placeholder="Search"
                        />
                    </InputGroup>
                </Form>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Surname</th>
                            <th>Moblie</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {basics.filter((basic) => {
                        // Search only on First_Name
                        const searchLower = search.toLowerCase();
                        return basic.First_Name.toLowerCase().includes(searchLower);
                            }).map((basic) => (
                            <tr className="basic" key ={basic.Bas_id}>
                            <td>{basic.Title}</td>
                            <td>{basic.First_Name}</td>
                            <td>{basic.Surname}</td>
                            <td>{basic.Mobile}</td>
                            <td>{basic.Email}</td>
                            <td>
                                <button className="delete btn btn-sm btn-danger" onClick={() => handleDelete(basic.Bas_id)}>Delete</button>
                                <button className="update btn btn-sm btn-warning mx-2" ><Link to ={`/update/${basic.Bas_id}`}>Update</Link></button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Basic