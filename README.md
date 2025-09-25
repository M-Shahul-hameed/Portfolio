# Shahul Hameed - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Express.js. This project showcases my skills, experience, and projects in a beautiful, interactive format.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Working contact form with email integration
- **Project Showcase**: Filterable project gallery with live demos
- **Skills Visualization**: Interactive skill bars and technology icons
- **Experience Timeline**: Professional experience with detailed descriptions

## 🛠️ Tech Stack

### Frontend
- Vite + React 18
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Axios (API calls)

### Backend
- Node.js
- Express.js
- Nodemailer (email service)
- CORS (cross-origin requests)

## 📦 Installation

1. **Download the project**
   ```bash
   # Download and extract the project files
   # Navigate to the project directory
   cd shahul-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (frontend + backend)
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your email credentials
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately
   npm run server  # Backend on port 5000
   npm run client  # Frontend on port 3000 (Vite dev server)
   ```

## 🚀 Deployment

### Frontend (Vite + React)
The Vite + React app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend (Express)
The Express server can be deployed to:
- Heroku
- DigitalOcean
- AWS EC2
- Railway
- Render

### Production Build
```bash
# Build the Vite + React app
npm run build

# Preview the production build
npm run preview

# Start the production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Express backend
│   └── index.js           # Server entry point
├── package.json           # Root package.json
├── .env.example          # Environment variables example
└── README.md
```

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary colors
  }
}
```

### Content
Update the following files to customize content:
- `client/src/components/Hero.js` - Hero section
- `client/src/components/About.js` - About section
- `client/src/components/Experience.js` - Work experience
- `client/src/components/Projects.js` - Project showcase
- `client/src/components/Contact.js` - Contact information

### Styling
- Global styles: `client/src/index.css`
- Component styles: Individual component files
- Tailwind configuration: `client/tailwind.config.js`

## 📧 Contact Form Setup

1. **Gmail Setup** (Recommended)
   - Enable 2-factor authentication
   - Generate an App Password
   - Use your Gmail and App Password in `.env`

2. **Other Email Services**
   - Update the transporter configuration in `server/index.js`
   - Modify the SMTP settings for your email provider

## 🤝 Contributing

1. Download the project files
2. Make your changes
3. Test your changes thoroughly
4. Share your improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Styling with Tailwind CSS

## 📞 Contact

**Shahul Hameed**
- Email: shameed2404@gmail.com
- LinkedIn: [shahul-hameed-87b786320](https://www.linkedin.com/in/shahul-hameed-87b786320)

---

⭐ If you found this portfolio helpful, feel free to reach out!
