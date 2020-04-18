// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const dist = 'dist';

export default {
    input: 'src/index.js',
    output: [
        {
            file: `${dist}/bundle.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/bundle.esm.js`,
            format: 'esm'
        },
        {
            name: '@killerwink/react-lottie-color',
            file: `${dist}/bundle.umd.js`,
            format: 'umd',
            globals: {
                'hex-rgb': 'hex-rgb'
            },
        },
    ],
    plugins: [
        json(),
        resolve({
            extensions: ['.js', '.jsx', '.json']
        }),
        commonjs({
            include: /node_modules/
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
        })
    ],
    external: [
        'hex-rgb'
    ]
};
