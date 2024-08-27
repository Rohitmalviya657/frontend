import React from 'react';

const Googlepay = ({ amount, onPaymentSuccess }) => {
    const initiatePayment = async (amount, method) => {
        try {
            const response = await fetch('http://localhost:4000/user/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, method }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Payment initiation failed:', errorData);
                return { success: false, error: errorData.error || 'Payment failed' };
            }

            const data = await response.json();
            return { success: data.success || false, data };

        } catch (error) {
            console.error('Payment initiation error:', error);
            return { success: false, error: 'Network error or server unreachable' };
        }
    };

    const handleClick = async () => {
        try {
            const paymentResponse = await initiatePayment(amount, 'Google Pay');
            if (paymentResponse.success) {
                onPaymentSuccess();
            } else {
                alert('Payment failed through Google Pay');
            }
        } catch (error) {
            console.error('Error processing Google Pay payment:', error);
            alert('Error processing Google Pay payment');
        }
    };

    return (
        <button type="button" className="btn btn-light" onClick={handleClick}>
            <img
                src="https://staticimg.amarujala.com/assets/images/2020/09/01/google-pay_1598928868.jpeg"
                alt="Google Pay"
                style={{ width: '100px', height: 'auto' }}
            />
        </button>
    );
};

export default Googlepay;
