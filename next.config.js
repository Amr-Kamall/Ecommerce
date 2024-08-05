// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "products.com",
      "images.pexels.com",
      "img.freepik.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "i.imgur.com",
      "www.google.com",
      "placeimg.com",
      "api.escuelajs.co",
      "www.gravatar.com",
      "imgur.com",
      "api.lorem.space",
      "fakestoreapi.com",
      "contoh.com",
    ],
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_FRONTEND_API_KEY:
      process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_KEY,
  },
};

module.exports = nextConfig;
