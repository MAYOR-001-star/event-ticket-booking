import { useState } from "react";
import fileInput from './assets/images/cloud-download.svg';

function CloudinaryAssist() {
    const [image, setImage] = useState(null);

    // Convert image to Base64 and store in sessionStorage
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) return; // Ensure it's an image

        const reader = new FileReader();
        reader.onloadend = () => {
            sessionStorage.setItem("storedImage", reader.result); // Save to sessionStorage
            setImage(reader.result); // Update state
        };
        reader.readAsDataURL(file); // Convert to Base64
    };

    return (
        <div className="cloudy">
            <label htmlFor="fileUpload" className="upload-button">
                <img src={fileInput} alt="Upload Icon" />
                <h1 style={{ textAlign: "center", fontSize: "0.8rem", width: "10rem", fontFamily: "Roboto" }}>
                    Drag & drop or click to upload
                </h1>
            </label>
            <input
                type="file"
                id="fileUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
                style={{ display: "none" }} // Hide input but keep it functional
            />
            {image && <img src={image} alt="Uploaded Preview" className="uploaded-image" />}
        </div>
    );
}

export default CloudinaryAssist;
