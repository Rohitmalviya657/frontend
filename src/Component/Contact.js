import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Successfully Done');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
