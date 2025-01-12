const path = require('path');

module.exports = {
    // Cấu hình chính
    entry: './src/index.js',  // Điểm vào của ứng dụng
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'], // Sử dụng SVGR để chuyển đổi SVG thành React components
            },
            // Các loader khác (như babel, css, v.v.) có thể được thêm ở đây
        ],
    },
};