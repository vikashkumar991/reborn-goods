import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, XMarkIcon, EyeIcon } from '@heroicons/react/24/outline';

const UploadProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    tags: '',
    points: '',
    materials: ''
  });
  
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    'Home Decor',
    'Accessories', 
    'Furniture',
    'Fashion',
    'Garden & Plants',
    'Storage & Organization',
    'Art & Crafts'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      const fileName = e.dataTransfer.files[0].name;
      setUploadedFiles(prev => [...prev, fileName]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product submitted:', productData);
    // Handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-serif font-bold text-[#333333] mb-2">
          Upload Your Creation
        </h1>
        <p className="text-[#888888]">
          Share your upcycled product and inspire others in the community
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                placeholder="e.g., Plastic Bottle Lamp"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Category *
              </label>
              <select
                name="category"
                value={productData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Materials Used */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Materials Used *
              </label>
              <input
                type="text"
                name="materials"
                value={productData.materials}
                onChange={handleInputChange}
                placeholder="e.g., Plastic bottles, LED lights, paint"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Description *
              </label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleInputChange}
                placeholder="Describe your creation process, inspiration, and final result..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={productData.tags}
                onChange={handleInputChange}
                placeholder="e.g., eco-friendly, upcycled, handmade, creative"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>

            {/* Reward Points */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#333333]">
                Reward Points (Optional)
              </label>
              <input
                type="number"
                name="points"
                value={productData.points}
                onChange={handleInputChange}
                placeholder="Points for purchasing this creation"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-colors duration-300 shadow-lg"
            >
              Upload Product 🚀
            </motion.button>
          </form>
        </motion.div>

        {/* File Upload & Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Drag & Drop Upload */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-[#333333] mb-4">
              Upload Images/Videos
            </h3>
            
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-[#4CAF50] bg-[#f5fff7]' 
                  : 'border-gray-300 hover:border-[#4CAF50] hover:bg-[#f5fff7]'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <CloudArrowUpIcon className="w-12 h-12 text-[#888888] mx-auto mb-4" />
              <p className="text-[#333333] font-medium mb-2">
                Drag & drop your files here
              </p>
              <p className="text-sm text-[#888888] mb-4">
                or click to browse (PNG, JPG, MP4 up to 10MB)
              </p>
              <button
                type="button"
                className="px-6 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors duration-200"
              >
                Choose Files
              </button>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-medium text-[#333333]">Uploaded Files:</h4>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[#f5fff7] rounded-lg">
                    <span className="text-sm text-[#333333]">{file}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Live Preview */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <EyeIcon className="w-5 h-5 text-[#888888]" />
              <h3 className="text-lg font-semibold text-[#333333]">Live Preview</h3>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-[#f5fff7]">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-[#888888]">Image Preview</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#333333]">
                  {productData.name || 'Product Name'}
                </h4>
                <p className="text-sm text-[#888888]">
                  Made from: {productData.materials || 'Materials'}
                </p>
                <p className="text-sm text-[#333333]">
                  {productData.description || 'Product description will appear here...'}
                </p>
                {productData.category && (
                  <span className="inline-block px-2 py-1 bg-[#4CAF50] text-white text-xs rounded-full">
                    {productData.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UploadProduct;