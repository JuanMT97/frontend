//const fs = require('fs')

module.exports = {
    devServer: {
      //open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 80,
      //https: false,   //CAMBIAR A TRUE SI QUIERO USAR NETWORK
      //https: { 
      //          key: fs.readFileSync('/etc/letsencrypt/live/tpso.duckdns.org/privkey.pem'),
      //          cert: fs.readFileSync('/etc/letsencrypt/live/tpso.duckdns.org/fullchain.pem') },
      //hotOnly: false,
      public: 'tpso.duckdns.org',
      //public: 'https://tpso.duckdns.org/',
    },
  }