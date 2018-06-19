const nconf = require('nconf');

nconf.argv().env();

// Override with specific environment config
const envConf = nconf.get('NODE_ENV');
if (envConf && envConf !== 'development') {
    nconf.file('override', `src/config/${nconf.get('NODE_ENV')}.json`);
}

// Base configuration for all environments
nconf.file('default', 'src/config/development.json');

module.exports = nconf;