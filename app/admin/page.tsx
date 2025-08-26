"use client"

import React, { useState } from 'react';
import { Download, Plus, X, Upload } from 'lucide-react';

const ProductAdminForm = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    category: 'rings',
    tags: [],
    images: []
  });

  const titleMap = {
    "for-her": "For Her",
    "for-him": "For Him",
    "new-in": "New In",
    "bestseller": "Bestsellers",
    "iconic": "Iconic Collection",
    "showcase": "Showcase",
    "rings": "Rings",
    "necklaces": "Necklaces",
    "earrings": "Earrings",
    "bracelets": "Bracelets",
    "pendants": "Pendants",
    "matching-sets": "Matching Sets",
    "gold": "Gold Jewelry",
    "silver": "Silver Jewelry",
    "pressed-flowers": "Pressed Flower Jewelry",
    "natural-elements": "Natural Elements",
    "resin": "Resin"
  };

  const availableTags = Object.keys(titleMap);
  const categories = ['rings', 'necklaces', 'earrings', 'bracelets', 'pendants'];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = [];
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageUrls.push({
          file: file,
          url: event.target.result,
          name: file.name
        });
        
        if (imageUrls.length === files.length) {
          setCurrentProduct(prev => ({
            ...prev,
            images: [...prev.images, ...imageUrls]
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setCurrentProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const toggleTag = (tag) => {
    setCurrentProduct(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const addProduct = () => {
    if (!currentProduct.id || !currentProduct.name || !currentProduct.price || 
        !currentProduct.description || currentProduct.tags.length === 0 || 
        currentProduct.images.length === 0) {
      alert('Please fill all required fields');
      return;
    }

    const product = {
      ...currentProduct,
      id: parseInt(currentProduct.id),
      price: parseFloat(currentProduct.price),
      images: currentProduct.images.map(img => `/${img.name}`)
    };

    setProducts([...products, product]);
    setCurrentProduct({
      id: '',
      name: '',
      price: '',
      description: '',
      category: 'rings',
      tags: [],
      images: []
    });
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const generateTSFile = () => {
    const tsContent = `// Products Configuration File
// Generated on ${new Date().toISOString()}

export interface Product {
  id: number
  name: string
  price: number
  images: string[]
  tags: string[]
  description: string
  category: string
}

export const products: Product[] = [
${products.map(product => `  {
    id: ${product.id},
    name: "${product.name}",
    price: ${product.price},
    images: ${JSON.stringify(product.images)},
    tags: ${JSON.stringify(product.tags)},
    description: "${product.description}",
    category: "${product.category}",
  }`).join(',\n')}
];

// Helper function to filter products by tag
export function getProductsByTag(tag: string): Product[] {
  return products.filter((product) => product.tags.includes(tag))
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const allTags = products.flatMap((product) => product.tags)
  return [...new Set(allTags)]
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}`;

    const blob = new Blob([tsContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadImages = () => {
    // Create instructions for image management
    const instructions = `IMAGE MANAGEMENT INSTRUCTIONS
==================================

1. Create a folder called 'product-images' on your computer
2. Save all uploaded images with their exact filenames as shown below
3. Copy these images to your website's /public folder
4. The generated TypeScript file already references the correct paths

IMAGE LIST:
${products.flatMap(p => p.images).map(img => `- ${img.replace('/', '')}`).join('\n')}

NEXT STEPS:
1. Download the TypeScript file using the "Download TS File" button
2. Replace your existing products.ts file with the downloaded one
3. Copy all images to your /public folder
4. Your website should now display all the new products!`;

    const blob = new Blob([instructions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image-management-instructions.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Management System</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Product Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Add New Product</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product ID *</label>
                  <input
                    type="number"
                    value={currentProduct.id}
                    onChange={(e) => setCurrentProduct({...currentProduct, id: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={currentProduct.price}
                    onChange={(e) => setCurrentProduct({...currentProduct, price: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 89.99"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Botanical Ring Collection"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  value={currentProduct.description}
                  onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                  placeholder="Describe your product..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select
                  value={currentProduct.category}
                  onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{titleMap[cat] || cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload images</p>
                  </label>
                </div>
                
                {currentProduct.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {currentProduct.images.map((img, index) => (
                      <div key={index} className="relative group">
                        <img src={img.url} alt="" className="w-full h-20 object-cover rounded-md" />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags * (Select at least 1)</label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                  {availableTags.map(tag => (
                    <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={currentProduct.tags.includes(tag)}
                        onChange={() => toggleTag(tag)}
                        className="rounded text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{titleMap[tag]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={addProduct}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Products List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-700">Products Added ({products.length})</h2>
              {products.length > 0 && (
                <div className="space-x-2">
                  <button
                    onClick={downloadImages}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Image Instructions</span>
                  </button>
                  <button
                    onClick={generateTSFile}
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download TS File</span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {products.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No products added yet</p>
              ) : (
                products.map((product, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600">ID: {product.id} | Price: ${product.price}</p>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.tags.map(tag => (
                            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {titleMap[tag]}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => removeProduct(index)}
                        className="text-red-500 hover:text-red-700 ml-4"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdminForm;