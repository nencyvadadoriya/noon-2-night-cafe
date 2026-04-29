# Noon 2 Night - Cafe Project

A modern, responsive cafe website built with **React**, **TypeScript**, and **Vite**. This project features a beautiful UI for a specialty cafe, including a menu, about section, coffee knowledge blog, and booking functionality.

## 🚀 Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS 4, Flowbite React
- **Animations:** Framer Motion
- **Icons:** Remix Icon (via fonts)
- **Routing:** React Router Dom 7
- **Slider/Carousel:** Swiper
- **Build Tool:** Vite

## ✨ Features

- **Modern & Responsive UI:** Fully responsive design that works on all devices.
- **Dynamic Menu:** A categorized menu system (Coffee, Tea, Breakfast, etc.) with beautiful image displays.
- **Coffee Knowledge Blog:** Educational section about coffee trends, maintenance, and barista skills.
- **Booking System:** Integrated table booking section.
- **Testimonials:** Customer reviews displayed with a clean layout.
- **Instagram Gallery:** Social media integration showcase.
- **Interactive Header:** Sticky navigation with scroll-aware styling.

## 📂 Project Structure

```text
cafeProject/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx    # Navigation with dark/light mode support
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Banner.tsx    # Hero section
│   │   ├── Menu.tsx      # Comprehensive menu component
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   └── ...           # Other UI sections (About, Booking, etc.)
│   ├── AboutPage.tsx     # Dedicated About page
│   ├── CoffeeKnowledgePage.tsx # Blog/Knowledge base page
│   ├── App.tsx           # Main application routing and entry
│   └── main.tsx          # React root entry point
├── public/               # Static assets (images, icons)
├── package.json          # Project dependencies and scripts
└── tailwind.config.js    # Styling configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd cafeProject
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Recent Updates

- **Header Visibility Fix:** Updated `Header` and `Layout` components to support a `dark` prop, ensuring the navigation is visible on pages with light backgrounds (like the Coffee Knowledge page).
- **UI Refinements:** Cleaned up section dividers in `AboutUs` and `Testimonial` components for a more modern look.

## 📄 License

This project is private and for demonstration purposes.
