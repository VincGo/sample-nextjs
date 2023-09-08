/** @type {import('next').NextConfig} */
const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
});

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '_styles')],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com'
            },
        ]
    }
}

module.exports = nextConfig
