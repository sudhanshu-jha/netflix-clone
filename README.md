# Netflix Clone  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/70db0646202d47af8ba679b3253f7fdb)](https://www.codacy.com/app/sudhanshu-jha/netflix-clone?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sudhanshu-jha/netflix-clone&amp;utm_campaign=Badge_Grade)

A modern Netflix clone built with the latest web technologies. Search and discover movies with a Netflix-style interface.

**✨ Recently Updated to Latest Versions (2024) - Now with React 19!**

Built with the latest React 19, Redux, and React Router for a responsive single-page application. Configured with Webpack 5, modern Sass, and PostCSS for optimal development and production builds.

<!-- ### Check out this site live on this [Link](http://netflix-react.surge.sh/) -->

![Demo](https://github.com/sudhanshu-jha/netflix-clone/blob/master/demo2.gif)

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with enhanced performance and new features
- **Redux 5** - State management with latest Redux toolkit  
- **React Router 6** - Latest routing with new element-based syntax
- **Modern Sass** - Using @use instead of @import, with sass-embedded
- **Webpack 5** - Module bundling with hot reloading

### Build Tools
- **Babel** - ES6+ transpilation with latest presets
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **ESLint & Prettier** - Code quality and formatting
- **Hot Module Replacement** - Fast development experience

### Dependencies Updated (Nov 2024)
- React: `15.6.1` → `19.2.0` ✨
- Redux: `3.7.2` → `5.0.0` 
- React Router: `4.2.2` → `6.28.0`
- React Redux: `5.0.6` → `9.1.0`
- Webpack: `3.5.5` → `5.89.0`
- Sass: Modern API with sass-embedded
- Removed deprecated `findDOMNode` usage for React 19 compatibility
- All other dependencies to latest stable versions

## 📋 User Stories

- ✅ Browse recommended movies on homepage with Netflix-style carousels
- ✅ View movie descriptions on hover with smooth animations
- ✅ Search for movies by title with instant results
- ✅ Click movie thumbnails for detailed information pages
- ✅ Browse cast information and movie details
- ✅ Fully responsive design for all screen sizes
- ✅ Modern Netflix-inspired UI/UX

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/sudhanshu-jha/netflix-clone.git
cd netflix-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will be available at **http://localhost:3000** with hot module replacement for fast development.

4. **Build for production**
```bash
npm run build
```

Optimized production files will be generated in the `dist/` directory.

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

The project uses modern build tools with sensible defaults:
- **Webpack 5** with hot module replacement
- **Babel** for ES6+ compilation
- **Sass** with modern @use syntax
- **PostCSS** for CSS optimization
- **ESLint** for code quality

## 🚀 Features

- **Netflix-style UI** - Authentic carousel animations and hover effects
- **Movie Discovery** - Browse trending, popular, and top-rated content
- **Search Functionality** - Real-time movie search with instant results  
- **Detailed Movie Pages** - Cast information, genres, and descriptions
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Performance Optimized** - Code splitting and lazy loading

## 📁 Project Structure

```
netflix-clone/
├── src/
│   ├── components/           # React components
│   │   ├── Global/          # Header, Footer, Navigation
│   │   ├── LandingPage/     # Home page with carousels
│   │   ├── MoviePage/       # Movie detail pages
│   │   └── SearchPage/      # Search results
│   ├── actions/             # Redux actions
│   ├── reducers/            # Redux reducers  
│   ├── store/               # Redux store configuration
│   └── utils/               # API utilities
├── assets/                  # Images and static files
└── webpack.config.js        # Build configuration
```

## 🔗 API

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for movie data.

## 🙏 Credits

Special thanks to the amazing learning resources and community:

- **FreeCodeCamp** for educational guidance
- **kuanhsuh** for original inspiration  
- **TMDb API** for movie data
- Open source community for webpack, React, and modern web tools

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
