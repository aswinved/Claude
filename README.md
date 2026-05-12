# Claude Certified Architect Foundations Exam Platform

A modern, responsive website for displaying the Claude Certified Architect Foundations exam with an integrated PDF viewer that prevents downloads.

## Features

✨ **Modern Design**
- Stylish gradient UI with smooth animations
- Fully responsive layout (mobile, tablet, desktop)
- Professional color scheme and typography
- Accessible and user-friendly interface

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly navigation

📄 **Protected PDF Viewer**
- View PDF documents with integrated viewer
- No download capability
- Right-click protection
- Keyboard shortcuts disabled for saving
- Page navigation with previous/next buttons
- Page counter display
- Keyboard arrow key support (← →)

🌐 **Resource Links**
- Quick access to Claude Dashboard
- API Console links
- Official documentation
- GitHub repositories
- Research papers
- Blog and updates

❓ **FAQ Section**
- Expandable accordion-style FAQ
- Common exam questions answered
- Easy-to-read formatting

## File Structure

```
project/
├── index.html      # Main HTML structure
├── styles.css      # Responsive styling
├── script.js       # JavaScript functionality
└── exam-guide.pdf  # Your PDF file (replace with actual)
```

## Getting Started

### 1. Basic Setup
Simply open `index.html` in a web browser. The website includes a demo PDF viewer.

### 2. Add Your PDF File
To use your own exam guide PDF:

1. Place your PDF file in the same directory as `index.html`
2. Open `script.js`
3. Find the `loadPDF()` function (around line 128)
4. Replace the placeholder path:

```javascript
// Change this:
const placeholderUrl = 'data:application/pdf;base64,...';

// To this:
const pdfPath = './exam-guide.pdf';  // Your PDF filename
pdfDoc = await pdfjsLib.getDocument(pdfPath).promise;
```

### 3. Update Content
- Edit the exam information in the "Exam Overview" section
- Update resource links to your actual platforms
- Customize FAQ answers
- Modify colors in `styles.css` `:root` section

## Customization Guide

### Change Color Scheme
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1f2937;        /* Dark navbar color */
    --secondary-color: #6366f1;      /* Button/accent color */
    --accent-color: #ec4899;         /* Highlight color */
    --light-bg: #f9fafb;            /* Light background */
    /* ...more variables */
}
```

### Modify Navigation Items
Edit the `<nav>` section in `index.html`:
- Add/remove nav links in the `nav-menu`
- Update corresponding section IDs

### Update Exam Information
Edit the "Exam Overview" and other sections with your specific exam details.

### Customize Resource Links
Update the href attributes in the resources grid section to point to your actual URLs.

## Features in Detail

### Mobile Menu
- Automatically appears on screens smaller than 768px
- Smooth hamburger animation
- Closes when a link is clicked

### PDF Viewer Protection
- Prevents downloading via right-click
- Blocks save keyboard shortcuts (Ctrl+S, Cmd+S)
- Disables drag-to-copy
- Shows notifications when users attempt restricted actions

### Navigation System
- Single-page application (SPA) style
- Smooth section transitions
- Shows/hides sections without page reload
- Persistent active state indicator

### Responsive Grid Layouts
- Auto-adjusting columns based on screen width
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA-friendly structure
- Mobile viewport optimization
- Fast loading with CDN resources

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~20KB HTML/CSS/JS
- Uses CDN for PDF.js library
- Optimized images and assets
- No heavy dependencies
- Fast initial load time

## PDF.js Integration

The website uses PDF.js for viewing PDFs without plugin requirements. The library is loaded from CDN:
- `pdf.min.js` - Main library
- `pdf.worker.min.js` - Web Worker for rendering

## Security Notes

- PDF downloads are disabled via client-side protection
- Right-click menu is disabled on PDF viewer
- Save shortcuts are blocked
- For production, consider server-side PDF protection
- PDFs are still downloadable via browser developer tools (use DRM or server-side protection for sensitive content)

## Keyboard Navigation

- **Arrow Left/Right**: Navigate PDF pages (when viewing PDF)
- **Tab**: Navigate interactive elements
- **Enter**: Click focused buttons/links

## SEO Optimization

- Mobile-responsive design
- Fast loading times
- Semantic HTML
- Proper heading structure
- Meta tags for social sharing

## Hosting

You can host this website on:
- **GitHub Pages** (free)
- **Netlify** (free with custom domain)
- **Vercel** (free)
- **Traditional Web Host** (cPanel, etc.)
- **AWS S3 + CloudFront**
- **Google Cloud Storage**

### Deploy to GitHub Pages

```bash
# 1. Create a new repository named: username.github.io
# 2. Push these files to the repository
# 3. Your site will be available at: https://username.github.io
```

### Deploy to Netlify

```bash
# 1. Zip the project folder
# 2. Drag & drop on netlify.com
# 3. Get instant HTTPS and CDN
```

## Troubleshooting

### PDF won't load
- Check the file path in `script.js`
- Ensure PDF file is in the same directory
- Check browser console for errors (F12)
- Verify PDF file is not corrupted

### Mobile menu doesn't work
- Clear browser cache
- Check if JavaScript is enabled
- Try different browser

### Styles not loading
- Refresh page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check file paths are correct

### PDF viewer is blank
- Check PDF file path
- Ensure PDF.js library loaded (check Network tab)
- Verify browser supports Canvas

## Advanced Customization

### Add Analytics
Update the `trackPageView()` function in `script.js` to integrate with Google Analytics or other platforms.

### Custom Fonts
Add Google Fonts in `<head>` of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

### Dark Mode
Add a toggle button and implement dark mode CSS variables.

### Multi-language Support
Create language files and implement switching logic in JavaScript.

## Support & Resources

- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## License

This project is open source and available for personal and commercial use.

## Tips for Success

1. **Test on mobile devices** - Use Chrome DevTools (F12) to test responsiveness
2. **Optimize PDF size** - Compress your PDF before uploading
3. **Update regularly** - Keep exam content current
4. **Use HTTPS** - Always serve over secure connection
5. **Monitor performance** - Use Google PageSpeed Insights
6. **Backup your files** - Keep version control (Git)

---

**Created with ❤️ for exam preparation**

Enjoy your platform! 🚀
