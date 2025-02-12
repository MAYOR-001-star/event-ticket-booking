import React, { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "first-time-uploading-in-cloudinary"); // Your upload preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dw7mncv8j/image/upload", // Your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);
      console.log("Uploaded Image URL:", data.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={fileHandler} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" width="200" />}
    </div>
  );
};

export default App;





// import { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required!";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required!";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format!";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required!";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // True if no errors
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault(); // Prevent default actions
//       handleSubmit();
//     }
//   };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <form
//       id="keyboard-form"
//       className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
//       onKeyDown={handleKeyPress} // Capture Enter & Backspace
//     >
//       {/* Name Field */}
//       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//         Name:
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50"
//         tabIndex="0"
//       />
//       {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//       {/* Email Field */}
//       <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
//         Email:
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50"
//         tabIndex="0"
//       />
//       {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//       {/* Message Field */}
//       <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
//         Message:
//       </label>
//       <textarea
//         id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50"
//         tabIndex="0"
//       />
//       {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

//       {/* Submit Button (Visible but Keyboard-Only) */}
//       <button
//         type="submit"
//         className="w-full mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onClick={(e) => e.preventDefault()} // Prevent mouse clicks
//         tabIndex="0"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default App;
