module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0-shard-00-00.funpv.mongodb.net?ssl=true&replicaSet=atlas-cse6vh-shard-0&authSource=admin&retryWrites=true'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'iago'),
        password: env('DATABASE_PASSWORD', 'crudehumor'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
