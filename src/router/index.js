import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import liuHome from "./liuHome"
import mulu from "./mulu"
import sousuo from "./sousuo"
import tuijian from "./tuijian"
import xiangqingye from "./xiangqingye"
export default new Router({
    routes: [
        liuHome,
        mulu,
        sousuo,
        tuijian,
        xiangqingye
    ]
})