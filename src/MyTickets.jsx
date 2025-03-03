import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Controllerr";
import Cloudinary from "./Cloudinary";
import barCode from "./assets/images/barcode.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MyTickets = () => {
    const { isTicketOpen, openEvents } = useGlobalContext();
    const pdfRef = useRef();

    const downloadPDF = () => {
    const input = pdfRef.current;

    // Temporarily hide unwanted UI elements
    const hideElements = document.querySelectorAll(".no-print");
    hideElements.forEach(el => el.style.display = "none");

    setTimeout(() => {
        html2canvas(input, { scale: 2, backgroundColor: null, useCORS: true }).then((canvas) => {
            hideElements.forEach(el => el.style.display = ""); // Restore UI

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 10;
            
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save("Ticket.pdf");
        });
        }, 500);
    };




    return (
        isTicketOpen && (
        <div
            className="h-full border-[#197686] border-1"
            style={{
            color: "white",
            margin: "4rem auto 0",
            borderRadius: "2rem",
            maxWidth: "35.7rem",
            }}
            ref={pdfRef}
        >
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <h1
                    style={{
                    marginBottom: "0.25rem",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    }}
                >
                    Your Ticket is Booked!
                </h1>
                <p
                    style={{
                    fontFamily: "Roboto",
                    fontWeight: "200",
                    }}
                >
                    Check your email for a copy or you can{" "}
                    <span
                    style={{
                        fontWeight: "700",
                        fontFamily: "Roboto",
                    }}
                    >
                    download
                    </span>
                </p>
            </div>

            <div
                className="center-text box"
                style={{ margin: "2rem 3.5rem -2px", padding: "2rem" }}
            >
                <div
                    className="border-[#197686] border-1"
                    style={{
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                    padding: "2rem",
                    }}
                >
                    <h2
                    style={{
                        fontFamily: "Road Rage, serif",
                        fontSize: "40px",
                    }}
                    >
                    Techember Fest ”25
                    </h2>
                    <p style={{ fontFamily: "Roboto", fontSize: "0.9rem" }}>
                    📍 04 Rumens road, Ikoyi, Lagos
                    </p>
                    <p style={{ fontFamily: "Roboto", fontSize: "0.9rem" }}>
                    📅 March 15, 2025 | 7:00 PM
                    </p>

                    {/* Cloudinary Image */}
                    <Cloudinary />

                    {/* Ticket Details */}
                    <div className="grid grid-cols-2 gap-2 border-t border-[#197686] pt-4 container">
                        <div
                            className="border-b border-r border-[#197686]"
                            style={{ padding: "1rem", textAlign: "start" }}
                        >
                            <h3 className="text-sm" style={{ color: "#197686" }}>
                            Name:
                            </h3>
                            <h2 style={{ marginTop: "1rem", fontFamily: "Roboto" }}>
                            {JSON.parse(sessionStorage.getItem("userData"))?.name}
                            </h2>
                        </div>
                <div
                    className="border-b border-[#197686]"
                    style={{ padding: "1rem", textAlign: "start" }}
                >
                    <h3
                    className="text-sm"
                    style={{ color: "#197686", fontFamily: "Roboto" }}
                    >
                    Email:
                    </h3>
                    <p
                    style={{
                        wordWrap: "break-word",
                        marginTop: "1rem",
                        fontFamily: "Roboto",
                    }}
                    >
                    {JSON.parse(sessionStorage.getItem("userData"))?.email}
                    </p>
                </div>
                <div
                    className="border-b border-r border-[#197686]"
                    style={{ padding: "1rem", textAlign: "start" }}
                >
                    <h3
                    className="text-sm"
                    style={{ color: "#197686", fontFamily: "Roboto" }}
                    >
                    Ticket Type:
                    </h3>
                    <h4 style={{ marginTop: "1rem", fontFamily: "Roboto" }}>
                    {sessionStorage.getItem("ticketType")}
                    </h4>
                </div>
                <div
                    className="border-b border-[#197686]"
                    style={{ padding: "1rem", textAlign: "start" }}
                >
                    <h3
                    className="text-sm"
                    style={{ color: "#197686", fontFamily: "Roboto" }}
                    >
                    Ticket for:
                    </h3>
                    <h4 style={{ marginTop: "1rem", fontFamily: "Roboto" }}>
                    {sessionStorage.getItem("numTickets")}
                    </h4>
                </div>
                <div className="col-span-2" style={{ padding: "1rem", textAlign: "start" }}>
                    <h3
                    className="text-sm"
                    style={{ color: "#197686", fontFamily: "Roboto" }}
                    >
                    Special request?
                    </h3>
                    <p style={{ marginTop: "1rem", fontFamily: "Roboto" }}>
                    {JSON.parse(sessionStorage.getItem("userData"))?.textarea ||
                        "No special requests"}
                    </p>
                </div>
                </div>
            </div>
            </div>

            {/* Barcode */}
            <div
            className="center-text box1"
            style={{ margin: "-2px 3.5rem 2rem", padding: "2rem" }}
            >
            <img src={barCode} alt="barcode" />
            </div>

            {/* Buttons */}
            <div className="flex justify-around items-center" style={{ marginBottom: "3rem" }}>
            <button
                className="btn-sub"
                style={{
                border: "2.5px groove #197686",
                borderRadius: "0.8rem",
                background: "transparent",
                color: "#197686",
                }}
                onClick={() => openEvents()}
            >
                Book Another Ticket
            </button>
            <button
                className="btn-sub"
                style={{
                border: "2.5px solid #197686",
                borderRadius: "0.8rem",
                backgroundColor: "#197686",
                }}
                onClick={downloadPDF}
            >
                Download Ticket
            </button>
            </div>
        </div>
        )
    );
};

export default MyTickets;
