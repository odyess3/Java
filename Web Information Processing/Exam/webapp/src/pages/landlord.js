import React from "react";
import { Link } from 'react-router-dom';


export function Landlord() 
{
    const [landlords, setLandlords] = React.useState([{
        Title: "rer", First_Name: "John", Surname: "Doe", Email: "qf", Mobile: "123" , homeAddress1: "qf", homeTown: "qf", homeCountyCity: "qf", homeEircode: "qf"
    }]);

    return(
        <div className=" ">
            <div className=" bg-white rounded p-3">
            <Link to="/createLL" className="btn btn-primary">Create</Link>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        landlords.map((landlord) => {
                            return <tr>
                                
                                <td>{landlord.Title}</td>
                                <td>{landlord.First_Name}</td>
                                <td>{landlord.Surname}</td>
                                <td>{landlord.Email}</td>
                                <td>{landlord.Mobile}</td>
                                <td>{landlord.homeAddress1}</td>
                                <td>{landlord.homeTown}</td>
                                <td>{landlord.homeCountyCity}</td>
                                <td>{landlord.homeEircode}</td>
                                <td>
                                <Link to="/updateLL" className="btn btn-success">Update</Link>
                                <button>Delete</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>  
        </div>
    </div>
    );
}