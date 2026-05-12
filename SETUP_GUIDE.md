# 📚 Setup Guide - Claude Certified Architect Website

## Quick Setup

### Step 1: Add Your PDF File

1. **Place your PDF in the project folder:**
   - Put your PDF file (e.g., `exam-guide.pdf`) in the same directory as `index.html`
   - Directory structure should look like:
     ```
     your-website/
     ├── index.html
     ├── styles.css
     ├── script.js
     ├── exam-guide.pdf          ← Your PDF file here
     └── SETUP_GUIDE.md
     ```

2. **Update the PDF filename in `script.js`:**
   - Open `script.js` in your code editor
   - Find the `loadPDF()` function (around **line 130**)
   - Look for this comment block:
     ```
     // 📌 PDF SETUP INSTRUCTIONS:
     ```
   - Change this line:
     ```javascript
     const pdfPath = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
     ```
   - To this (use your actual filename):
     ```javascript
     const pdfPath = './exam-guide.pdf';
     ```

3. **Save the file and refresh your browser**
   - Your PDF should now load in the viewer!

---

## Step 2: Add the Claude Certification Link

The website already includes a link to the official Claude Certification page. It's in the navigation bar at the top.

**Link added:** `https://www.anthropic.com/claude/certified-architect`

This opens in the same tab as requested.

---

## Step 3: Add Custom HTML Pages (Optional)

If you want to add another HTML page or section:

### Option A: Add as a Navigation Link

1. **Create your new HTML file** (e.g., `study-guide.html`)
2. **Open `index.html`**
3. **Add a link in the navigation menu** (around line 13):
   ```html
   <li><a href="study-guide.html" target="_self">Study Guide</a></li>
   ```
   Or use the comment marker:
   ```html
   <!-- 📌 ADD CUSTOM HEIGHT PAGES HERE -->
   <li><a href="study-guide.html" target="_self">Custom Page</a></li>
   ```

4. **The page will open in the same tab** because of `target="_self"`

### Option B: Add as a New Section (Single Page App)

For pages that should stay within the same layout:

1. **Add a new section in `index.html`:**
   ```html
   <!-- Study Material Section -->
   <section id="study-material" class="section">
       <div class="container">
           <h2>Study Material</h2>
           <!-- Your content here -->
       </div>
   </section>
   ```

2. **Add navigation link:**
   ```html
   <li><a href="#study-material" class="nav-link" data-section="study-material">Study Material</a></li>
   ```

3. **The JavaScript will automatically handle the section switching!**

---

## File Locations Reference

### Where to Add PDF Filename:
**File:** `script.js`  
**Line:** ~130  
**Function:** `loadPDF()`  
**Change:** `const pdfPath = './exam-guide.pdf';`

### Where to Add Navigation Links:
**File:** `index.html`  
**Line:** ~13  
**Search for:** `<!-- 📌 ADD CUSTOM HEIGHT PAGES HERE -->`

### Where to Add Custom HTML Pages:
**Location:** Same folder as `index.html`  
**Example Files:**
- `study-guide.html`
- `resources.html`
- `practice-test.html`

---

## Examples

### Example 1: Simple PDF Addition

**File Structure:**
```
📁 my-website
├─ index.html
├─ styles.css
├─ script.js
└─ claude-exam-guide.pdf  ← Your PDF
```

**Update in script.js (line ~130):**
```javascript
const pdfPath = './claude-exam-guide.pdf';
```

---

### Example 2: Adding Study Guide Page

**Step 1: Create `study-guide.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Study Guide - Claude Certification</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-icon">🏗️</span>
                <span class="logo-text">Claude Architect</span>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link">← Back to Home</a></li>
            </ul>
            <div class="hamburger"><span></span><span></span><span></span></div>
        </div>
    </nav>

    <main>
        <section id="study-guide" class="section active">
            <div class="container">
                <h2>Study Guide</h2>
                <div class="study-content">
                    <!-- Your study guide content here -->
                    <p>Add your study materials here...</p>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Study Guide</h4>
                <p>Additional resources for exam preparation</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Anthropic. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

**Step 2: Update `index.html` navigation (line ~13)**
```html
<li><a href="study-guide.html" target="_self">Study Guide</a></li>
```

---

### Example 3: Adding As Internal Section

**Step 1: Add to `index.html` before `</main>` closing tag:**
```html
<!-- Resources Archive Section -->
<section id="resources-archive" class="section">
    <div class="container">
        <h2>Resources Archive</h2>
        <div class="resources-content">
            <p>Your archived resources here...</p>
        </div>
    </div>
</section>
```

**Step 2: Add to navigation in `index.html`:**
```html
<li><a href="#resources-archive" class="nav-link" data-section="resources-archive">Resources Archive</a></li>
```

---

## Official Links Added

✅ **Claude Certification Official Website:**
```
https://www.anthropic.com/claude/certified-architect
```

✅ **Location in website:** Top navigation bar → "Claude Certification"

✅ **Opens:** In the same tab (as requested)

---

## Customization Checklist

- [ ] Downloaded/uploaded your PDF file
- [ ] Updated PDF filename in `script.js` (line ~130)
- [ ] Tested PDF viewer in your browser
- [ ] Added any additional HTML pages (optional)
- [ ] Updated navigation links for custom pages (optional)
- [ ] Tested all navigation links
- [ ] Customized exam content (optional)

---

## Common Issues & Solutions

### Issue: PDF doesn't load
**Solution:**
1. Check the PDF filename matches exactly (case-sensitive on Linux)
2. Verify PDF is in the same directory as `index.html`
3. Open browser console (F12) to see error messages
4. Try using the full path: `./exam-guide.pdf`

### Issue: Links don't work
**Solution:**
1. Check target="_self" is in the link
2. Verify HTML file exists in the same directory
3. Check for typos in filename

### Issue: Navigation link isn't appearing
**Solution:**
1. Make sure the closing `</li>` tag is there
2. Check your HTML syntax
3. Refresh the browser (Ctrl+Shift+R)

---

## Need Help?

- Check the comments in `script.js` for PDF setup
- Look for `<!-- 📌 -->` markers in files for key sections
- Review the examples in this guide
- Test in different browsers (Chrome, Firefox, Safari)

---

**Good luck with your Claude Certification website! 🚀**
