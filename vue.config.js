module.exports = {
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8080, // Change your port here if needed
      https: true,
    },
  };
  