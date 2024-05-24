import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './landlord.css';
import axios from 'axios';
import Formtable from "./components/Formtable";

axios.defaults.baseURL = 'http://localhost:8080';

export function Landlord() 
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
        dateOfBirth: "",
        question1: "",
        question2: ""
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
        dateOfBirth: "",
        question1: "",
        question2: "",
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
        const data = await axios.post('/landlords/create', formData);
        if(data.data.success){
            setAddSection(false);
            alert(data.data.message);
            getFeatchData()
        }
    }

    const getFeatchData = async() => {
        const data = await axios.get('/landlords');
        if(data.data.success){
            setDataList(data.data.data);
        }
    }

    useEffect(()=>{
        getFeatchData()
    },[])

    const handleDelete = async(id) => {
        const data = await axios.delete("/landlords/delete/"+id);
        if(data.data.success){
            getFeatchData();
        }
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        const data = await axios.put('/landlords/update', formDataEdit);
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
                dateOfBirth: "",
                question1: "",
                question2: "",
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

    return (
        <>
            <div className="container my-5">
                <button className="btn btn-primary" onClick={()=>setAddSection(true)} >Create Landlord</button>

                {
                    addSection &&(
                        <Formtable
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleclose={()=>setAddSection(false)}
                        rest={formData}
                        />
                    )
                }

                {
                    editSection &&(
                        <Formtable
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
                                <th>DateOfBirth</th>
                                <th>Question1</th>
                                <th>Question2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataList.map((el) =>{
                                    return(
                                        <tr>
                                            <td>{el.title === 'Other' ? el.otherTitle : el.title}</td>
                                            <td>{el.name}</td>
                                            <td>{el.surname}</td>
                                            <td>{el.phone}</td>
                                            <td>{el.email}</td>
                                            <td>{el.address1}</td>
                                            <td>{el.address2}</td>
                                            <td>{el.town}</td>
                                            <td>{el.city}</td>
                                            <td>{el.eircode}</td>
                                            <td>{el.dateOfBirth}</td>
                                            <td>{el.question1}</td>
                                            <td>{el.question2}</td>
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

export default Landlord;
