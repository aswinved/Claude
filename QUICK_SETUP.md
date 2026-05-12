# 🎯 QUICK SETUP - Where to Add Files and Links

## 1️⃣ ADD YOUR PDF FILE

### Location: Same folder as `index.html`
```
📁 your-website/
├─ index.html
├─ styles.css
├─ script.js
└─ exam-guide.pdf  ← PUT YOUR PDF HERE
```

### Update PDF Filename in `script.js`

**File:** `script.js`
**Line:** 130-146 (look for the comment block)

**Find this:**
```javascript
// ===== PDF Viewer Functionality =====
async function loadPDF() {
    try {
        // 📌 PDF SETUP INSTRUCTIONS:
        // ========================================
        // 1. Place your PDF file in the same directory as index.html
        //    Example: /exam-guide.pdf
        //
        // 2. Replace the line below with your PDF filename:
        //    const pdfPath = './your-pdf-file.pdf';
        //
        //    Examples:
        //    - const pdfPath = './exam-guide.pdf';
        //    - const pdfPath = './claude-certification.pdf';
        //    - const pdfPath = './study-material.pdf';
        //
        // 3. Make sure the PDF is in the same folder as index.html
        //
        // 4. If loading from URL:
        //    const pdfPath = 'https://example.com/path/to/your-file.pdf';
        // ========================================

        // Using a placeholder PDF - CHANGE THIS LINE!
        const pdfPath = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
```

**Change to:**
```javascript
        const pdfPath = './exam-guide.pdf';
```

**Example with different filename:**
```javascript
        const pdfPath = './claude-foundations.pdf';
```

---

## 2️⃣ CLAUDE CERTIFICATION LINK

✅ **Already Added!**

**File:** `index.html`
**Line:** 20

**Link:** `https://www.anthropic.com/claude/certified-architect`

**Opens:** In same tab (target="_self")

---

## 3️⃣ ADD CUSTOM HTML PAGES

### Option A: Add New Navigation Link (EASIEST)

**File:** `index.html`
**Line:** 13-19 (in the nav-menu)

**Find this comment:**
```html
<!-- 📌 ADD CUSTOM HEIGHT PAGES HERE: <li><a href="page-name.html" target="_self">Custom Page</a></li> -->
```

**Replace with your custom page:**
```html
<li><a href="study-materials.html" target="_self">Study Materials</a></li>
```

**Full navigation section:**
```html
<ul class="nav-menu">
    <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
    <li><a href="#exam" class="nav-link" data-section="exam">Exam Guide</a></li>
    <li><a href="#resources" class="nav-link" data-section="resources">Resources</a></li>
    <li><a href="#pdf-viewer" class="nav-link" data-section="pdf-viewer">PDF Viewer</a></li>
    <li><a href="#faq" class="nav-link" data-section="faq">FAQ</a></li>
    <!-- 📌 YOUR CUSTOM PAGES HERE -->
    <li><a href="study-materials.html" target="_self">Study Materials</a></li>
    <li><a href="https://www.anthropic.com/claude/certified-architect" target="_self">Claude Certification</a></li>
</ul>
```

### Option B: Create New HTML File

We created an example: `study-materials.html`

**To create your own:**
1. Copy `study-materials.html` to a new file
2. Edit the content inside
3. Change the title and navigation
4. Add the link in `index.html` navigation

---

## 📝 STEP-BY-STEP SETUP

### Step 1: Add Your PDF (2 minutes)
- [ ] File → Save your PDF in project folder
- [ ] Edit `script.js` line 153
- [ ] Change filename to your PDF name
- [ ] Save and refresh browser

### Step 2: Verify Links (1 minute)
- [ ] Check Claude Certification link in navbar
- [ ] Test that it opens in same tab
- [ ] Link: `https://www.anthropic.com/claude/certified-architect`

### Step 3: Add Custom Pages (5 minutes optional)
- [ ] Update navigation in `index.html` line 13-19
- [ ] Add custom HTML page links
- [ ] Test all navigation links

---

## 📂 Project File Structure

After setup, your folder should look like:

```
claude-certification-website/
├── index.html                    ← Main page
├── styles.css                    ← Styling (don't change)
├── script.js                     ← PDF setup HERE (line 153)
├── study-materials.html          ← Example custom page
├── your-exam-guide.pdf           ← YOUR PDF FILE HERE
├── SETUP_GUIDE.md               ← Detailed guide
├── QUICK_SETUP.md               ← This file
└── README.md                     ← Overview
```

---

## 🔍 WHERE TO MAKE CHANGES

### PDF Filename
- **File:** `script.js`
- **Line:** ~153
- **Change:** `const pdfPath = './your-filename.pdf';`

### Add Navigation Links
- **File:** `index.html`
- **Line:** ~13-19
- **Add:** `<li><a href="page.html" target="_self">Page Name</a></li>`

### Modify Navigation Menu
- **File:** `index.html`
- **Line:** ~11-20 (entire nav-menu section)
- **Look for:** `<!-- 📌 ADD CUSTOM HEIGHT PAGES HERE -->`

### Claude Certification Link
- **File:** `index.html`
- **Line:** ~20
- **URL:** `https://www.anthropic.com/claude/certified-architect`
- **Already added!** ✅

---

## 🎨 Modern Design Features

✨ **New Color Scheme:**
- Primary: Sleek dark blue (`#0f172a`)
- Accent: Clean bright blue (`#3b82f6`)
- Clean white cards with subtle borders

✨ **Enhanced Styling:**
- Smooth transitions and hover effects
- Better typography and spacing
- Professional cards and layout
- Improved mobile responsiveness

✨ **Better Navigation:**
- Clean white navbar
- Subtle shadows and borders
- Smooth section transitions
- Mobile hamburger menu

---

## ⚡ Quick Links

- **Main page:** `index.html`
- **Example custom page:** `study-materials.html`
- **For more details:** `SETUP_GUIDE.md`

---

## ✅ VERIFICATION CHECKLIST

- [ ] PDF file placed in project directory
- [ ] PDF filename updated in `script.js` line 153
- [ ] PDF loads in browser when you visit site
- [ ] Claude Certification link works
- [ ] Navigation menu looks good
- [ ] All pages are responsive on mobile
- [ ] Links open in same tab

---

## 🆘 TROUBLESHOOTING

### "PDF doesn't load"
→ Check filename in script.js matches exactly (case-sensitive)
→ Verify PDF is in same folder as index.html

### "PDF link broken"
→ Download your PDF first
→ Place in project folder
→ Update script.js with correct filename

### "Can't find where to add PDF name"
→ Open `script.js`
→ Press Ctrl+F to search for "PDF SETUP INSTRUCTIONS"
→ Update the line below that comment

### "Navigation links don't work"
→ Check for typos in filenames
→ Make sure HTML files exist in same folder
→ Test in different browser

---

**🚀 You're all set! Your website is ready to customize.**
