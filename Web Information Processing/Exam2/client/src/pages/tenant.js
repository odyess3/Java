import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './tenant.css';
import axios from 'axios';
import Formtablet from "./components/Formtablet";
//import { set } from "mongoose";

axios.defaults.baseURL = 'http://localhost:8080';

export function Tenant() 
{
    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [formData, setFormData] = useState({

        title: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        town: "",
        city: "",
        eircode: "",
        
    });

    const [formDataEdit, setFormDataEdit] = useState({

        title: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        town: "",
        city: "",
        eircode: "",
        _id:""
    });
    
    const [dataList, setDataList] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        const data = await axios.post('/tenants/create', formData);
        console.log(data);

        if(data.data.success){
            setAddSection(false);
            alert(data.data.message);
            getFeatchData()
        }
    }

    const getFeatchData = async() => {
        const data = await axios.get('/tenants/');
        console.log(data);
        if(data.data.success){
            setDataList(data.data.data);
        }
    }
    useEffect(()=>{
        getFeatchData()
    },[])

    const handleDelete = async(id) => {
        const data = await axios.delete("/tenants/delete/"+id);

        if(data.data.success){
            getFeatchData();
        }
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        const data = await axios.put('/tenants/update', formDataEdit);
        if(data.data.success){
            setAddSection(false);
            alert(data.data.message);
            getFeatchData();
            setFormData({
                title: "",
                name: "",
                surname: "",
                phone: "",
                email: "",
                address1: "",
                address2: "",
                town: "",
                city: "",
                eircode: "",
            })
        }
    }

    const handleEditChange = async (e) => {
        const {name, value} = e.target;
        setFormDataEdit((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }

    const handleEdit = (el) => {
        setFormDataEdit(el);
        setEditSection(true);
    }

    console.log(dataList);

    return (
        <>
            <div className="container my-5">
                <button className="btn btn-primary" onClick={()=>setAddSection(true)} >Create Tenant</button>

                {
                    addSection &&(
                        <Formtablet
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleclose={()=>setAddSection(false)}
                        rest={formData}
                        />
                    )
                }
                {

                    editSection &&(
                        <Formtablet
                        handleSubmit={handleUpdate}
                        handleChange ={handleEditChange}
                        handleclose={()=>setEditSection(false)}
                        rest={formDataEdit}
                        />
                    )
                }
                

                <div className="text-center mb-5">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address1</th>
                                <th>Address2</th>
                                <th>Town</th>
                                <th>City</th>
                                <th>Eircode</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>


                            {
                                dataList.map((el) =>{
                                    return(
                                        <tr>
                                            <td>{el.title}</td>
                                            <td>{el.name}</td>
                                            <td>{el.surname}</td>
                                            <td>{el.phone}</td>
                                            <td>{el.email}</td>
                                            <td>{el.address1}</td>
                                            <td>{el.address2}</td>
                                            <td>{el.town}</td>
                                            <td>{el.city}</td>
                                            <td>{el.eircode}</td>
                                            <td>
                                            <button className="btn btn-edit" onClick={()=>handleEdit(el)}>Edit</button>
                                            <button className="btn btn-delete" onClick={()=>handleDelete(el._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Tenant;