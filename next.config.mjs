// next.config.mjs

import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your custom Next.js config
};

const withPWA = nextPwa({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

export default withPWA(nextConfig);
