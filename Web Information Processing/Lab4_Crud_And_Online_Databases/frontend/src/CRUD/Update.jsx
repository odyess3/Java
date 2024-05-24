
import axios from "axios";
import React, { useEffect,useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const Update = () =>
{
    const [basic, setbasic] = useState({
        Title:"",
        First_Name:"",
        Surname:"",
        Mobile:null,
        Email:"",
    });



    const navigate  = useNavigate()
    const location = useLocation()

    const basicID = location.pathname.split("/")[2]

    console.log(location.pathname.split("/")[2])



            useEffect(() => {
            const fetchData = async () => {
                try {
                const response = await axios.get("http://localhost:8800/basic/" + basicID);
                setbasic(response.data);
                
                
                } catch (err) {
                console.log(err);
                }
            };
        
            fetchData();
          }, [basicID]); // Run fetchData when basicID changes
        


    const handleChange = (e) =>{
        setbasic((prev)=>({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try
        {
            await axios.put("http://localhost:8800/basic/" +basicID, basic)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }


    console.log(basic)
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="form w-50 bg white rounded p-3">
                
                    <h2>Update Info</h2>
                    <div className="mb-2">
                        <input type="text" placeholder="Title" onChange={handleChange} name= "Title" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <input type="text" placeholder="First_Name" onChange={handleChange} name= "First_Name" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <input type="text" placeholder="Surname" onChange={handleChange} name= "Surname" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <input type="number" placeholder="Mobile" onChange={handleChange} name= "Mobile" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <input type="text" placeholder="Email" onChange={handleChange} name= "Email" className="form-control" />
                    </div>

                    <button className="btn btn-success" onClick={handleClick}>Update</button>
                
            </div>

        </div>
    )
}

export default Update