# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and certificates.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- ⚡ **Fast Loading**: Optimized for performance with minimal dependencies
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML structure
- 🌟 **Interactive Elements**: Smooth scrolling, hover effects, and animations
- 📋 **Multiple Sections**: Home, About, Skills, Projects, Certificates, and Contact

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Organized by categories (Frontend, Backend, Tools)
4. **Projects Section**: Showcase your best work with links
5. **Certificates Section**: Display your achievements and certifications
6. **Contact Section**: Contact information and social media links

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - Portfolio</title>
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
```

### 2. Contact Information

Update your contact details in the Contact section:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 3. Social Media Links

Update the social media links in the Contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourusername" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 4. Skills

Modify the skills section to match your expertise:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
        </div>
        <!-- Add more skills as needed -->
    </div>
</div>
```

### 5. Projects

Update the projects section with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="https://yourproject.com" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### 6. Certificates

Update the certificates section with your actual certifications:

```html
<div class="certificate-card">
    <div class="certificate-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <div class="certificate-content">
        <h3>Your Certificate Name</h3>
        <p>Issuing Organization</p>
        <span class="certificate-date">2023</span>
    </div>
</div>
```

### 7. Profile Picture

To add your profile picture, replace the icon in the hero section:

```html
<div class="profile-image">
    <img src="path/to/your/image.jpg" alt="Your Name">
</div>
```

And update the CSS for the profile image:

```css
.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Desktop

1. Create a new repository on GitHub
2. Clone the repository to your local machine
3. Copy all the files to the repository folder
4. Commit and push the changes
5. Go to repository Settings → Pages
6. Select "Deploy from a branch" and choose "main" branch
7. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/repository-name.git

# Push to GitHub
git push -u origin main
```

### Method 3: Direct Upload

1. Create a new repository on GitHub
2. Upload all files directly through the GitHub web interface
3. Enable GitHub Pages in repository settings

## Custom Domain (Optional)

To use a custom domain:

1. Purchase a domain name
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings with your domain provider
4. Update repository settings with your custom domain

## Performance Optimization

The website is already optimized for performance:

- ✅ Minified CSS and JavaScript
- ✅ Optimized images (when you add them)
- ✅ Lazy loading for images
- ✅ Preloaded critical resources
- ✅ Smooth animations with CSS transforms

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio or have questions about deployment, feel free to open an issue on GitHub.

---

**Happy coding! 🚀** 