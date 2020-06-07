module.exports = function (api) {
    api.cache(false)

    const presets = [
        "@babel/preset-react",
        ["@babel/preset-env", {
            "useBuiltIns": "entry"
        }]
    ]
    const plugins = [
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-syntax-object-rest-spread",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-syntax-dynamic-import"
    ]

    return {
        presets,
        plugins
    }
}