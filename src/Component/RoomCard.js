import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pageee() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            let response = await axios.get("http://localhost:4000/user/Rooms");
            // Assuming response.data.fetch is an array of room objects
            setCategoryList(response.data.fetch || []);
            console.log(response.data.fetch); // Check the data structure
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <h1>Welcome to Room Nest Hub.com</h1>
                <p>Your one-stop destination for finding the perfect home. Explore our listings and find your dream home today!</p>
                <div className="row">
                    {categoryList.map((room, index) => (
                        <div className="col-md-4 mt-3" key={index}>
                            <div className="card">
                                <img src={room.image || "default-image-url"} height={250} className="card-img-top" alt={`Room ${index}`} />
                                <div className="card-body">
                                    <h5 className="card-title">Price: {room.price}</h5>
                                    <button className="btn btn-primary">Room Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Pageee;
