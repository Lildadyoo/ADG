# Image Assets Directory

This directory contains all image assets for the ADG website.

## Directory Structure

- `/team/` - Team member photos (team-1.jpg through team-6.jpg)
- `/gallery/` - Gallery images (gallery-1.jpg through gallery-9.jpg)
- `/news/` - News article thumbnails (news-1.jpg through news-6.jpg)
- `logo.png` - ADG organization logo

## Placeholder Images

Currently, the website uses placeholder images via the `via.placeholder.com` service. When you're ready to add real images:

1. Replace the placeholder URLs in the JSON files (`data/team.json`, `data/gallery.json`, `data/news.json`)
2. Or upload images to these directories and update the paths in the JSON files
3. Images will automatically fallback to placeholders if files are missing

## Recommended Image Sizes

- **Logo**: 200x200px (square)
- **Team photos**: 400x400px (square, will be displayed as circles)
- **Gallery images**: 800x800px (square or landscape)
- **News thumbnails**: 600x400px (landscape)

## Image Optimization

Next.js automatically optimizes images when using the `Image` component. Ensure all images are:
- In WebP format (optional, Next.js can convert)
- Properly compressed
- Appropriate file sizes for web use

