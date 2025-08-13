# Twitch Stream to YouTube Archiver - Documentation Website

This is the official documentation website for the [Twitch Stream to YouTube Archiver](https://github.com/karstenlee10/Twitch_Stream_To_YouTube) project.

## 🌟 Features

- **Professional cyber-themed design** with light blue accents
- **Comprehensive installation guide** with step-by-step instructions
- **Interactive documentation** with tabbed navigation
- **Responsive design** that works on all devices
- **GitHub Pages deployment ready**

## 🚀 Quick Deploy to GitHub Pages

1. **Fork or clone this repository** to your GitHub account
2. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch (will be created by the action)
3. **Push to main/master branch** - the site will automatically build and deploy

## 🛠️ Local Development

To run this site locally:

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## 📁 Project Structure

```
├── .github/workflows/deploy.yml  # GitHub Actions deployment
├── src/
│   ├── App.tsx                   # Main application component
│   ├── index.css                 # Cyber theme styles
│   └── components/ui/           # UI components library
├── public/                       # Static assets
└── dist/                        # Built files (auto-generated)
```

## 🎨 Design Features

- **Cyber-themed design** with neon borders and glowing effects
- **Light blue color scheme** with dark background
- **Orbitron font** for headings (cyber aesthetic)
- **Fira Code** for code blocks
- **Animated gradients** and interactive elements
- **Professional documentation layout**

## 📝 Customization

To customize for your own project:

1. **Update content** in `src/App.tsx`
2. **Modify colors** in `src/index.css` CSS variables
3. **Change fonts** by updating Google Fonts imports
4. **Add your branding** in the header and footer sections

## 🔧 Built With

- **Vite** - Fast build tool
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS V4** - Utility-first styling
- **shadcn/ui** - Component library
- **Lucide Icons** - Beautiful icons

## 🚢 Deployment

The site is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the main branch will trigger a new build and deployment.

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
bun run build

# Deploy the dist/ folder to your hosting service
```

## 📧 Support

If you need help with this documentation website or the main archiver project:

- 🐛 [Report issues](https://github.com/karstenlee10/Twitch_Stream_To_YouTube/issues)
- 📖 [Read the wiki](https://deepwiki.com/karstenlee10/Twitch_Stream_To_YouTube)
- 💝 [Support the developer](https://streamlabs.com/karsteniee/tips)

## 📄 License

This documentation website is provided as-is for the Twitch Stream to YouTube Archiver project. 

**Please credit the original project** when using: https://bit.ly/archivescript

---

Made with ❤️ for the streaming community