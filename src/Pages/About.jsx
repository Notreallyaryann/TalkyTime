import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Layout from "../Components/Layout/Layout";

const About = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle button click and navigate to the home page
  const handleExploreClick = () => {
    navigate("/"); // Redirect to the home page (root path)
  };

  return (
    <Layout>
      <div
        className="content"
        style={{
          height: "75vh",
          margin: "30px",
          padding: "20px",
          backgroundColor: "#f9f9f9", // Subtle background color
          borderRadius: "8px", // Rounded corners for a soft look
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for a lifted effect
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#333", fontWeight: "bold" }}>
          About TalkyTime
        </h1>
        <hr
          style={{
            width: "80%",
            margin: "20px auto",
            borderColor: "#ccc",
            borderWidth: "1px",
          }}
        />
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "justify",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Welcome to <strong>TalkyTime</strong>, your go-to solution for seamless, high-quality video calls.
          Whether you're connecting with friends, family, or colleagues, our platform makes communication effortless and secure.
          With crystal-clear HD video, reliable real-time connections, and intuitive features like screen sharing and group calls,
          you can engage with anyone, anywhere, at any time.
          Designed to be user-friendly and adaptable, <strong>TalkyTime</strong> is perfect for both personal conversations and professional meetings.
          Our focus on security ensures that your calls remain private and encrypted, giving you peace of mind.
          Stay connected and collaborate effortlessly with <strong>TalkyTime</strong>, wherever you are, across any device.
        </p>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50", // Green color
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={handleExploreClick} // On click, redirect to home
          >
            Explore TalkyTime
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
