import React, { useState, useMemo ,useContext  , useEffect, use, useReducer} from 'react';
import {
    variants,
    reviews,
    relatedProducts,
} from "../../data/productData";

import ImageGallery from '@/components/showProductPage/ImageGallery';
import StarRating from '@/components/showProductPage/StarRating';
import VariantSelector from '@/components/showProductPage/VariantSelector';
import AddToCartSection from '@/components/showProductPage/AddToCartSection';
import ReviewsSection from '@/components/showProductPage/ReviewsSection';
import { productDataReducer , initialProductData } from '@/reducers/inventoryFilterReducer';
// import RelatedProducts from '@/components/showProductPage/RelatedProducts';
import ProductReview from '../reviews/productReview';

function ProductDetails({ initProductData }) {
   const [product , dispatch] = useReducer(
       productDataReducer,
       initProductData,
       initialProductData
   )




    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedFit, setSelectedFit] = useState(null);
    const [images,setImages] = useState([]);
    const [thumbnail,setThumbnail] = useState(product?.thumbnail ?? '');
    // Get current variant based on selected color
    const currentVariant = useMemo(() => {
        return (
            variants.find((v) => v.color.id === selectedColor) || variants[0]
        );
    }, [selectedColor]);
    
    useEffect(()=>{
        if(product){
            const covers= Object.values(product?.covers);
            setImages(covers);
        }
    },[product])


    // console.log("product data in show page" , product);

    // Get available options for current color
    // const availableOptions = useMemo(() => {
    //     axios.post('/api/variant',{id:selectedColor.id} ,  {
            
    //     })
    // }, [selectedColor]);

    // Calculate average rating
    const averageRating = useMemo(() => {
        return (
            reviews.reduce((sum, review) => sum + review.rating, 0) /
            reviews.length
        );
    }, []);


    // fetch data related to a color
      const fetchColorRelatedData = async (color_id) => {
            try {
            // fetch filtered variant data
            const res = await axios.get("/variant", {
                params: { product_id: product?.id, color_id },
            });

            //overright the thumbnail for the cover related to the color
             setThumbnail(res.data.cover);
            // now overwrite product state
            dispatch({ type: "SET_PRODUCT", payload: res.data });

            } catch (err) {
            console.error(err);
            }
        };
    // Reset dependent selections when color changes

    const handleColorChange = (colorId) => {
        fetchColorRelatedData(colorId);
        setSelectedColor(colorId);
        // reset all other attributes
        setSelectedSize(null);
        setSelectedMaterial(null);
        setSelectedFit(null);
    };

    const handleAddToCart = (quantity) => {
        // console.log("Added to cart:", {
        //     product: product,
        //     variant: currentVariant,
        //     selectedSize,
        //     selectedMaterial,
        //     selectedFit,
        //     quantity,
        // });
        alert(`Added ${quantity} item(s) to cart!`);
    };




    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
                {/* Main Product Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Image Gallery */}
                    <div>
                        <ImageGallery
                            images={images}
                            thumbnail={thumbnail}
                            productName={product?.name ?? 'name is unavailable'}
                        />
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                {product?.name ?? 'name is unavailalble'}
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <StarRating rating={product?.rating_average ?? 0} />
                                <span className="text-gray-600">
                                    ({reviews.length} reviews)
                                </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {product?.description ?? 'No description available.'}
                            </p>
                        </div>

                        {/* Variant Selection */}
                        <VariantSelector
                            product={product}
                            variants={variants}
                            selectedColor={selectedColor}
                            selectedSize={selectedSize}
                            selectedMaterial={selectedMaterial}
                            selectedFit={selectedFit}
                            handleColorChange={handleColorChange}
                            onSizeChange={setSelectedSize}
                            onMaterialChange={setSelectedMaterial}
                            onFitChange={setSelectedFit}
                            availableSizes={product?.sizes ?? []}
                            availableMaterials={product?.materials ?? []}
                            availableFits={product?.fits ?? []}
                            availableColors={product?.colors ?? []}
                        />

                        {/* Add to Cart Section */}
                        <div className="border-t pt-6">
                            <AddToCartSection
                                stock={currentVariant.stock}
                                price={product?.price ?? 0}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mb-16">
                    <ReviewsSection
                        reviews={reviews}
                        averageRating={averageRating}
                    />
                </div>
               
                <ProductReview
                product_id={product.id} 
                
                />


                {/* Related Products */}
                {/* <RelatedProducts products={relatedProducts} /> */}
            </div>
        </div>
    );
};

export default ProductDetails;
