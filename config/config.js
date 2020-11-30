const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://taskapp:d3mydreamworld@cluster0.nu9xh.mongodb.net/mernecommerce?authSource=admin&replicaSet=atlas-itjizv-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true',
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key'
}

export default config
