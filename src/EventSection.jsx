import React, { useState } from "react";
import { useGlobalContext } from "./Controllerr";
import CloudinaryAssist from "./CloudinaryAssist";
import { FaEnvelope } from "react-icons/fa";

const EventSection = () => {
    const { openTicket, isEventSectionOpen, openEvents } = useGlobalContext();
    const [formData, setFormData] = useState({ name: "", email: "", textarea: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const storedImage = sessionStorage.getItem("storedImage");
        
        if (!storedImage || storedImage === "null") {
            alert("Please upload your image.");
            return;
        }


        if (formData.name && formData.email) {
            // Ensure textarea has a default value if empty
            const userData = {
                name: formData.name,
                email: formData.email,
                textarea: formData.textarea.trim() || "" // Store empty string if no value
            };

            // Store user data in sessionStorage
            sessionStorage.setItem("userData", JSON.stringify(userData));

            // Call openTicket from global context
            openTicket();

            console.log("Form Submitted:", userData); // Debugging
            setErrorMessage(""); // Clear previous error messages
        } else {
            setErrorMessage("Please fill in required fields.");
        }
    };

    const handleCancel = () => {
        setFormData({ name: "", email: "", textarea: "" });
        setErrorMessage("");
        openEvents();
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
                        <h1 style={{color: 'white', fontSize: '0.8rem', marginBottom: '3rem', fontFamily: 'Roboto'}}>Upload Profile Photo</h1>
                        <div className="h-[160px] opacityyy">
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
                                Back
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
