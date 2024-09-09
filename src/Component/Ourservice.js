import React from 'react';
// import './ourservice.css';
import './new.css'

function OurServices() {
    return (
        <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <img src="https://www.shutterstock.com/image-photo/woman-putting-sight-room-rent-260nw-289730621.jpg" alt="Service 1" className="service-image" />
                    <h3 className="service-title">Room Rentals</h3>
                    <p className="service-description">
                        We offer a wide variety of rooms for rent, ensuring that you find the perfect place to call home.
                    </p>
                </div>
                <div className="service-card">
                    <img src="https://img.freepik.com/free-vector/family-moving-countryside-area-realtor-shows-townhouse-house-rent-booking-hose-online-best-rental-property-real-estate-services-concept-bright-vibrant-violet-isolated-illustration_335657-1129.jpg" alt="Service 2" className="service-image" />
                    <h3 className="service-title">Landlord Services</h3>
                    <p className="service-description">
                        We help landlords manage their properties with ease, offering tools to list, manage, and rent out rooms.
                    </p>
                </div>
                <div className="service-card">
                    <img src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg" alt="Service 3" className="service-image" />
                    <h3 className="service-title">Secure Payments</h3>
                    <p className="service-description">
                        Our secure payment gateway ensures that your transactions are safe, quick, and reliable.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
