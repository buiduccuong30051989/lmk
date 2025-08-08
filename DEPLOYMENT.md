# 🚀 Deployment Guide - Sổ tay sức khỏe

This guide covers various deployment options for the Health Handbook application.

## 📋 Pre-deployment Checklist

- [ ] All dependencies installed (`pnpm install`)
- [ ] Code passes linting (`pnpm lint`)
- [ ] TypeScript compilation successful (`pnpm build`)
- [ ] All 30 articles displaying correctly
- [ ] Search functionality working
- [ ] Mobile responsiveness tested
- [ ] Performance optimized

## 🛠️ Build Process

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Quality Checks
```bash
# Lint the code
pnpm lint

# Type checking
npx tsc --noEmit

# Format code
pnpm format
```

### 3. Build for Production
```bash
pnpm build
```

This creates an optimized build in the `dist/` directory.

### 4. Preview Build (Optional)
```bash
pnpm preview
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Perfect for React/Vite apps

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first time)
   - Project name: `health-handbook`
   - Directory: `./` (current directory)

4. Your app will be deployed and you'll get a URL like:
   `https://health-handbook-xyz.vercel.app`

**Custom Domain (Optional):**
1. Add your domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL is automatically configured

### Option 2: Netlify

**Steps:**
1. Build the project:
   ```bash
   pnpm build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

**Alternative: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag the `dist/` folder to the deploy area
3. Get instant deployment

### Option 3: GitHub Pages

**Setup:**
1. Create a GitHub repository
2. Push your code to GitHub
3. Add this to `package.json` scripts:
   ```json
   {
     "scripts": {
       "deploy": "pnpm build && npx gh-pages -d dist"
     }
   }
   ```

4. Install gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

5. Deploy:
   ```bash
   pnpm deploy
   ```

6. Enable GitHub Pages in repository settings

### Option 4: Traditional Web Hosting

**For cPanel/shared hosting:**

1. Build the project:
   ```bash
   pnpm build
   ```

2. Upload `dist/` contents to your web server's public folder

3. Configure web server:

   **Apache (.htaccess):**
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   
   # Enable compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/plain
     AddOutputFilterByType DEFLATE text/html
     AddOutputFilterByType DEFLATE text/xml
     AddOutputFilterByType DEFLATE text/css
     AddOutputFilterByType DEFLATE application/xml
     AddOutputFilterByType DEFLATE application/xhtml+xml
     AddOutputFilterByType DEFLATE application/rss+xml
     AddOutputFilterByType DEFLATE application/javascript
     AddOutputFilterByType DEFLATE application/x-javascript
   </IfModule>
   
   # Cache static assets
   <IfModule mod_expires.c>
     ExpiresActive on
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

   **Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

### Option 5: Docker Deployment

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Deploy with Docker:**
```bash
# Build image
docker build -t health-handbook .

# Run container
docker run -p 80:80 health-handbook
```

## 🔧 Environment Configuration

### Environment Variables
Create `.env.production` if needed:
```env
VITE_APP_TITLE="Sổ tay sức khỏe"
VITE_APP_DESCRIPTION="Ghi chép kinh nghiệm chữa bệnh, phòng bệnh và sống lành mạnh"
```

### Build Configuration
Update `vite.config.ts` for production:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this if deploying to subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['gsap']
        }
      }
    }
  }
})
```

## 📊 Performance Optimization

### Pre-deployment Optimization
1. **Analyze Bundle Size:**
   ```bash
   npx vite-bundle-analyzer
   ```

2. **Optimize Images:**
   - Use WebP format for images
   - Compress images before deployment
   - Consider lazy loading for large images

3. **Enable Compression:**
   - Gzip/Brotli compression on server
   - Asset minification (handled by Vite)

### Post-deployment Monitoring
1. **Performance Testing:**
   - Use Google PageSpeed Insights
   - Test on mobile devices
   - Check Core Web Vitals

2. **Lighthouse Audit:**
   ```bash
   npx lighthouse https://your-domain.com
   ```

## 🔒 Security Considerations

### Content Security Policy
Add to your server configuration:
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;
```

### HTTPS Configuration
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS headers for security

## 🚨 Troubleshooting

### Common Issues

**1. Blank page after deployment:**
- Check browser console for errors
- Verify base path in `vite.config.ts`
- Ensure server serves `index.html` for all routes

**2. Assets not loading:**
- Check asset paths in build
- Verify server configuration for static files
- Check CORS headers if needed

**3. Search not working:**
- Verify JavaScript is enabled
- Check for console errors
- Test data integrity with validation script

### Health Check Script
```bash
#!/bin/bash
echo "🏥 Health Handbook Deployment Check"
echo "=================================="

# Check if site is accessible
curl -I https://your-domain.com

# Check specific endpoints
curl -s https://your-domain.com | grep -q "Sổ tay sức khỏe" && echo "✅ Title found" || echo "❌ Title missing"

# Check for main assets
curl -I https://your-domain.com/assets/ 2>/dev/null | head -1

echo "Health check complete!"
```

## 📞 Support

If you encounter issues during deployment:

1. Check the console for detailed error messages
2. Verify all dependencies are correctly installed
3. Test the build locally with `pnpm preview`
4. Check server logs for any errors
5. Ensure proper file permissions on your server

## 🎯 Deployment Recommendations

**For Production:**
- Use Vercel or Netlify for best performance
- Enable CDN and compression
- Set up monitoring and analytics
- Configure custom domain with SSL
- Regular backups of content

**For Development/Staging:**
- Use preview deployments
- Test on multiple devices
- Validate all content displays correctly
- Performance testing on slower connections

---

**🎉 Congratulations!** Your Health Handbook is now live and helping people with valuable health information.

Remember to keep the content updated and always include medical disclaimers advising users to consult healthcare professionals.
