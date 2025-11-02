# Action for Development Group (ADG) Website

A modern, responsive NGO website built with Next.js and Tailwind CSS for Action for Development Group (ADG) in Uganda.

## Features

- 🏠 **Home Page** - Hero section and program overview
- 👥 **About Page** - Mission, vision, values, history, and team
- 🧩 **Programs Page** - Detailed information about ADG's 5 core programs
- 🙌 **Get Involved Page** - Volunteer, partner, and donation opportunities
- 🖼️ **Gallery Page** - Image gallery with latest news
- 📰 **News Page** - Blog posts and updates
- 📞 **Contact Page** - Contact form and location map

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content Management**: JSON files for easy editing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Content Management

All content is stored in JSON files in the `/data` directory for easy editing:

- `content.json` - Organization info, mission, vision, values, history
- `programs.json` - Program descriptions and details
- `team.json` - Team member information
- `news.json` - News articles and blog posts
- `gallery.json` - Gallery images

Simply edit these JSON files to update the website content without touching code.

## Color Theme

- **Primary Blue**: #0077B6
- **Green**: #2D6A4F
- **Dark Blue** (Footer): #003566
- **White**: #FFFFFF

## Image Assets

Placeholder images are currently used throughout the site. To add real images:

1. Add images to `/public/images/` directory
2. Update image paths in the corresponding JSON files
3. Images will automatically use placeholders if missing

See `/public/images/README.md` for more details.

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_CONTACT_EMAIL=info@adg-uganda.org
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
NEXT_PUBLIC_MOBILE_MONEY_PROVIDER=your_provider
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Import the project on Vercel
3. Add environment variables
4. Deploy!

## Project Structure

```
/adg-website
├── /components      # Reusable React components
├── /data           # JSON content files
├── /pages          # Next.js pages
├── /public         # Static assets
├── /styles         # Global CSS
└── config files    # Next.js, Tailwind, etc.
```

## License

Copyright © 2024 Action for Development Group (ADG). All rights reserved.

