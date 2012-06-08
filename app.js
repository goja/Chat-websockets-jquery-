load('vertx.js');

var webServerConf = {  
  port: 8081,
  host: 'localhost',
  bridge: true,
  
  permitted: [
  {
      address: 'goja.chat'
  }
  ]
};

vertx.deployVerticle('web-server', webServerConf);