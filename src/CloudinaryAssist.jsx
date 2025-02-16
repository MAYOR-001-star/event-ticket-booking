import { useState } from "react";

function CloudinaryAssist() {
    const [image, setImage] = useState(null);

    // Convert image to Base64 and store in localStorage
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
        sessionStorage.setItem("storedImage", reader.result); // Save to localStorage
        setImage(reader.result); // Update state
        };

        if (file) {
        reader.readAsDataURL(file); // Convert to Base64
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Stored" width="200px" />}
        </div>
    );
}

export default CloudinaryAssist;
