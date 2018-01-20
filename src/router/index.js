import Vue from 'vue'
import VueRouter from 'vue-router'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter);
var router = new VueRouter({
    routes:[{
        path:'/',
        component:Foo
    },{
        path:'/Bar',
        component:Bar
    }]
});

export default router;