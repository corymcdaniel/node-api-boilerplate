module.exports = {
  env: 'development',
  db: {
    mongo: 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/warp-dev',
  },
  port: 3300,
  clientUrl: 'http://localhost:3000',
  facebook: {
    appId: '',
    secret: '',
    callback: 'http://localhost:3300/v1/auth/facebook/callback'
  }
};
