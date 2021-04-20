import Vue from 'vue'
import App from './App'

// ColorUi 顶部导航栏组件
import top from "./colorui/components/cu-custom.vue";
Vue.component("tops", top);
// 预约
import vaccine from "./pages/vaccine/vaccine.vue";
Vue.component("vaccine", vaccine);

// 咨询
import message from "./pages/message/message.vue";
Vue.component("message", message);

// 个人中心页面
import person from "./pages/person/person.vue";
Vue.component("person", person);

// 二级页面顶部导航栏
import navTop from "./pages/navTop/navTop.vue";
Vue.component("navtop", navTop);

// 一级页面顶部导航栏
import pageTop from "./pages/navTop/pageTop.vue";
Vue.component("pagetop", pageTop);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
