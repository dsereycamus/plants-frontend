import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, './src'),
    //         '@assets': path.resolve(__dirname, './src/Assets'),
    //         '@components': path.resolve(__dirname, './src/Components'),
    //         '@contexts': path.resolve(__dirname, './src/Contexts'),
    //         '@hooks': path.resolve(__dirname, './src/Hooks'),
    //         '@models': path.resolve(__dirname, './src/Models'),
    //         '@routes': path.resolve(__dirname, './src/Routes'),
    //         '@views': path.resolve(__dirname, './src/Views'),
    //     },
    // },
    plugins: [react(), tsconfigPaths()],
})
