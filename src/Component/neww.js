// import React, { useState } from "react";
// import axios from "axios";
// import './Auth.css'

// function Registration({ setActiveComponent }) {
//     const [registerData, setRegisterData] = useState({
//         username: '',
//         email: '',
//         contact: '',
//         password: '',
//         adharnumber: '',
//         type: '' // Holds the selected type (user or admin)
//     });

//     const handleRegisterChange = (e) => {
//         setRegisterData({
//             ...registerData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault(); // Prevent form submission to allow API request
//         alert(registerData.type);

//         const url = registerData.type === 'user' ?
//             'http://localhost:4000/user/signup' :
//             'http://localhost:4000/owner/signup';

//         try {
//             const response = await axios.post(url, registerData);
//             console.log(response);
//             alert('Registration successful!');
//         } catch (err) {
//             console.error(err);
//             alert('Registration failed.');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form className="auth-form" onSubmit={handleRegisterSubmit}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email address"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="contact"
//                     placeholder="Contact"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="adharnumber"
//                     placeholder="Adhar Number"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <select
//                     name="type" // Add name attribute to handle the change
//                     className="form-select form-select-sm"
//                     aria-label=".form-select-sm example"
//                     value={registerData.type}
//                     onChange={handleRegisterChange}
//                     required
//                 >
//                     <option value="" disabled>Select type</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>

//                 <button type="submit" className="auth-button">Sign Up</button>
//                 <hr />
//                 <button type="button" className="switch-link" onClick={() => setActiveComponent('login')}>
//                     Already have an account? Log in
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Registration;






//---------------------------try....................
// import React, { useState } from "react";
// import axios from "axios";
// import './Auth.css'

// function Registration({ setActiveComponent }) {
//     const [registerData, setRegisterData] = useState({
//         username: '',
//         email: '',
//         contact: '',
//         password: '',
//         adharnumber: '',
//         type: '' // Holds the selected type (user or admin)
//     });

//     const handleRegisterChange = (e) => {
//         setRegisterData({
//             ...registerData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault(); // Prevent form submission to allow API request
//         alert(registerData.type);

//         const url = registerData.type === 'user' ?
//             'http://localhost:3000/user/signup' :
//             'http://localhost:3000/admin/signup';

//         try {
//             const response = await axios.post(url, registerData);
//             console.log(response);
//             alert('Registration successful!');
//         } catch (err) {
//             console.error(err);
//             alert('Registration failed.');
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form className="auth-form" onSubmit={handleRegisterSubmit}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email address"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="contact"
//                     placeholder="Contact"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="adharnumber"
//                     placeholder="Adhar Number"
//                     onChange={handleRegisterChange}
//                     required
//                 />
//                 <select
//                     name="type" // Add name attribute to handle the change
//                     className="form-select form-select-sm"
//                     aria-label=".form-select-sm example"
//                     value={registerData.type}
//                     onChange={handleRegisterChange}
//                     required
//                 >
//                     <option value="" disabled>Select type</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>

//                 <button type="submit" className="auth-button">Sign Up</button>
//                 <hr />
//                 <button type="button" className="switch-link" onClick={() => setActiveComponent('login')}>
//                     Already have an account? Log in
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Registration;
