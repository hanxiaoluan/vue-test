module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '^.+\\.vue$': 'vue-jest'
    },
    collectCoverage: true,
    coverageProvider: 'v8',
    moduleFileExtensions: [
        'js',
        'json',
        'jsx',
        'ts',
        'tsx',
        'node'
    ]

}

