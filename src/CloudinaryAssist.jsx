import { useState } from "react";
import fileInput from './assets/images/cloud-download.svg'

function CloudinaryAssist() {
    const [image, setImage] = useState(null);

    // Convert image to Base64 and store in sessionStorage
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            sessionStorage.setItem("storedImage", reader.result); // Save to sessionStorage
            setImage(reader.result); // Update state
        };

        if (file) {
            reader.readAsDataURL(file); // Convert to Base64
        }
    };

    return (
        <div className="cloudy">
            <label htmlFor="fileUpload" className="upload-button">
                <img src={fileInput}/>
                <h1 style={{textAlign: 'center', fontSize: '0.8rem', width: '10rem', fontFamily: 'Roboto'}}>Drag & drop or click to upload</h1>
            </label>
            <input
                type="file"
                id="fileUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
            />
            {image && <img src={image} alt="Stored" width="200px" />}
        </div>
    );
}

export default CloudinaryAssist;
