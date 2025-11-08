import React, { useState } from "react";
import { createPortal } from "react-dom";

function LoginPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: "#fff",
      width: "350px",
      margin: "100px auto",
      padding:"30px",
      border:"solid 2px blue",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(37, 136, 202, 0.42)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      marginBottom: "20px",
      color: "#333",
    },
    label: {
      display: "block",
      textAlign: "left",
      margin: "10px 0 5px",
      fontSize: "14px",
      color: "#969ea4ff",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "2px solid #5778f0ff",
      borderRadius: "6px",
      outline: "none",
      transition: "border-color 0.3s ease",
      marginBottom: "10px",
    },
    button: {
      marginTop: "20px",
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      border: "none",
      color: "white",
      fontWeight: "bold",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    alert: {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#28a745",
      color: "white",
      padding: "15px 25px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(160, 243, 141, 0.73)",
      fontSize: "16px",
      animation: "fadeInOut 5s ease forwards",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>

        <label style={styles.label}>Email</label>
        <input type="email" style={styles.input} />

        <label style={styles.label}>Password</label>
        <input type="password" style={styles.input} />

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#869ce4ff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#061e8aff")}
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>

      {showMessage &&
        createPortal(
          <div style={styles.alert}>
            <h2 style={{ margin: 0, fontSize: "16px" }}>Login successful</h2>
          </div>,
          document.getElementById("portal-root")
        )}
    </>
  );
}

export default LoginPage;
