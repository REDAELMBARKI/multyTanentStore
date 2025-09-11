import React, { useState } from 'react';
import { Pencil, Upload, Star, X } from 'lucide-react';
import type { ProductType } from '../../../types/types.js';

type editinfoTypeProps = {
    product :ProductType
    ,
     openModal: () => void;
}

const EditProductinfo = ({product , openModal }:editinfoTypeProps) => {
 
  return (
         <>
           <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Details</h1>
                        <p className="text-gray-600">Manage your product information</p>
                        </div>
                        <button 
                        onClick={openModal}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                        >
                        <Pencil size={16} />
                        Edit
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Thumbnail Section */}
                        <div className="lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Product Image
                        </label>
                        <div className="relative group cursor-pointer">
                            {product.thumbnail ? (
                            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                <img
                                src={product.thumbnail}
                                alt="Product thumbnail"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                <Upload className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                                </div>
                            </div>
                            ) : (
                            <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center bg-gray-50 hover:bg-gray-100">
                                <div className="text-center">
                                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                                <p className="text-sm text-gray-500">Upload Image</p>
                                </div>
                            </div>
                            )}
                            <input type="file" className="hidden" />
                        </div>
                        </div>

                        {/* Product Information */}
                        <div className="lg:col-span-2 space-y-6">
                        {/* Row 1 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium">
                                {product.name}
                            </div>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Brand
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                {product.brand}
                            </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                {product.category}
                            </div>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price ($)
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-semibold">
                                ${product.price}
                            </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                    >
                                    {tag}
                                    </span>
                                ))}
                                </div>
                            </div>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Rating
                            </label>
                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg">
                                <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={18}
                                        className={`${
                                        star <= product.rate
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                    />
                                    ))}
                                </div>
                                <span className="text-gray-900 font-medium">{product.rate}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    </div>
         </>

    
  )
}

export default EditProductinfo