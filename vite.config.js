import react from '@vitejs/plugin-react';
import { transformWithEsbuild } from 'vite';
import restart from 'vite-plugin-restart';

export default ({ mode }) => ({
    base: '/amirulilmanportfolio24/',
    root: 'src/',
    publicDir: '../public/',
    plugins: [
        // Restart server on static/public file change
        restart({ restart: ['../public/**'] }),

        // React support
        react(),

        // .js file support as if it was JSX
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) return null;
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],
    server: {
        host: true, // Open to local network
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env), // Open browser unless in sandbox
    },
    build: {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: mode === 'development', // Enable sourcemaps only in development
        chunkSizeWarningLimit: 500, // Default chunk size warning limit
        rollupOptions: {
            output: {
                manualChunks: {
                    // Chunk splitting for vendor libraries
                    vendor: ['react', 'react-dom', 'three', '@mui/material'],
                },
            },
        },
    },
});
