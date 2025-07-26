import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 45,
    children: [
      { id: '1-1', name: 'Smartphones', slug: 'smartphones', productCount: 15 },
      { id: '1-2', name: 'Laptops', slug: 'laptops', productCount: 12 },
      { id: '1-3', name: 'Headphones', slug: 'headphones', productCount: 18 },
    ]
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 120,
    children: [
      { id: '2-1', name: 'Men\'s Clothing', slug: 'mens-clothing', productCount: 45 },
      { id: '2-2', name: 'Women\'s Clothing', slug: 'womens-clothing', productCount: 55 },
      { id: '2-3', name: 'Accessories', slug: 'accessories', productCount: 20 },
    ]
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 80,
    children: [
      { id: '3-1', name: 'Furniture', slug: 'furniture', productCount: 35 },
      { id: '3-2', name: 'Decor', slug: 'decor', productCount: 25 },
      { id: '3-3', name: 'Garden', slug: 'garden', productCount: 20 },
    ]
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Gear for active lifestyle',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 65,
    children: [
      { id: '4-1', name: 'Fitness', slug: 'fitness', productCount: 25 },
      { id: '4-2', name: 'Outdoor Gear', slug: 'outdoor-gear', productCount: 20 },
      { id: '4-3', name: 'Sports Equipment', slug: 'sports-equipment', productCount: 20 },
    ]
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.',
    price: 1199,
    originalPrice: 1299,
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    subcategory: 'Smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    stockQuantity: 25,
    tags: ['smartphone', 'apple', 'premium', 'camera'],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Material': 'Titanium'
    },
    variants: [
      { id: 'color-1', name: 'Color', value: 'Natural Titanium', inStock: true },
      { id: 'color-2', name: 'Color', value: 'Blue Titanium', inStock: true },
      { id: 'color-3', name: 'Color', value: 'White Titanium', inStock: false },
      { id: 'storage-1', name: 'Storage', value: '256GB', price: 1199, inStock: true },
      { id: 'storage-2', name: 'Storage', value: '512GB', price: 1399, inStock: true },
      { id: 'storage-3', name: 'Storage', value: '1TB', price: 1599, inStock: true }
    ],
    featured: true,
    onSale: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    description: 'Supercharged by M3 Pro and M3 Max chips. Built for all the ways you work, play, and create.',
    price: 2499,
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    subcategory: 'Laptops',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 1523,
    inStock: true,
    stockQuantity: 12,
    tags: ['laptop', 'apple', 'professional', 'creative'],
    specifications: {
      'Display': '16.2" Liquid Retina XDR',
      'Chip': 'Apple M3 Pro',
      'Memory': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Battery': 'Up to 22 hours',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
    },
    variants: [
      { id: 'chip-1', name: 'Chip', value: 'M3 Pro', price: 2499, inStock: true },
      { id: 'chip-2', name: 'Chip', value: 'M3 Max', price: 3199, inStock: true },
      { id: 'memory-1', name: 'Memory', value: '18GB', inStock: true },
      { id: 'memory-2', name: 'Memory', value: '36GB', price: 2899, inStock: true }
    ],
    featured: true,
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality and all-day comfort.',
    price: 399,
    originalPrice: 449,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    subcategory: 'Headphones',
    brand: 'Sony',
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    stockQuantity: 45,
    tags: ['headphones', 'wireless', 'noise-canceling', 'premium'],
    specifications: {
      'Driver': '30mm',
      'Frequency Response': '4Hz-40kHz',
      'Battery Life': 'Up to 30 hours',
      'Charging': 'USB-C, Quick charge',
      'Connectivity': 'Bluetooth 5.2, NFC',
      'Weight': '250g'
    },
    variants: [
      { id: 'color-1', name: 'Color', value: 'Black', inStock: true },
      { id: 'color-2', name: 'Color', value: 'Silver', inStock: true }
    ],
    onSale: true,
    createdAt: '2024-01-12T11:30:00Z',
    updatedAt: '2024-01-19T13:20:00Z'
  },
  {
    id: '4',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, comfortable, and stylish cotton t-shirt perfect for everyday wear. Made from 100% organic cotton.',
    price: 29,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    subcategory: 'Men\'s Clothing',
    brand: 'EcoWear',
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    stockQuantity: 150,
    tags: ['t-shirt', 'cotton', 'casual', 'organic'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA',
      'Certification': 'GOTS Certified'
    },
    variants: [
      { id: 'size-1', name: 'Size', value: 'S', inStock: true },
      { id: 'size-2', name: 'Size', value: 'M', inStock: true },
      { id: 'size-3', name: 'Size', value: 'L', inStock: true },
      { id: 'size-4', name: 'Size', value: 'XL', inStock: false },
      { id: 'color-1', name: 'Color', value: 'White', inStock: true },
      { id: 'color-2', name: 'Color', value: 'Black', inStock: true },
      { id: 'color-3', name: 'Color', value: 'Navy', inStock: true }
    ],
    createdAt: '2024-01-08T14:15:00Z',
    updatedAt: '2024-01-17T10:30:00Z'
  },
  {
    id: '5',
    name: 'Modern Office Chair',
    description: 'Ergonomic office chair with lumbar support, adjustable height, and premium materials for all-day comfort.',
    price: 299,
    originalPrice: 399,
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home & Garden',
    subcategory: 'Furniture',
    brand: 'ComfortPlus',
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    stockQuantity: 28,
    tags: ['chair', 'office', 'ergonomic', 'furniture'],
    specifications: {
      'Material': 'Mesh back, fabric seat',
      'Weight Capacity': '300 lbs',
      'Height Range': '17"-21"',
      'Armrests': 'Adjustable',
      'Warranty': '5 years',
      'Assembly': 'Required'
    },
    variants: [
      { id: 'color-1', name: 'Color', value: 'Black', inStock: true },
      { id: 'color-2', name: 'Color', value: 'Gray', inStock: true },
      { id: 'color-3', name: 'Color', value: 'Blue', inStock: false }
    ],
    onSale: true,
    createdAt: '2024-01-05T16:20:00Z',
    updatedAt: '2024-01-16T12:10:00Z'
  },
  {
    id: '6',
    name: 'Wireless Fitness Tracker',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life.',
    price: 199,
    images: [
      'https://images.pexels.com/photos/1537986/pexels-photo-1537986.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1537987/pexels-photo-1537987.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sports & Outdoors',
    subcategory: 'Fitness',
    brand: 'FitTech',
    rating: 4.4,
    reviewCount: 1234,
    inStock: true,
    stockQuantity: 75,
    tags: ['fitness', 'tracker', 'health', 'wearable'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': 'Up to 7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Compatibility': 'iOS & Android',
      'Weight': '32g'
    },
    variants: [
      { id: 'color-1', name: 'Color', value: 'Black', inStock: true },
      { id: 'color-2', name: 'Color', value: 'Rose Gold', inStock: true },
      { id: 'color-3', name: 'Color', value: 'Silver', inStock: true },
      { id: 'band-1', name: 'Band', value: 'Sport', inStock: true },
      { id: 'band-2', name: 'Band', value: 'Leather', price: 229, inStock: true }
    ],
    featured: true,
    createdAt: '2024-01-14T08:45:00Z',
    updatedAt: '2024-01-21T15:30:00Z'
  }
];

export const featuredProducts = products.filter(product => product.featured);
export const saleProducts = products.filter(product => product.onSale);