import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSendMessageClick = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal when the user clicks close
  };

  return (
    <Layout>
      <div
        className="content"
        style={{
          height: "75vh",
          margin: "30px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#333", fontWeight: "bold" }}>
          Contact Us
        </h1>
        <hr
          style={{
            width: "80%",
            margin: "20px auto",
            borderColor: "#ccc",
            borderWidth: "1px",
          }}
        />
        <div style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6" }}>
          <h2>
            <strong>Phone:</strong> 9984934842
          </h2>
          <h2>
            <strong>Email:</strong>{" "}
            <a href="mailto:aryanpatel998493@gmail.com" style={{ color: "#4CAF50" }}>
              aryanpatel998493@gmail.com
            </a>
          </h2>
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <strong>Instagram:</strong>
            <a
              href="https://www.instagram.com/ri._.riiii"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                color: "#E4405F", // Instagram brand color
                fontSize: "1.5rem",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "10px" }} />
              ri._.riiii
            </a>
          </h2>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={handleSendMessageClick} // Show the modal
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", color: "#333", fontWeight: "bold" }}>
              Send Us a Message
            </h2>
            <form
              action="https://formspree.io/f/xpwpozyn"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <label htmlFor="name" style={{ fontSize: "1.2rem" }}>
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    padding: "20px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
              <label htmlFor="email" style={{ fontSize: "1.2rem" }}>
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    padding: "20px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>
              <label htmlFor="message" style={{ fontSize: "1.2rem" }}>
                Message
                <textarea
                  id="message"
                  name="message"
                  required
                  style={{
                    padding: "20px",
                    fontSize: "1rem",
                    borderRadius: "3px",
                    border: "1px solid #ccc",
                    minHeight: "150px",
                  }}
                />
              </label>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Send Message
              </button>
            </form>
            <button
              onClick={closeModal}
              style={{
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "15px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Contact;
