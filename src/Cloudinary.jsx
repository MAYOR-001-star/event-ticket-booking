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

