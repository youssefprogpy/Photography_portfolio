# Photography Portfolio

A modern, responsive photography portfolio website built with HTML, CSS, and Bootstrap.

## Features

- **Fixed Navigation Bar** - Sticky header with smooth backdrop blur effect and active link highlighting
- **Responsive Design** - Mobile-first approach with breakpoints for tablets and desktops
- **Hero Section** - Full-height home section with background image and animated text
- **Gallery** - Image gallery with hover effects and responsive grid layout
- **About Section** - Professional about section with image and text layout
- **Contact Section** - Call-to-action section with button
- **Modern Footer** - Gradient background with social media icons and animations
- **Smooth Animations** - Fade-up animations and smooth transitions throughout

## Project Structure

```
photographyPortfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and animations
├── images/             # Image assets
│   └── background.jpg  # Hero section background
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and transitions
- **Bootstrap 5** - Responsive grid and components
- **Font Awesome** - Icon library (for social media links)

## Key CSS Features

### Navigation

- Fixed positioning with z-index management
- Backdrop blur effect with 6px blur
- Smooth color transitions on hover (yellow highlight with overline)
- Active link styling

### Hero Section (#home)

- Full viewport height background image
- Fade-up animation for heading text
- Text shadow for readability
- Button hover scale effect (1.09x)

### Gallery Section (#gallery)

- Responsive image grid
- Images scale to 1.04x on hover
- Box shadow enhancement on interaction
- Height adjustments for different screen sizes:
  - Desktop: 300px
  - Tablet (max-width: 992px): 350px
  - Mobile (max-width: 576px): 200px

### About Section (#about)

- Centered images with max-width of 420px
- Smooth transform and shadow transitions
- Responsive padding and layout

### Footer

- Gradient background (135deg from #1a1a1a to #2c2c2c)
- Social media icons with cascading animations
- Icons scale to 1.25x and lift on hover
- Animation delays for staggered entrance effect

## Responsive Breakpoints

- **Mobile**: max-width 576px
- **Tablet**: max-width 768px
- **Desktop**: max-width 992px

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Ensure all image assets are in the `images/` folder
4. Customize the content and images as needed

## Customization

- Update `index.html` with your photography content
- Modify color schemes in `css/style.css`
- Replace background and gallery images in the `images/` folder
- Adjust animation timings and speeds in the CSS keyframes

## Browser Support

Works in all modern browsers including:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Feel free to use this template for your portfolio!
