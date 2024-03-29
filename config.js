const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/pet-adoption'
  }
};

module.exports = config;
