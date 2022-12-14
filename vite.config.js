import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/

import cesium from 'vite-plugin-cesium'
export default defineConfig({
	plugins: [vue(), cesium()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
