import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline';

const ProductManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const products = [
    {
      id: 1,
      name: 'Plastic Bottle Lamp',
      description: 'Beautiful lamp made from recycled plastic bottles with LED lighting',
      submittedBy: 'Anita Sharma',
      submissionDate: '2024-01-15',
      status: 'pending',
      category: 'Home Decor',
      materials: 'Plastic bottles, LED lights, paint',
      points: 10,
      images: ['image1.jpg', 'image2.jpg'],
      featured: false
    },
    {
      id: 2,
      name: 'Tire Garden Planter',
      description: 'Colorful garden planter created from old car tires',
      submittedBy: 'Rajesh Kumar',
      submissionDate: '2024-01-14',
      status: 'approved',
      category: 'Garden & Plants',
      materials: 'Car tires, paint, drainage materials',
      points: 15,
      images: ['image3.jpg'],
      featured: true
    },
    {
      id: 3,
      name: 'Cardboard Storage Box',
      description: 'Organized storage solution from cardboard boxes',
      submittedBy: 'Maya Patel',
      submissionDate: '2024-01-13',
      status: 'rejected',
      category: 'Storage & Organization',
      materials: 'Cardboard boxes, fabric, glue',
      points: 8,
      images: ['image4.jpg'],
      featured: false,
      rejectionReason: 'Insufficient documentation of creation process'
    },
    {
      id: 4,
      name: 'Denim Tote Bag',
      description: 'Stylish tote bag upcycled from old jeans',
      submittedBy: 'Priya Singh',
      submissionDate: '2024-01-12',
      status: 'approved',
      category: 'Fashion',
      materials: 'Old jeans, zippers, fabric handles',
      points: 12,
      images: ['image5.jpg', 'image6.jpg'],
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (activeTab === 'all') return true;
    return product.status === activeTab;
  });

  const approveProduct = (productId: number) => {
    console.log('Approving product:', productId);
  };

  const rejectProduct = (productId: number, reason: string) => {
    console.log('Rejecting product:', productId, 'Reason:', reason);
  };

  const featureProduct = (productId: number) => {
    console.log('Featuring product:', productId);
  };

  const tabs = [
    { id: 'pending', label: 'Pending Approval', count: products.filter(p => p.status === 'pending').length },
    { id: 'approved', label: 'Approved', count: products.filter(p => p.status === 'approved').length },
    { id: 'rejected', label: 'Rejected', count: products.filter(p => p.status === 'rejected').length },
    { id: 'all', label: 'All Products', count: products.length }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#333333]">Product Management</h1>
          <p className="text-[#888888] mt-2">Review and manage uploaded eco-friendly products</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-lg">
            <span className="font-medium">{products.filter(p => p.status === 'pending').length}</span>
            <span className="ml-2 text-sm">Pending Review</span>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#4CAF50] text-white'
                  : 'bg-[#f5fff7] text-[#333333] hover:bg-[#B4E197]'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl p-6 hover:bg-[#f5fff7] transition-colors duration-200"
            >
              {/* Product Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-[#333333] text-lg">{product.name}</h3>
                    {product.featured && (
                      <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#888888] mb-2">
                    <span>by {product.submittedBy}</span>
                    <span>{product.submissionDate}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    product.status === 'approved' ? 'bg-green-100 text-green-600' :
                    product.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-3 mb-4">
                <p className="text-sm text-[#333333]">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-[#333333]">Category:</span>
                    <p className="text-[#888888]">{product.category}</p>
                  </div>
                  <div>
                    <span className="font-medium text-[#333333]">Points:</span>
                    <p className="text-[#4CAF50] font-semibold">{product.points}</p>
                  </div>
                </div>

                <div>
                  <span className="font-medium text-[#333333] text-sm">Materials Used:</span>
                  <p className="text-[#888888] text-sm">{product.materials}</p>
                </div>

                {product.status === 'rejected' && product.rejectionReason && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <span className="font-medium text-red-700 text-sm">Rejection Reason:</span>
                    <p className="text-red-600 text-sm mt-1">{product.rejectionReason}</p>
                  </div>
                )}
              </div>

              {/* Images */}
              <div className="mb-4">
                <div className="flex gap-2">
                  {product.images.map((image, idx) => (
                    <div key={idx} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">IMG {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <EyeIcon className="w-4 h-4" />
                  Preview
                </motion.button>

                {product.status === 'pending' && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => approveProduct(product.id)}
                      className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      <CheckIcon className="w-4 h-4" />
                      Approve
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => rejectProduct(product.id, 'Quality concerns')}
                      className="flex items-center gap-1 px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      <XMarkIcon className="w-4 h-4" />
                      Reject
                    </motion.button>
                  </>
                )}

                {product.status === 'approved' && !product.featured && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => featureProduct(product.id)}
                    className="flex items-center gap-1 px-3 py-2 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  >
                    <StarIcon className="w-4 h-4" />
                    Feature
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">No products found</h3>
            <p className="text-[#888888]">No products match the current filter criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductManagement;