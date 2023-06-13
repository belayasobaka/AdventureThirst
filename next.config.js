const {images} = require("next/dist/build/webpack/config/blocks/images");
const domain = require("domain");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
}
}

module.exports = nextConfig
