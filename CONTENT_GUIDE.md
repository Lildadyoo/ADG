# Content Update Guide

This guide explains how to update the website content using JSON files.

## Quick Content Updates

All website content is stored in JSON files in the `/data` directory. Simply edit these files to update the website without touching any code.

### Files Overview

#### `content.json`
Contains:
- Organization name, slogan, address, contact info
- Mission statement
- Vision statement  
- Values (title and description for each)
- Organization history

**To update:** Edit the values directly in this file.

#### `programs.json`
Contains:
- List of all 5 programs
- Each program has: id, title, description, icon

**To update a program:** 
1. Find the program by title or id
2. Edit the description (keep it between 80-100 words)
3. Icon options: `community`, `child`, `water`, `education`, `empowerment`

#### `team.json`
Contains:
- Team member list
- Each member has: id, name, role, image URL

**To add/update team members:**
1. Add or edit entries in the `team` array
2. Update image URLs (currently using placeholder URLs - replace with your image URLs or local paths like `/images/team/photo.jpg`)

#### `news.json`
Contains:
- News articles/blog posts
- Each article has: id, title, excerpt, date, thumbnail URL, category

**To add news:**
1. Add a new object to the `news` array
2. Use format: `"date": "YYYY-MM-DD"`
3. Update thumbnail URL (currently placeholders - replace with your image URLs)

#### `gallery.json`
Contains:
- Gallery images
- Each image has: id, src (URL), alt text, caption

**To update gallery:**
1. Edit the `images` array
2. Replace placeholder URLs with your image URLs or local paths
3. Update alt text and captions as needed

## Replacing Placeholder Images

Currently, all images use placeholder URLs from `via.placeholder.com`. To use real images:

### Option 1: Use Local Images
1. Add images to `/public/images/` directory
2. Update JSON files with paths like `/images/team/photo.jpg`

### Option 2: Use External URLs
1. Upload images to your hosting/CDN
2. Update JSON files with the full image URLs

### Image Recommendations
- **Team photos**: 400x400px (square)
- **Gallery images**: 800x800px (square) or landscape
- **News thumbnails**: 600x400px (landscape)
- **Logo**: 200x200px (square)

## Contact Information

Update contact details in `content.json` under `organization`:
```json
{
  "organization": {
    "phone": "+256 XXX XXX XXX",
    "email": "info@adg-uganda.org",
    "address": "Lyantonde District, Uganda"
  }
}
```

## After Making Changes

1. Save the JSON file
2. The development server will automatically reload
3. Refresh your browser to see changes

## Tips

- Keep descriptions concise and engaging
- Use proper JSON syntax (commas, quotes)
- Validate JSON before saving (use a JSON validator if unsure)
- Back up JSON files before making major changes
- Test changes in the browser after updating

