import React, { useState, useEffect, useContext } from "react";
const ImageGallery = ({ images, thumbnail, productName }) => {
    const [selectedImage, setSelectedImage] = useState(thumbnail);

    const handleImageSelection = (imgId) => {
        setSelectedImage(imgId);
    };
    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={`${thumbnail}`}
                    alt={productName}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>

            {/* Thumbnail Gallery */}
            {images?.length > 0 && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                    {images?.map((image) => (
                        <button
                            key={image.id}
                            onClick={() => {
                                handleImageSelection(image.path);
                            }}
                            className={`flex-shrink-0 aspect-square w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 
                                ${
                                    selectedImage === image.path
                                        ? "border-blue-500 shadow-md"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <img
                                src={`${image.path}`}
                                alt={`${productName} view ${image.id + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
