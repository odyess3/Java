import React from 'react'
import "../contract.css"

const Formtablec = ({handleSubmit,handleChange,handleclose,rest}) => {
        return (

        <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="btn btn-danger close-btn" onClick={handleclose}>close</div>

            <label htmlFor="contractDate">ContractDate:</label>
            <input type="date" id="contractDate" name="contractDate" onChange={handleChange} value={rest.contractDate} ></input>

            <label htmlFor="address"> Address </label>
            <input type="text" id="address" name="address" onChange={handleChange} value={rest.name} required></input>

            <label htmlFor="tenant">tenant:</label>
            <input type="text" id="tenant" name="tenant" onChange={handleChange} value={rest.tenant} required></input>

            <label htmlFor="landlordemail">LL Email:</label>
            <input type="text" id="landlordemail" name="landlordemail" onChange={handleChange} value={rest.landlordemail} required></input>

            <label htmlFor="fee">Fee</label>
            <input type="number" id="fee" name="fee" onChange={handleChange} value={rest.fee} required></input>

            <label htmlFor="Doornumber">Doornumber:</label>
            <input type="number" id="Doornumber" name="Doornumber" onChange={handleChange} value={rest.Doornumber} required></input>

            <label htmlFor="Contract">contract</label>
            <select id="Contract" name="Contract" onChange={handleChange} value={rest.Contract}>
            <option value="Month">Apartment</option>
            <option value="Year">Semi-Detached</option>
            <option value="Perman">Detached</option>
            <option value="Other">Other</option>
            </select>
            {rest.houseType === 'Other' && (
            <div>
                <label htmlFor="otherHouseType">Specify:</label>
                <input type="text" id="otherHouseType" name="otherHouseType" onChange={handleChange} value={rest.otherContract} />
            </div>
)}

            <label htmlFor="House">House Type:</label>
            <select id="House" name="House" onChange={handleChange} value={rest.House}>
            <option value="Apartment">Apartment</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Detached">Detached</option>
            <option value="Other">Other</option>
            </select>
            {rest.houseType === 'Other' && (
            <div>
                <label htmlFor="otherHouseType">Specify:</label>
                <input type="text" id="otherHouseType" name="otherHouseType" onChange={handleChange} value={rest.otherHouseType} />
            </div>
)}


            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    </div>

    
    ) 
}

export default Formtablec