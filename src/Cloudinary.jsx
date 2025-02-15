import { useState, useEffect } from "react";

function Cloudinary() {
    const [imageUrl, setImageUrl] = useState("");

    // Upload image to Cloudinary from sessionStorage
    const uploadToCloudinary = async () => {
        const file = sessionStorage.getItem("storedImage");
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "first-time-uploading-in-cloudinary"); 

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

    // Automatically upload image on component mount
    useEffect(() => {
        uploadToCloudinary();
    }, []);

    return (
        <div>
            {imageUrl && <img src={imageUrl} alt="Uploaded" width="200px" />}
        </div>
    );
}

export default Cloudinary;
