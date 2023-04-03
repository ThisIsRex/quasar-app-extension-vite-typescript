import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

declare const __dirname: string;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        vue(),
        typescript2({
            check: false,
            include: ['src/components/**/*.vue'],
            useTsconfigDeclarationDir: true,
            exclude: ['vite.config.ts', 'debug'],
        }) as unknown as PluginOption,
        dts({
            insertTypesEntry: true,
            outputDir: 'types',
        }),
    ],
    build: {
        cssCodeSplit: true,

        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: 'src/index.ts',
            name: 'xComponents',
            formats: [
                'es',
                'cjs',
                'umd'     //из-за него нельзя сгенерить несколько css файлов
            ],
            fileName: (format) => `index.${format}.js`,
        },

        rollupOptions: {
            // make sure to externalize deps that should not be bundled
            // into your library
            input: {
                main: path.resolve(__dirname, 'src/index.ts'),
            },
            external: ['vue', 'quasar', '@quasar/extras'],
            output: {
                //inlineDynamicImports: false,
                assetFileNames: (assetInfo) => assetInfo.name,
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'ui-components': path.resolve(__dirname, 'src/components'),
        },
    },
});
