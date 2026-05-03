const deps = require("./package.json").dependencies;

module.exports = {
    name: "toursTREM",
    filename: "remoteEntry.js",
    exposes: {
        "./ToursApp": "./src/App.jsx",
    },
    shared: {
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
        },
    },
};
