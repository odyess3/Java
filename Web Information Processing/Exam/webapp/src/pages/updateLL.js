import React from "react";

export function UpdateLL() {
    return (
        <div className="">
            <div className="bg-white p-5 rounded">
                <form>
                    <h2>Update Landlord</h2>
                    <div className="mb-3">
                        <label for="name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label for="surname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="surname" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" />
                    </div>
                    <div className="mb-3">
                        <label for="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" />
                    </div>
                    <div className="mb-3">
                        <label for="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" />
                    </div>
                    <div className="mb-3">
                        <label for="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateLL;