import React from 'react'
import type { VariantType } from '../../../types/types.js';

function VariantsRetraived({variants}:VariantType[]) {
  return (
     <>
     
        {/* Variants Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Variants</h2>
            <p className="text-gray-600">Available variations of this product</p>
          </div>

          <div className="space-y-4">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                      <img
                        src={variant.image}
                        alt={`${variant.color} variant`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">Color</span>
                      <p className="text-sm font-medium text-gray-900">{variant.color}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">Material</span>
                      <p className="text-sm text-gray-700">{variant.material}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">Fit</span>
                      <p className="text-sm text-gray-700">{variant.fit}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide block mb-1">Size</span>
                      <p className="text-sm text-gray-700">{variant.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     </>
  )
}

export default VariantsRetraived