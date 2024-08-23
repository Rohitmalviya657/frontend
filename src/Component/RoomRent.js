import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Pageee() {
    const [catogorylist, setcategory] = useState([]);

    useEffect(() => {
        loadcatogries();
    }, []);

    const loadcatogries = async () => {
        try {
            let response = await axios.get("http://localhost:4000/user/Rooms");
            setcategory(response.data.fetch); // Corrected this line to avoid spreading the array
        } catch (error) {
            console.log(error);
        }
    };

    const chunkArray = (array, chunkSize) => {
        return array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
            }

            resultArray[chunkIndex].push(item);

            return resultArray;
        }, []);
    };

    const roomsInRows = chunkArray(catogorylist, 3); // Adjust the chunk size as needed

    return (
        <>
            {roomsInRows.map((row, rowIndex) => (
                <div className="container mt-4" key={rowIndex}>
                    <div className="row">
                        {row.map((room, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src="https://marvel-b1-cdn.bc0a.com/f00000000266467/www.grandhomes.com/images/b2.jpg" height={250} className="card-img-top" alt="Feature 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Price: {room.price}</h5>
                                        <h5 className="card-title">Size: {room.size}</h5>
                                        <h5 className="card-title">Location: {room.location}</h5>
                                        <button className="btn btn-primary"> Book Room </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Pageee;
