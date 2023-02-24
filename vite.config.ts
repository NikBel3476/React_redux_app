import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCase'
		}
	},
	base: '/React_redux_app/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				notFound: resolve(__dirname, '404.html')
			}
		}
	}
});
