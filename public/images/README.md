# Image Assets Directory

This directory contains all image assets for the ADG website.

## Directory Structure

- `/hero/` - Hero section images (hero-background.jpg, hero-featured.jpg)
- `/team/` - Team member photos (team-1.jpg through team-6.jpg)
- `/gallery/` - Gallery images (gallery-1.jpg through gallery-9.jpg)
- `/news/` - News article thumbnails (news-1.jpg through news-6.jpg)
- `logo.png` - ADG organization logo

## Adding Images (Super Easy!)

### Hero Images (Already Set Up!)
Just drop your images into these folders with the correct names:
- `/hero/hero-background.jpg` - Full-width background image
- `/hero/hero-featured.jpg` - Featured image for desktop view
- The images will appear automatically! No JSON editing needed.

### Other Images (Team, Gallery, News)
Currently, the website uses placeholder images via the `via.placeholder.com` service. When you're ready to add real images:

1. **Option 1**: Drop images into the folders (`/team/`, `/gallery/`, `/news/`) and update the JSON files to use local paths
2. **Option 2**: Replace the placeholder URLs in the JSON files with your image URLs
3. Images will automatically fallback to placeholders if files are missing

## Recommended Image Sizes

- **Hero background**: 1920x1080px (landscape, full-width)
- **Hero featured image**: 600x400px (landscape, desktop display)
- **Logo**: 200x200px (square)
- **Team photos**: 400x400px (square, will be displayed as circles)
- **Gallery images**: 800x800px (square or landscape)
- **News thumbnails**: 600x400px (landscape)

## Image Optimization

Next.js automatically optimizes images when using the `Image` component. Ensure all images are:
- In WebP format (optional, Next.js can convert)
- Properly compressed
- Appropriate file sizes for web use

