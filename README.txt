======================================
Dr. Pet's – Responsive HTML Template
======================================

🐾 Overview
-----------
Dr. Pet's is a clean, modern, and fully responsive one-page HTML template created for pet clinics, veterinarians, or animal care services.

It’s built with pure HTML, CSS, and JavaScript — no frameworks or libraries are required.  
The layout automatically adjusts to all devices (desktop, tablet, mobile).

The template includes:
- Hero section with clinic introduction
- About section
- Services section with icons
- Doctors/team section
- Contact section with a map and form
- Responsive sidebar navigation
- Smooth GSAP and AOS animations

-----------------------------------
📁 File Structure
-----------------------------------
project/
│
├── index.html                → Main HTML file (website structure)
├── style.css                 → All styles and responsive design
├── script.js                 → Menu logic, animations, and form validation
│
└── images/                   → All images used in the project
    │
    ├── hero/                 → Main hero section assets
    │   ├── 1.png
    │   ├── logo.png
    │   ├── phone-icon.png
    │   ├── burger_menu.png
    │   ├── cross-icon.png
    │   └── sidebar-phone-icon.png
    │
    ├── backgrounds/          → Background and decorative images
    │   ├── 2.png
    │   ├── 3.png
    │   └── fon3.png
    │
    ├── icons/                → Icons used across sections
    │   ├── house-icon.png
    │   ├── doctor-icon.png
    │   ├── car-icon.png
    │   ├── notebook-icon.png
    │   ├── step.png
    │   ├── location.png
    │   ├── phone.png
    │   ├── mail.png
    │   └── map-placeholder.png
    │
    ├── doctors/              → Photos of veterinarians
    │   ├── doctor1.jpg
    │   ├── doctor2.jpg
    │   ├── vet-doctor1.jpeg
    │   ├── vet-doctor2.jpg
    │   └── vet-doctor3.jpeg
    │
    ├── pets/                 → Animal images (main visual)
    │   └── puppy.jpeg
    │
    └── services/             → Images representing clinic services
        ├── therapy.jpg
        ├── vaccination.jpg
        ├── surgery.jpeg
        └── laboratory.jpg


-----------------------------------
🧭 How to Open and Edit
-----------------------------------
1. Unzip the project folder (if it’s archived).
2. Open the folder and double-click on `index.html` — it will open in your default browser.
3. To edit text or styles, open the files in a text editor like:
   - Visual Studio Code (recommended)
   - Sublime Text
   - Notepad++

-----------------------------------
🖋 How to Edit Text Content
-----------------------------------
1. Open `index.html` in your editor.
2. Find and replace text in these sections:
   - Hero section → main title and description
   - About section → short description of the clinic
   - Services → service titles and descriptions
   - Doctors → names and specializations
   - Contact → address, phone, email

Example:
<h3>Dr. Emily Watson</h3>
<p>Veterinary Surgeon</p>
Change names or positions as needed.


-----------------------------------
🖼 How to Change Images
-----------------------------------
All images are located in the images/ folder.

To replace an image:
1. Prepare your new image (recommended size and format: .jpg or .png).
2. Give it the same name as the file you’re replacing.
3. Move it into the same folder (e.g. `/images/services/`).
4. Refresh your browser — your new image will appear automatically.

If you want to use a new filename:
1. Open `index.html`
2. Find the line with <img src="...">
3. Replace the path with your image filename and folder

Example:
<img src="images/pets/puppy.jpeg" alt="Cute puppy">

-----------------------------------
📧 How to Change Contact Information
-----------------------------------
Scroll to the contact section in `index.html` and update:
<p>Ontario, Canada</p>
<p>+1 (416) 555-1234</p>
<p>drpets124@gmail.com</p>

To replace the map:
1. Save your new map image (for example, a screenshot from Google Maps).
2. Name it `map-placeholder.png`.
3. Place it in the folder `/images/icons/`.

-----------------------------------
🎨 How to Customize Colors or Fonts
-----------------------------------
All color and font settings are in `style.css`.

To change colors:
1. Open `style.css`
2. Search for `color:` or `background-color:`
3. Replace the HEX color value (e.g., `#f7a600`) with your preferred color.

To change fonts:
1. The project uses Google Fonts.
2. Visit https://fonts.google.com, choose a new font.
3. Copy the <link> code into the <head> section of `index.html`.
4. Update `font-family` values in `style.css`.

-----------------------------------
📜 JavaScript Functionality
-----------------------------------
`script.js` controls:
- Opening/closing of the sidebar menu
- Automatic menu hiding after selecting a link
- Hiding/showing hero button and image
- GSAP animations (logo, text, images)
- AOS scroll animations
- Form validation (checks name, phone, date, etc.)

You can adjust animations by editing GSAP and AOS settings inside `script.js`.

-----------------------------------
📱 Responsive Design
-----------------------------------
The template is fully responsive — it automatically adapts to all devices.

Key points:
- max-width: 100%; height: auto; ensures proper image scaling.
- The hamburger menu appears on smaller screens.
- Sidebar menu can be opened/closed with a button tap.
- Layout adjusts smoothly between mobile and desktop.

-----------------------------------
💡 Notes
-----------------------------------
- This is a static HTML/CSS/JS template (no backend).
- Works perfectly on all modern browsers.
- You can upload it directly to any hosting provider or GitHub Pages.
- All images and icons are included inside the `images/` folder.

-----------------------------------
📩 Support
-----------------------------------
If you need help customizing this template or have questions,
please contact me through Etsy — I’ll be happy to assist!

✨ Thank you for using Dr. Pet’s Template!
