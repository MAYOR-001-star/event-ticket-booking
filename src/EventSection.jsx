// import React, {useState, useEffect} from 'react'
// import { useGlobalContext } from './Controllerr' // Make sure this path is correct
// import CloudinaryAssist from './CloudinaryAssist'

// const EventSection = () => {
//     const {isEventSectionOpen} = useGlobalContext()
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [errors, setErrors] = useState({ email: "", password: "" });
//     const [isFormValid, setIsFormValid] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     useEffect(() => {
//         let newErrors = { email: "", password: "" };
    
//         // Email validation
//         if (!formData.email) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = "Invalid email format";
//         }
    
//         // Password validation
//         if (!formData.password) {
//             newErrors.password = "Password is required";
//         } else if (formData.password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters";
//         }
    
//         setErrors(newErrors);
    
//         // Check if form is valid
//         setIsFormValid(!newErrors.email && !newErrors.password);
//     }, [formData]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isFormValid) {
//             alert("Form submitted successfully!");
//         } else {
//             alert("Please fix the errors before submitting.");
//         }
        
//     };
//     return (
//         isEventSectionOpen && (
//             <div className='h-full border-[#197686] border-1' 
//                 style={{color: 'white', margin: '4rem auto 0', borderRadius: '2rem', maxWidth: '35.7rem'}}>
//                 <CloudinaryAssist />
//                 <div className="p-4 max-w-md mx-auto">
//                     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                         <div>
//                             <label className="block">Email:</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="border p-2 w-full"
//                             />
//                             {errors.email && <p className="text-red-500">{errors.email}</p>}
//                         </div>

//                         <div>
//                             <label className="block">Password:</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="border p-2 w-full"
//                             />
//                             {errors.password && <p className="text-red-500">{errors.password}</p>}
//                         </div>

//                         <div className='flex justify-around items-center' style={{marginBottom: '1rem'}}>
//                         <button onClick={(e) => e.preventDefault()} className='btn-sub' 
//                             style={{ border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo'}}>
//                             Cancel
//                         </button>
//                         <button className='btn-sub' 
//                             type="submit"
//                             disabled={!isFormValid}
//                             style={{border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo', background: '#24A0B5', color: 'white'}}>
//                             Submit
//                         </button>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     )
// }

// export default EventSection










import React, { useState } from "react";
import { useGlobalContext } from "./Controllerr";
import CloudinaryAssist from "./CloudinaryAssist";
import { FaEnvelope } from "react-icons/fa";

const EventSection = () => {
    const { openTicket, isEventSectionOpen } = useGlobalContext();
    const [formData, setFormData] = useState({ name: "", email: "", textarea: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (formData.name && formData.email) {
            // Store user data in localStorage
            localStorage.setItem("userData", JSON.stringify(formData));

            // Call openTicket from global context
            openTicket();

            console.log("Form Submitted:", formData); // Keep this for debugging
            setErrorMessage(""); // Clear any previous error messages
        } else {
            setErrorMessage("Please fill in required fields.");
        }
    };

    const handleCancel = () => {
        setFormData({ name: "", email: "", textarea: "" });
        setErrorMessage(""); // Clear any error messages on cancel
    };

    return (
        isEventSectionOpen && (
            <div
                className="h-full border-[#197686] border-1"
                style={{ color: "white", margin: "4rem auto 0", borderRadius: "2rem", maxWidth: "35.7rem" }}
            >
                {/* Header Section */}
                <div>
                    <div className="flex justify-between items-center" style={{ padding: "2.5rem 2.5rem 0.5rem 2.5rem" }}>
                        <h1 className="font-normal" style={{ fontWeight: "400" }}>
                            Attendee Details
                        </h1>
                        <p className="font-roboto" style={{ fontFamily: "Roboto", fontSize: "0.85rem" }}>
                            Step 2/3
                        </p>
                    </div>
                    <div className="progress-container1" style={{ maxWidth: "30rem", margin: "0.5rem auto" }}>
                        <div className="progress-bar1" id="progressBar"></div>
                    </div>
                </div>

                {/* Form Section */}
                <div
                    className="border-[#197686] border-1"
                    style={{ borderRadius: "2rem", margin: "2rem 3.5rem", padding: "2rem" }}
                >
                    <div
                        className="border-[#197686] border-1"
                        style={{ borderRadius: "1rem", marginBottom: "1rem", padding: "2rem" }}
                    >
                        <div className="bg-[rgba(255,255,255,20%)] h-[200px]">
                            <CloudinaryAssist />
                        </div>
                    </div>

                    <div className="progress-container1" style={{ maxWidth: "37rem", margin: "2rem auto 0 auto" }}></div>

                    {/* Form Start */}
                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div style={{ margin: "2rem 0" }}>
                            <label htmlFor="name">Enter your Name</label>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid #197686", borderRadius: "5px", padding: "0.5rem", marginTop: '0.5rem' }}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ width: "100%", border: "none", outline: "none", background: 'transparent', color: 'white' }}
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div style={{ margin: "2rem 0" }}>
                            <label htmlFor="email">Enter your Email*</label>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", border: "1px solid #197686", borderRadius: "5px", padding: "0.5rem", marginTop: '0.5rem' }}>
                                <FaEnvelope />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="hello@avioflagos.io"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ width: "100%", border: "none", outline: "none", background: 'transparent', color: 'white' }}
                                />
                            </div>
                        </div>

                        {/* Textarea Input */}
                        <div style={{ margin: "2rem 0" }}>
                            <label htmlFor="textarea">Special Request?</label>
                            <textarea
                                id="textarea"
                                name="textarea"
                                rows="4"
                                placeholder="Textarea"
                                value={formData.textarea}
                                onChange={handleChange}
                                style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem", border: "1px solid #197686", borderRadius: "5px", background: 'transparent', color: 'white', outline: 'none' }}
                            />
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <div style={{ color: 'red', marginBottom: '1rem' }}>{errorMessage}</div>
                        )}

                        {/* Buttons */}
                        <div className="flex justify-around items-center" style={{ marginBottom: "1rem", gap: "1rem" }}>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="btn-sub"
                                style={{ border: "2.5px groove #197686", borderRadius: "0.8rem", fontFamily: "JejuMyeongjo" }}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn-sub"
                                type="submit"
                                style={{
                                    border: "2.5px groove #197686",
                                    borderRadius: "0.8rem",
                                    fontFamily: "JejuMyeongjo",
                                    background: "#24A0B5",
                                    color: "white",
                                }}
                            >
                                Get My Free Ticket
                            </button>
                        </div>
                    </form>
                    {/* Form End */}
                </div>
            </div>
        )
    );
};

export default EventSection;
