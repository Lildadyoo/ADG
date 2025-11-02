# Troubleshooting Guide

## Changes Not Showing in Browser?

### Quick Fixes (in order):

1. **Hard Refresh Browser**
   - Windows: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`
   - This clears browser cache and forces a reload

2. **Restart Dev Server**
   ```bash
   # Stop the server (Ctrl + C)
   # Then restart:
   npm run dev
   ```

3. **Clear Next.js Cache**
   ```bash
   # Delete .next folder
   rm -rf .next
   # Or on Windows PowerShell:
   Remove-Item -Recurse -Force .next
   
   # Then restart dev server
   npm run dev
   ```

4. **Clear Browser Cache Completely**
   - Open browser DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

5. **Check Browser Console**
   - Open DevTools (F12)
   - Check Console tab for errors
   - Check Network tab if images aren't loading

### Common Issues:

**Images not showing:**
- Make sure images are in `/public/images/hero/` folder
- Check file names match exactly: `hero-background.jpg`
- Verify image paths in `data/hero.json`

**Styling not updating:**
- Hard refresh browser (Ctrl+Shift+R)
- Check if Tailwind CSS is compiling (watch terminal output)
- Restart dev server

**Component not updating:**
- Save all files (Ctrl+S)
- Wait a few seconds for hot reload
- Check terminal for compilation errors
- Restart dev server if needed

### Still Not Working?

1. Check if dev server is running: Look for "Ready" message in terminal
2. Check the correct port: Usually `http://localhost:3000`
3. Check for errors in terminal or browser console
4. Make sure all dependencies are installed: `npm install`

