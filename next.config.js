module.exports = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://mempool.space/api/:path*"
            }
        ];
    }
};
