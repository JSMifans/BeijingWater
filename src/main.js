import { createApp } from 'vue'
import './style.css'
import './utils.scss'
import App from './App.vue'
import router from './router/index'
import Fit from 'vue-fit-next'

const app = createApp(App)
app.use(router)
app.use(
	Fit({
		width: 7680,
		height: 2160,
		mode: 'zoom', // 可选， 支持 scale 和 zoom 两种方案，默认为 scale
	})
)
app.mount('#app')
