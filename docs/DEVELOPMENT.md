# Development Guide

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd chawana_dot_online
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

## File Organization

### Assets
- `assets/images/` - All image files (PNG, JPG, SVG)
- `assets/icons/` - Icon files and favicons

### Styles
- `css/styles.css` - Custom CSS styles and overrides

### Scripts
- `js/script.js` - JavaScript functionality and interactions

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Ensure accessibility attributes

### CSS
- Follow BEM methodology for custom classes
- Use CSS custom properties for consistent theming
- Mobile-first responsive design

### JavaScript
- Use modern ES6+ syntax
- Add comments for complex functionality
- Ensure cross-browser compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Optimize images before adding to assets
- Minify CSS and JS for production
- Use appropriate image formats (WebP when possible)
- Implement lazy loading for images

## Testing Checklist

- [ ] Responsive design on all screen sizes
- [ ] All links and buttons functional
- [ ] Forms submit correctly
- [ ] Animations work smoothly
- [ ] Cross-browser compatibility
- [ ] Accessibility compliance
