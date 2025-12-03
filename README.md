# RAKS Auto Shine - Premium Car Wash & Detailing Center

A modern, responsive website for a premium car wash and detailing service built with React, TypeScript, and Tailwind CSS.

## 🚗 About

RAKS Auto Shine is a professional car wash and detailing center website showcasing premium automotive care services. The site features a beautiful, animated interface with comprehensive service information, pricing packages, and easy booking functionality.

## ✨ Features

- **9 Premium Services** - From basic exterior wash to ceramic coating
- **3 Pricing Packages** - Basic, Premium, and Ultimate packages
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Powered by Framer Motion
- **Contact & Booking** - Multiple ways to get in touch
- **WhatsApp Integration** - Quick booking via WhatsApp
- **Service Detail Pages** - Comprehensive information for each service

## 🛠️ Technology Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd raks-auto-shine-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── Services.tsx    # Services showcase
│   ├── Pricing.tsx     # Pricing packages
│   ├── Contact.tsx     # Contact form
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── ServiceDetail.tsx  # Service details
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Change Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --raks-navy: 232 52% 31%;      /* Primary color */
  --raks-silver: 0 0% 75%;       /* Accent color */
}
```

### Add Services

Edit `src/components/Services.tsx` and add to the `services` array.

### Modify Pricing

Edit `src/components/Pricing.tsx` and update the `packages` array.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Deploy Options

- **Vercel**: Connect your Git repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure in repository settings
- **Any static hosting**: Upload the `dist` folder

## 📱 Services Offered

1. Exterior Car Wash - $29+
2. Interior Vacuum & Deep Cleaning - $39+
3. Full Body Polish - $99+
4. Engine Bay Cleaning - $49+
5. Foam Wash - $24+
6. Ceramic Coating - $499+
7. Underbody Wash - $19+
8. Headlight Restoration - $59+
9. Bike Wash - $19+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact:
- Email: info@rakscarwash.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using React and TypeScript**
