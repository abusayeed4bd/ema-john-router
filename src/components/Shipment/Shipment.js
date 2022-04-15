import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [adress, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);


    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAdressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, adress, email, phone };
        console.log(shipping);


    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Informatin</h2>
                <form onSubmit={handleCreateUser} >


                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="name">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>


                    <div className="input-group">
                        <label htmlFor="adress">Adress</label>
                        <input onBlur={handleAdressBlur} type="text" name="adress" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Adress">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;