/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'https://fakestoreapi.com'
        ],
        remotePatterns: [
			{
				protocol: "http",
				hostname: "**",
			},
			{
				protocol: "https",
				hostname: "**",
			},
		],
    }
};


export default nextConfig;
