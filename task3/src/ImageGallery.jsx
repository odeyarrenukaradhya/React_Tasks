import React, { useEffect, useState } from "react";

const styles = {
  galleryContainer: {
    padding: "40px 20px",
     background: "linear-gradient(135deg, #ec2ee2ff, #1c62dbff)",
    minHeight: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#000003ff",
    marginBottom: "30px",
  },
  imageGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    width: "240px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "0.3s ease",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  cardFooter: {
    padding: "10px",
    fontSize: "14px",
    color: "#333",
    borderTop: "1px solid #f7aaf7ff",
  },
  message: {
    textAlign: "center",
    padding: "100px",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
};

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://picsum.photos/v2/list?page=3&limit=20");
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("❌ Error fetching images:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  if (loading)
    return <div style={styles.message}>Loading photos...</div>;

  if (error)
    return <div style={{ ...styles.message, color: "red" }}>
      Failed to load photos 😞: {error.message}
    </div>;

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.heading}>Photo Gallery</h1>
      <div style={styles.imageGrid}>
        {images.map((img) => (
          <div key={img.id} style={styles.card}>
            <img
              src={img.download_url}
              alt={`Photo by ${img.author}`}
              style={styles.image}
            />
            <div style={styles.cardFooter}>Author: {img.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
