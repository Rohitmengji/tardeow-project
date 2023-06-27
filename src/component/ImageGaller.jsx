import { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  // State for storing images and main image
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  // Fetch images when the component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Fetch images from the API
  const fetchImages = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const { data } = response;
      setImages(data.products);
      setMainImage(data.products[0].thumbnail);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle click on thumbnail image to update the main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      {/* Main Image */}
      <img
        src={mainImage}
        alt='Main Image'
        style={{ width: "500px", height: "380px", objectFit: "fill" }}
      />

      {/* Thumbnail Images */}
      <div
        className='mt-3'
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": {
            width: "6px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "3px",
            background: "#888",
          },
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
        }}
      >
        {/* Render thumbnail images */}
        {images.map((product, index) => {
          if (index < 8) {
            return (
              <img
                key={product.id}
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "50px", height: "50px", margin: "6px",cursor:'pointer' }}
                onClick={() => handleThumbnailClick(product.thumbnail)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
