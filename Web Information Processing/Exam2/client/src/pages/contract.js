import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './contract.css';
import axios from 'axios';
import Fromtablec from "./components/Fromtablec";
//import { set } from "mongoose";

axios.defaults.baseURL = 'http://localhost:8080';

export function Contract() 
{
    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [formData, setFormData] = useState({

    contractDate: "",
    address: "",
    tenant: "",
    landlordemail: "",
    fee:"",
    Doornumber: "",
    Contract: "",
    House: "",
        
    });

    const [formDataEdit, setFormDataEdit] = useState({

        contractDate: "",
        address: "",
        tenant: "",
        landlordemail: "",
        fee:"",
        Doornumber: "",
        Contract: "",
        House: "",
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
        const data = await axios.post('/contracts/create', formData);
        console.log(data);

        if(data.data.success){
            setAddSection(false);
            alert(data.data.message);
            getFeatchData()
        }
    }

    const getFeatchData = async() => {
        const data = await axios.get('/contracts');
        console.log(data);
        if(data.data.success){
            setDataList(data.data.data);
        }
    }
    useEffect(()=>{
        getFeatchData()
    },[])

    const handleDelete = async(id) => {
        const data = await axios.delete("/contracts/delete/"+id);

        if(data.data.success){
            getFeatchData();
        }
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        const data = await axios.put('/contracts/update', formDataEdit);
        if(data.data.success){
            setAddSection(false);
            alert(data.data.message);
            getFeatchData();
            setFormData({
                contractDate: "",
                address: "",
                tenant: "",
                landlordemail: "",
                fee:"",
                Doornumber: "",
                Contract: "",
                House: "",
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
                <button className="btn btn-primary" onClick={()=>setAddSection(true)} >Create Contract</button>

                {
                    addSection &&(
                        <Fromtablec
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleclose={()=>setAddSection(false)}
                        rest={formData}
                        />
                    )
                }
                {

                    editSection &&(
                        <Fromtablec
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
                                <th>contractDate</th>
                                <th>Tenant</th>
                                <th>Address</th>
                                <th>LandLordeMail</th>
                                <th>Fee</th>
                                <th>Doornumber</th>
                                <th>Contract</th>
                                <th>House Type</th>                                
                            </tr>
                        </thead>
                        <tbody>



                            {
                                dataList.map((el) =>{
                                    return(
                                        <tr>
                                            <td>{el.contractDate}</td>
                                            <td>{el.address}</td>
                                            <td>{el.tenant}</td>
                                            <td>{el.landlordemail}</td>
                                            <td>{el.fee}</td>
                                            <td>{el.Doornumber}</td>
                                            <td>{el.Contract}</td>
                                            <td>{el.House}</td>
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

export default Contract;