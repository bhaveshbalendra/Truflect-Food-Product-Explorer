# 🍽️ Food Product Explorer

A modern, responsive web application for exploring food products and categories using the OpenFoodFacts database. Built with React, TypeScript, Redux Toolkit Query, and Tailwind CSS.

![Food Product Explorer](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=for-the-badge&logo=typescript)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.5.0-purple?style=for-the-badge&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality

- **Browse Categories**: Explore 20+ food categories in a beautiful grid layout
- **Product Search**: Real-time search functionality with instant results
- **Category Products**: View products within specific food categories
- **Product Details**: Comprehensive product information including:
  - Product images with fallback handling
  - Nutrition grades (A-E) with color-coded badges
  - Eco-score ratings for environmental impact
  - Brand and category information
  - Ingredient lists with smart truncation

### 🎨 User Experience

- **Responsive Design**: Mobile-first approach, works on all devices
- **Loading States**: Smooth loading indicators for all async operations
- **Empty States**: Helpful messages when no results are found
- **Error Handling**: Graceful handling of missing images and failed requests
- **Modern UI**: Clean, modern design with hover effects and smooth transitions
- **Navigation**: Intuitive navigation between different views with back buttons

### 🔧 Technical Features

- **Type Safety**: Full TypeScript implementation with proper type definitions
- **State Management**: Redux Toolkit Query for efficient data fetching and caching
- **API Integration**: Seamless integration with OpenFoodFacts API
- **Performance**: Optimized rendering with proper React patterns
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/food-product-explorer.git
   cd food-product-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application in action!

## 📖 How to Use

### 🏠 Home Page - Category Browsing

- Browse through 20 different food categories displayed in a responsive grid
- Click on any category card to explore products within that category
- Each category shows the number of available products

### 🔍 Product Search

- Use the search bar at the top to find specific food products
- Search results display in real-time with product cards showing:
  - Product images
  - Nutrition and eco-score grades
  - Brand and category information
  - Ingredient lists

### 📦 Category Products

- Click on any category to view products within that category
- Navigate back to categories using the "Back to Categories" button
- Products are displayed in a responsive grid layout

### 🏷️ Product Information

Each product card displays:

- **Nutrition Grade**: Color-coded badges (A-E) indicating nutritional quality
- **Eco Score**: Environmental impact rating (A-E)
- **Brands**: Product manufacturer information
- **Categories**: Food category classifications
- **Ingredients**: Complete ingredient list with smart truncation

## 🛠️ Technology Stack

### Frontend Framework

- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript 5.6.2**: Full type safety and better developer experience
- **Vite 6.0.1**: Fast build tool and development server

### State Management

- **Redux Toolkit 2.5.0**: Efficient state management
- **RTK Query**: Powerful data fetching and caching solution

### Styling & UI

- **Tailwind CSS 3.4.16**: Utility-first CSS framework
- **Custom CSS**: Additional styling for enhanced UX
- **Responsive Design**: Mobile-first responsive layout

### Development Tools

- **ESLint**: Code linting and quality assurance
- **TypeScript ESLint**: TypeScript-specific linting rules
- **React Router DOM**: Client-side routing

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CategoryCard.tsx  # Category display card
│   ├── ProductCard.tsx   # Product display card
│   └── SearchBar.tsx     # Search input component
├── hooks/               # Custom React hooks
│   └── redux.ts         # Typed Redux hooks
├── pages/               # Page components
│   └── HomePage.tsx     # Main application page
├── store/               # Redux store configuration
│   ├── service/         # API service definitions
│   │   └── foodApi.ts   # OpenFoodFacts API integration
│   └── store.ts         # Store configuration
├── types/               # TypeScript type definitions
│   └── product.ts       # Product and category types
├── App.tsx              # Main app component
├── Layout.tsx           # Layout wrapper component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🌐 API Integration

This application uses the **OpenFoodFacts API**, a collaborative database of food products from around the world.

### Endpoints Used

- `GET /categories.json` - Fetch all food categories
- `GET /cgi/search.pl` - Search for products by keyword
- `GET /category/{category}.json` - Get products by category

### Data Sources

- **Product Information**: Names, brands, categories, ingredients
- **Nutrition Data**: Nutrition grades and scores
- **Environmental Data**: Eco-score ratings
- **Images**: Product photos and packaging images

## 🎨 Design System

### Color Palette

- **Primary**: Blue tones for interactive elements
- **Success**: Green for high nutrition/eco grades
- **Warning**: Yellow/Orange for medium grades
- **Error**: Red for low grades
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headers**: Bold, clear hierarchy
- **Body Text**: Readable, accessible font sizes
- **Labels**: Semantic font weights and colors

### Components

- **Cards**: Consistent shadow and border radius
- **Buttons**: Clear hover states and transitions
- **Loading States**: Smooth animations
- **Grid Layouts**: Responsive breakpoints

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (1 column)
- **Tablet**: 640px - 768px (2 columns)
- **Desktop Small**: 768px - 1024px (3 columns)
- **Desktop Medium**: 1024px - 1280px (4 columns)
- **Desktop Large**: 1280px+ (5 columns)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **OpenFoodFacts**: For providing the comprehensive food database API
- **React Team**: For the amazing React framework
- **Redux Team**: For Redux Toolkit and RTK Query
- **Tailwind CSS**: For the utility-first CSS framework

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ using React, TypeScript, and the OpenFoodFacts API**
