import React, { useState } from "react";
import LoginPage from "./LoginPage";
import ImageGallery from "./ImageGallery";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="font-sans min-h-screen">
      {isLoggedIn ? (
        <ImageGallery />
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
