const rewireSass = require('react-app-rewire-scss');
const rewireLess = require("react-app-rewire-less-modules");

module.exports = function override(config, env) {
    config = rewireSass(config, env);
    // TODO
    // config = rewireLess(config, env);
    //do stuff with the webpack config...
    // config = rewireLess.withLoaderOptions({
    //     modifyVars: {
    //       "@primary-color": "#1890ff",
    //     },
    //   })(config, env);
    return config;
}
