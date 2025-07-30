import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const categories = ['All', 'Home Decor', 'Accessories', 'Furniture', 'Fashion'];

const products = [
  {
    id: 1,
    name: 'Plastic Bottle Lamp',
    madeFrom: 'Plastic Bottles',
    price: 499,
    image: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Anita', avatar: '👩' },
    rating: 4.8,
    category: 'Home Decor',
    favorite: false
  },
  {
    id: 2,
    name: 'Denim Tote Bag',
    madeFrom: 'Old Jeans',
    price: 299,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Raj', avatar: '👨' },
    rating: 4.9,
    category: 'Fashion',
    favorite: false
  },
  {
    id: 3,
    name: 'Tire Garden Planter',
    madeFrom: 'Car Tires',
    price: 799,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Maya', avatar: '👩' },
    rating: 4.7,
    category: 'Home Decor',
    favorite: false
  },
  {
    id: 4,
    name: 'CD Wall Art',
    madeFrom: 'Old CDs',
    price: 349,
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Kumar', avatar: '👨' },
    rating: 4.6,
    category: 'Home Decor',
    favorite: false
  },
  {
    id: 5,
    name: 'Cardboard Shelf',
    madeFrom: 'Cardboard Boxes',
    price: 199,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Priya', avatar: '👩' },
    rating: 4.5,
    category: 'Furniture',
    favorite: false
  },
  {
    id: 6,
    name: 'Cork Board Organizer',
    madeFrom: 'Wine Corks',
    price: 449,
    image: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=400',
    seller: { name: 'Sam', avatar: '👨' },
    rating: 4.8,
    category: 'Accessories',
    favorite: false
  }
];

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [productList, setProductList] = useState(products);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProducts = productList.filter(product => 
    activeCategory === 'All' || product.category === activeCategory
  );

  const toggleFavorite = (id: number) => {
    setProductList(prev => 
      prev.map(product => 
        product.id === id ? { ...product, favorite: !product.favorite } : product
      )
    );
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333]">
            🌟 Made with Love. Reborn with Purpose.
          </h2>
          <div className="w-24 h-1 bg-[#B4E197] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#4CAF50] text-white shadow-lg'
                  : 'bg-[#F4F4F4] text-[#888888] hover:bg-[#B4E197] hover:text-[#333333]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
                >
                  {product.favorite ? (
                    <HeartSolidIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#333333] group-hover:text-[#4CAF50] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#888888]">
                    Made from: {product.madeFrom}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#4CAF50]">
                    ₹{product.price}
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-[#888888]">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#B4E197] rounded-full flex items-center justify-center">
                      {product.seller.avatar}
                    </div>
                    <span className="text-sm text-[#888888]">{product.seller.name}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#4CAF50] text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;