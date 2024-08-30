import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TenantHome.css';

function TenantHome() {
    const [catogorylist, setcategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            let response = await axios.get("http://localhost:4000/rooms/Rooms");
            setcategory(response.data.fetch);
        } catch (error) {
            console.log(error);
        }
    };

    const chunkArray = (array, chunkSize) => {
        return array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize);
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, []);
    };

    const roomsInRows = chunkArray(catogorylist, 4);

    const handleBookRoom = async (room) => {
        try {

            const { data: { order } } = await axios.post('http://localhost:4000/api/addroom', { amount: room.price * 100 });
            openRazorpay(order, room);
        } catch (error) {
            console.error('Error creating Razorpay order:', error);
        }

    };
    const openRazorpay = (order, room,) => {
        const options = {
            key: 'rzp_test_StX0f9E3xLkdGH', // Replace with your Razorpay key
            amount: order.amount,
            currency: 'INR',
            name: 'Fitness App',
            description: `Payment for ${room.price}`,
            order_id: order.id,
            handler: async (response) => {
                try {
                    // const token = localStorage.getItem('token'); // Retrieve the token
                    // console.log(token)
                    // await axios.post('http://localhost:5000/exercises/addmyexercises', {
                    //   headers: {
                    //     'Content-Type': 'application/json',
                    //     'tokenInput': token // Pass the token in the header
                    //   },

                    //   exerciseId: exercise.id,
                    //   razorpayPaymentId: response.razorpay_payment_id,
                    // });
                    const token = localStorage.getItem('token'); // Retrieve the token
                    console.log(token)

                    await axios.post('http://localhost:4000/api/addpay',
                        {
                            amount: room.price,
                            roomId: room.id,
                            razorpayPaymentId: response.razorpay_payment_id,
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'tokenInput': token// Pass the token in the header
                            }

                        });
                    alert('Exercise added to My Room!');
                } catch (error) {
                    console.error('Error adding exercise to My Exercises:', error);
                }
            },
            prefill: {
                name: 'User Name',
                email: 'user@example.com',
                contact: '9165920512',
            },
            notes: {
                address: 'User Address',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };



    return (
        <div className='home-container overlay' style={{}}>
            {roomsInRows.map((row, rowIndex) => (
                <div className="container mt-4" key={rowIndex}>
                    <div className="row">
                        {row.map((room, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={room.imgUrl} height={250} className="card-img-top" alt="Room" />
                                    <div className="card-body">
                                        <h5 className="card-title">Price: {room.price}</h5>
                                        <h5 className="card-title">Size: {room.size}</h5>
                                        <h5 className="card-title">Location: {room.location}</h5>
                                        <h5 className="card-title">Description: {room.description}</h5>
                                        <button className="btn btn-primary" onClick={() => handleBookRoom(room)}> Book Room </button>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TenantHome;
