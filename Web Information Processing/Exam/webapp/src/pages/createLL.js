import React, { useState } from "react";
import axios from "axios";

export function CreateLL() {
const [Title, setTitle] = useState('')
const [First_Name, setFirst_Name] = useState('')
const [Surname, setSurname] = useState('')
const [Email, setEmail] = useState('')
const [Mobile, setMobile] = useState('')
const [homeAddress1, sethomeAddress1] = useState('')
const [homeTown, sethomeTown] = useState('')
const [homeCountyCity, sethomeCountyCity] = useState('')
const [homeEircode, sethomeEircode] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createLL', {Title, First_Name, Surname, Email, Mobile, homeAddress1, homeTown, homeCountyCity, homeEircode})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="">
            <div className="bg-white p-5 rounded">
                <form onSubmit={onSubmit}>
                    <h2>Create Landlord</h2>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" 
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="name" 
                        onChange={(e) => setFirst_Name(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="surname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="surname" 
                        onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" 
                        onChange={(e) => setMobile(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" 
                        onChange={(e) => sethomeAddress1(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" 
                        onChange={(e) => sethomeTown(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" 
                        onChange={(e) => sethomeCountyCity(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" 
                        onChange={(e) => sethomeEircode(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
             </div>
        </div>
    );
}

export default CreateLL;