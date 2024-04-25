import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Address.css';

const Address = ({ total }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        contact: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleEmailClick = () => {
        alert("Use the same Email as your login Email.");
    }

    const handleMakePayment = (e) => {
        e.preventDefault();
        // Check if any mandatory field is empty
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && formData[key] === '') {
                alert(`Please fill in the ${key.replace(/[A-Z]/g, ' $&').toLowerCase()} field.`);
                return; // Prevent form submission if any mandatory field is empty
            }
        }
        
        // Validate Pincode (6 digits)
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(formData.pincode)) {
            alert("Please enter a valid 6-digit Pincode.");
            return;
        }

        // Validate Mobile No. (10 digits)
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formData.contact)) {
            alert("Please enter a valid 10-digit Mobile No.");
            return;
        }

        // If all validations pass, navigate to the payment page
        navigate('/payment');
    }

    return (
        <div className="form-container">
            <div className="address-form">
                <h2>Address Form</h2>
                <form onSubmit={handleMakePayment}>
                    <div className="form-group">
                        <label htmlFor="name" className="label">
                            Name:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="name" name="name" className="input" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label">
                            Email:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="email" id="email" name="email" className="input" placeholder="Enter your email" value={formData.email} onClick={handleEmailClick} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address1" className="label">
                            Address Line 1:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="address1" name="address1" className="input" placeholder="Address Line 1" value={formData.address1} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address2" className="label">Address Line 2:</label>
                        <input type="text" id="address2" name="address2" className="input" placeholder="Address Line 2" value={formData.address2} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="label">
                            City:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="city" name="city" className="input" placeholder="City" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="label">
                            State:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="state" name="state" className="input" placeholder="State" value={formData.state} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="label">
                            Country:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="country" name="country" className="input" placeholder="Country" value={formData.country} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode" className="label">
                            Pin Code:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="pincode" name="pincode" className="input" placeholder="Pin Code" value={formData.pincode} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact" className="label">
                            Contact No.:
                            <span className="mandatory">*</span>
                        </label>
                        <input type="text" id="contact" name="contact" className="input" placeholder="Contact No." value={formData.contact} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button">Make Payment</button>
                    </div>
                </form>
                <div>
                    Total Price: Rs - {total}
                </div>
            </div>
        </div>
    );
}

export default Address;