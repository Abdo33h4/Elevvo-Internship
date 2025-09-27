# FitTrack - Fitness Tracking App Landing Page

A modern, responsive one-page website for FitTrack, a fictional fitness tracking app. Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

### Core Sections
- **Hero Section** - Eye-catching gradient background with app name, tagline, and download CTA
- **Features Section** - 4 key app features with icons and descriptions
- **Testimonials** - 3 user reviews with profile photos and ratings
- **Pricing** - 3 pricing tiers (Free, Premium, Pro) with feature comparisons
- **FAQ** - Interactive accordion with 4 common questions
- **Footer** - Newsletter signup, social links, and navigation

### Interactive Features
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- ✨ **Scroll Animations** - Fade-in and slide-in effects on scroll
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- 🎯 **Smooth Scrolling** - Navigation links smoothly scroll to sections
- 💬 **Interactive FAQ** - Accordion-style questions that expand/collapse
- 📧 **Newsletter Signup** - Functional form with validation
- 🔔 **Notifications** - Toast notifications for user feedback

### Accessibility Features
- ♿ **ARIA Labels** and semantic HTML
- ⌨️ **Keyboard Navigation** support
- 🎯 **Focus Indicators** for interactive elements
- 📖 **Screen Reader Friendly** with proper heading hierarchy
- 🎭 **Reduced Motion** support for accessibility
- 🌈 **High Contrast** mode support

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with custom properties, Grid, and Flexbox
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
FitTrack-Landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── package.json        # Project metadata
├── manifest.json       # PWA manifest
├── .gitignore         # Git ignore rules
└── assets/            # Static assets (if any)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional dependencies required

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The website is fully functional

### Development

If you want to modify the project:

1. Edit `index.html` for structure changes
2. Edit `styles.css` for styling changes
3. Edit `script.js` for functionality changes
4. Refresh your browser to see changes

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange gradient (#ff6b35 to #f7931e)
- **Secondary**: Blue (#004e89 to #0066cc)
- **Accent**: Yellow (#ffd23f)
- **Text**: Dark gray (#2d3436) / White (dark mode)
- **Background**: White (#ffffff) / Dark (#18191a in dark mode)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive**: Uses clamp() for fluid typography scaling

### Layout
- **Mobile-First**: Responsive design starting from mobile
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Spacing**: Consistent spacing using CSS custom properties

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 **Mobile**: 320px and up
- 📱 **Tablet**: 768px and up
- 💻 **Desktop**: 1024px and up
- 🖥️ **Large Desktop**: 1200px and up

## ⚡ Performance Features

- **Optimized Images**: Lazy loading for better performance
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Minimal Dependencies**: Only Font Awesome and Google Fonts
- **Clean Code**: Well-structured and commented code
- **Fast Loading**: Optimized for quick page loads

## 🧪 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Explained

### Dark Mode
- Toggle button in top-right corner
- Remembers user preference in localStorage
- Smooth transition between themes
- Updates all UI elements automatically

### Scroll Animations
- Uses Intersection Observer API
- Fade-in effects for hero elements
- Slide-in effects for sections
- Staggered animations for grid items

### FAQ Accordion
- Click to expand/collapse questions
- Only one question open at a time
- Smooth height transitions
- Keyboard accessible

### Newsletter Form
- Email validation
- Success/error notifications
- Form reset after submission
- Accessible form controls

## 🔧 Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #004e89;
    --accent-color: #ffd23f;
    /* ... other colors */
}
```

### Content
Update content in `index.html`:
- Hero section text
- Feature descriptions
- Testimonials
- Pricing plans
- FAQ questions

### Animations
Modify animation classes in `styles.css` and `script.js`:
- `.fade-in`, `.slide-in` classes
- Intersection Observer settings
- Animation durations and easing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with the project, please open an issue or contact the developer.

---

**Built with ❤️ for fitness enthusiasts**
