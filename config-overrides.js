const { injectBabelPlugin } = require('react-app-rewired');
const rewireSass = require('react-app-rewire-scss');
const rewireLess = require("react-app-rewire-less");
const rewirePolyfills = require("@baristalabs/react-app-rewire-polyfills");

module.exports = function override(config, env) {
    config = rewireSass(config, env);
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true, }], config);
    config = rewireLess(config, env);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            'primary-color': '#FF3D77',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
        },
        javascriptEnabled: true,
    })(config, env);
    config = rewirePolyfills(config, env);
    config = injectBabelPlugin('babel-plugin-transform-runtime', config);
    // do stuff with the webpack config...
    return config;
}
