import React from 'react'
import { ProductCard } from './ProductCard.jsx';
import EditProductinfo from '@/components/addProductPartials/editproduct/EditProductinfo';
import VariantsRetraived from '@/components/addProductPartials/editproduct/VariantsRetraived';
import type { VariantType } from '../../types/types.js';

function edit() {
    const product = {
      name: 'Premium Wireless Headphones',
      brand: 'AudioTech',
      category: ['Electronics'],
      tags: ['wireless, premium, noise-cancelling'],
      price: 299.99,
      rate: 4.8,
      thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  
    const variants:VariantType[] = [
      {
        id: 1,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Midnight Black',
        material: ['Premium Leather'],
        fit: ['Over-ear'],
        size: ['Large']
      },
      {
        id: 2,
        image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Space Gray',
        material: ['Aluminum'],
        fit: ['Over-ear'],
        size: ['Medium']
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Pearl White',
        material: ['Soft-touch Plastic'],
        fit: ['On-ear'],
        size:[ 'Small']
      }
    ];
  
  return (
    <div>
      <EditProductinfo product={product} />
      <VariantsRetraived variants={variants} />
        
        {/* Save Button */}
      <div className="text-right">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
      </div>
    </div>
  )
}

export default edit