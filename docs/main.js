import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import '../css/style.css'
import { VCodeBlock } from '@wdns/vue-code-block';

const app = createApp(App)

app.component('VCodeBlock', VCodeBlock);
app.use(router)
app.mount('#app')
