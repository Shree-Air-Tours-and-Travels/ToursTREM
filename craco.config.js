const { container } = require("webpack");
const moduleFederationConfig = require("./modulefederation.config");

module.exports = {
    devServer: (devServerConfig) => {
        devServerConfig.proxy = {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
                secure: false,
                ws: false,
            },
        };
        devServerConfig.client = {
            ...(devServerConfig.client || {}),
            overlay: {
                ...(devServerConfig.client?.overlay && typeof devServerConfig.client.overlay === "object"
                    ? devServerConfig.client.overlay
                    : {}),
                runtimeErrors: false,
            },
        };
        devServerConfig.headers = {
            ...(devServerConfig.headers || {}),
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        };
        return devServerConfig;
    },
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.output.publicPath = "auto";
            webpackConfig.output.uniqueName = moduleFederationConfig.name;
            webpackConfig.optimization.runtimeChunk = false;
            webpackConfig.plugins.push(new container.ModuleFederationPlugin(moduleFederationConfig));
            return webpackConfig;
        },
    },
};
