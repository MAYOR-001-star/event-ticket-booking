import React, {useState, useEffect} from 'react'
import { useGlobalContext } from './Controllerr' // Make sure this path is correct
import CloudinaryAssist from './CloudinaryAssist'

const EventSection = () => {
    const {isEventSectionOpen} = useGlobalContext()
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        let newErrors = { email: "", password: "" };
    
        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
    
        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
    
        setErrors(newErrors);
    
        // Check if form is valid
        setIsFormValid(!newErrors.email && !newErrors.password);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fix the errors before submitting.");
        }
        
    };
    return (
        isEventSectionOpen && (
            <div>
                <CloudinaryAssist />
                <div className="p-4 max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2"
                            disabled={!isFormValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    )
}

export default EventSection
