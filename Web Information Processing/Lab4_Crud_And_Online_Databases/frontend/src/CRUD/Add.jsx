
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


const Add = () =>
{
    const [basic, setbasic] = useState({
        Title:"",
        First_Name:"",
        Surname:"",
        Mobile:null,
        Email:"",
    });

    const navigate  = useNavigate()

    const handleChange = (e) =>{
        setbasic((prev)=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try
        {
            
            await axios.post("http://localhost:8800/basic", basic)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }

    console.log(basic)
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="form w-50 bg white rounded p-3">
                
                    <h2>Add Info</h2>
                    <div className="mb-2" >
                        <input type="text" placeholder="Title" onChange={handleChange} name= "Title" className="form-control "  />
                    </div>
                    
                    <div className="mb-2">
                        <input type="text" placeholder="First_Name*" onChange={handleChange} name= "First_Name"  class="form-control is-invalid" />
                    </div>

                    <div className="mb-2">
                        <input type="text" placeholder="Surname*" onChange={handleChange} name= "Surname"  class="form-control is-invalid" />
                    </div>

                    <div className="mb-2">
                        <input type="number" placeholder="Mobile*" onChange={handleChange} name= "Mobile"  class="form-control is-invalid" />
                    </div>

                    <div className="mb-2">
                        <input type="text" placeholder="Email*" onChange={handleChange} name= "Email"  class="form-control is-invalid" />
                    </div>

                    <button className="btn btn-success" onClick={handleClick}>Add</button>
                
            </div>

        </div>
    )
}

export default Add