import React , {useState} from 'react'
import EditProductinfo from '../../components/addProductPartials/editproduct/EditProductinfo.js';
import VariantsRetraived from '../../components/addProductPartials/editproduct/VariantsRetraived.js';


import type { VariantType } from '../../types/types.js';
import EditinfoModel from '../../components/addProductPartials/editproduct/editinfoModel.js';

function edit() {
  
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Placeholder data

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const product = {
      name: 'Premium Wireless Headphones',
      brand: 'AudioTech',
      category: ['Electronics'],
      tags: ['wireless ' , 'premium' , 'noise-cancelling'],
      price: 299.99,
      rate: 4.8,
      thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  
    const variants:VariantType[] = [
      {
        id: 1,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Midnight Black',
        materials: [{id:1,name:'Premium Leather'}],
        fits: [{id:1,name:'Over-ear'}],
        sizes: [{id:1,name:'Large'}]
      },
      {
        id: 2,
        image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Space Gray',
        materials: [{id:2,name:'Aluminum Alloy'}],
        fits: [{id:2,name:'In-ear'}],
        sizes: [{id:2,name:'Medium'}]
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=200',
        color: 'Pearl White',
        materials: [{id:3,name:'Plastic Composite'}],
        fits: [{id:3,name:'On-ear'}],
        sizes:[ {id:3,name:'Small'} ]
      }
    ];
  
  return (
    <div>
      <EditProductinfo product={product} openModal={openModal} />
      <VariantsRetraived variants={variants} />
       {isModalOpen && (
             <EditinfoModel />

       )}
        {/* Save Button */}
      <div className="text-right">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
      </div>
    </div>
  )
}

export default edit