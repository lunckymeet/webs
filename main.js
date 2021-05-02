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

// 分类
import classkind from "./pages/classkind/classkind.vue";
Vue.component("classkind", classkind);

// 修改个人资料
import updateMessage from "./pages/updateMessage/updateMessage.vue";
Vue.component("updateMessage", updateMessage);

// 聊天
import consulting from "./pages/consulting/consulting.vue";
Vue.component("consulting", consulting);

// 个人中心页面
import person from "./pages/person/person.vue";
Vue.component("person", person);

// 身份证识别页面
import Identification from "./pages/Identification/Identification.vue";
Vue.component("Identification", Identification);

// 历史订单页面
import order from "./pages/order/order.vue";
Vue.component("order", order);

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
