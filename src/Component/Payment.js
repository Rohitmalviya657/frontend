import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhonePay from './Phonepay';
import Paytm from './Paytem';
// import Googlepay from './Googlepay';
import Googlepay from './Googlepay';
// import Razorpay from './Razorpay';
import Razorpay from './Rojapay';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const { roomid } = location.state || {};

    const handlePaymentSuccess = async () => {
        try {
            if (!roomid) {
                throw new Error('Room ID is missing');
            }

            const response = await axios.post('http://localhost:4000/user/payment', {
                amount,
                roomId: roomid,
            });

            if (response.status === 201) {
                alert('Payment successful');
                navigate('/');
            } else {
                alert('Payment failed');
            }
        } catch (err) {
            setError('Error processing payment: ' + (err.response?.data?.error || err.message));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePaymentSuccess();
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="bg-light p-4 rounded shadow-sm">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className="mb-4">Make a Payment</h2>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Amount:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <PhonePay amount={amount} onPaymentSuccess={handlePaymentSuccess} />
                        <Paytm amount={amount} onPaymentSuccess={handlePaymentSuccess} />
                        <Googlepay amount={amount} onPaymentSuccess={handlePaymentSuccess} />
                        <Razorpay amount={amount} onPaymentSuccess={handlePaymentSuccess} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
