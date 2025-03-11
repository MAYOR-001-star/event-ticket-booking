import React from 'react';
import { useGlobalContext } from './Controllerr';

const AboutProject = () => {
    const { isAboutOpen } = useGlobalContext();
    
    return (
        isAboutOpen && (
            <div className='h-full border-[#197686] border-1 event about' 
            style={{color: 'white', borderRadius: '2rem'}}>
                <h2 style={{ margin: "1.5rem 0" }}>Event Ticket Booking UI - Open Source Practice Project</h2>

                <h3 style={{ margin: "1.5rem 0" }}>Overview</h3>
                <p>
                    This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone,
                    explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing
                    users to book event tickets quickly and efficiently.
                </p>
                <p>
                    The project consists of a three-step ticket booking flow, and developers can extend it further by integrating
                    payment solutions, user authentication (optional), and ticket validation systems.
                </p>

                <h3 style={{ margin: "1.5rem 0" }}>Flow & Features</h3>

                <h4 style={{ margin: "1.5rem 0" }}>🎟 Ticket Selection</h4>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>Users can browse available tickets (Free & Paid).</li>
                    <li>Ticket options are displayed in a list or card view.</li>
                    <li>For Free Tickets: Clicking <strong>"Get Free Ticket"</strong> proceeds to attendee details.</li>
                    <li>For Paid Tickets: Clicking <strong>"Purchase Ticket"</strong> would ideally open a payment modal.</li>
                </ul>

                <h4 style={{ margin: "1.5rem 0" }}>📝 Attendee Details Form</h4>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>Users input their Name, Email, and optional Phone Number.</li>
                    <li>Profile picture upload option with preview functionality.</li>
                    <li>Ticket summary is visible to ensure users review their details before submission.</li>
                </ul>

                <h4 style={{ margin: "1.5rem 0" }}>💳 Payment or Success Page</h4>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
                    <li>
                        If the ticket is paid, developers can integrate <strong>Stripe, Paystack, or Flutterwave</strong> to
                        process payments before showing the confirmation page.
                    </li>
                    <li>Upon successful booking, users should receive:</li>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>A visual ticket preview with a unique QR Code.</li>
                        <li>An option to download the ticket as PDF or save it to their device.</li>
                        <li>An email confirmation containing ticket details.</li>
                    </ul>
                </ul>

                <h3 style={{ margin: "1.5rem 0" }}>🚀 How to Build This</h3>

                <h4 style={{marginBottom: "1rem"}}>📌 Frontend (Next.js or React)</h4>
                <p><strong>Component Breakdown:</strong></p>
                <ul style={{ paddingLeft: "20px" }}>
                    <li><strong>TicketCard.tsx</strong> - Displays ticket details</li>
                    <li><strong>AttendeeForm.tsx</strong> - Captures user details</li>
                    <li><strong>PaymentModal.tsx</strong> - Handles payment processing</li>
                    <li><strong>SuccessScreen.tsx</strong> - Shows the final ticket preview</li>
                </ul>

                <p><strong>State Management:</strong> React's Context API, Zustand, or Redux (if needed).</p>
                <p><strong>File Handling:</strong> Users should be able to upload images (profile picture for ticket) using Firebase Storage, Cloudinary, or local preview with <code>URL.createObjectURL()</code>.</p>

                <h4 style={{ margin: "1.5rem 0" }}>🖥 Backend (Optional)</h4>
                <p>If persistence is required, a backend can be built using:</p>
                <ul style={{ paddingLeft: "20px" }}>
                    <li><strong>Node.js & Express</strong> or <strong>Firebase Functions</strong></li>
                    <li><strong>Database:</strong> MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</li>
                </ul>

                <h4 style={{ margin: "1.5rem 0" }}>💰 Payment Integration</h4>
                <p>For paid events, developers should integrate:</p>
                <ul style={{ paddingLeft: "20px" }}>
                    <li><strong>Stripe Checkout</strong> (for international transactions)</li>
                    <li><strong>Paystack or Flutterwave</strong> (for African users)</li>
                </ul>

                <h3 style={{ margin: "1.5rem 0" }}>📚 What You'll Learn</h3>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>File handling & validation (profile picture uploads).</li>
                    <li>Dynamic UI updates based on ticket selection.</li>
                    <li>Persisting bookings using local state or a backend.</li>
                    <li>Integrating payment gateways for ticket purchases.</li>
                    <li>Generating & validating QR Codes for event check-in (Advanced).</li>
                </ul>

                <h3 style={{ margin: "1.5rem 0" }}>❓ Need Help? Reach Out!</h3>
                <p>Contribute to the project or ask questions in the developer community.</p>


                <div className="flex justify-around items-center sub-btns" style={{ gap: "1rem", marginTop: "4rem" }}>
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
                        <a href='https://github.com/MAYOR-001-star/event-ticket-booking' style={{color: 'white'}}>Github Code</a>
                    </button>
                </div>
            </div>
        )
    );
};

export default AboutProject;