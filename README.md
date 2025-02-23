This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
project-root/
├── app/
│   ├── page.tsx           # Homepage with featured donuts
│   ├── menu/             # Donut menu pages
│   ├── cart/             # Shopping cart functionality
│   ├── orders/           # Order management
│   └── account/          # User account pages
├── components/           # Reusable components
│   ├── DonutCard/        # Individual donut display
│   ├── Cart/             # Cart components
│   └── Layout/           # Common layout components
├── public/              # Static assets (images, icons)
└── styles/             # CSS and styling files
```

## Features

- Browse our delicious selection of artisanal donuts
- Real-time inventory tracking
- Secure shopping cart and checkout
- User accounts for order history
- Special offers and seasonal menu items
- Custom donut box builder
- Local delivery and pickup options

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16.x or higher)
- npm or yarn or pnpm or bun

## Installation

1. Clone the repository:

```bash
git clone [your-donut-shop-repo-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_key_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key_here
DATABASE_URL=your_database_url_here
```
