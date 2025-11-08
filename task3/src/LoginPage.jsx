import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const styles = {
   container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #3351e8ff, #e42ee4ff)",
  },
  form: {
    backgroundColor: "#f0f7fcff",
    padding: "30px",
    width: "320px",
    border:"solid 2px white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #f459edff, #2575fc)",
    color: "white",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    boxShadow: "0 4px 10px rgba(37,117,252,0.3)",
    transition: "all 0.3s ease",
  },
  portal: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "linear-gradient(135deg, #45fe30ff, #247529ff)",
    color: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    animation: "pulse 1s infinite",
  },
};

function LoginPage({ onLoginSuccess }) {
  const [showMessage, setShowMessage] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    const root = document.getElementById("portal-root");
    if (root) setPortalRoot(root);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      onLoginSuccess();
    }, 1200);
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.title}>LoginPage</h2>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="enter your email id here" style={styles.input}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#8ea8ffff")}
             onMouseOut={(e) => (e.target.style.backgroundColor = "#404042ff")} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="enter password here" style={styles.input}
             onMouseOver={(e) => (e.target.style.backgroundColor = "#8ea8ffff")}
             onMouseOut={(e) => (e.target.style.backgroundColor = "#404042ff")} />
          </div>

          
           <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5f80ecff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#061e8aff")}
          onClick={handleLogin}
        >
          Submit
        </button>
        </form>
      </div>

      {showMessage && portalRoot &&
        createPortal(
          <div style={styles.portal}>
            Login successful!
          </div>,
          portalRoot
        )}
    </>
  );
}

export default LoginPage;
