import { createWebHistory,createRouter } from "vue-router";
import HomeComp from "./components/HomeComp.vue"
import SignUp from "./components/SignUp.vue"
import SignIn from "./components/SignIn.vue"
const routes=[
    {
    name:"HomeComp",
    path:"/home",
    component:HomeComp
},
    {
    name:"SignUp",
    path:"/signup",
    component:SignUp
},
    {
    name:"SignIn",
    path:"/signin",
    component:SignIn
},

]

const router=createRouter({
    history:createWebHistory()
    ,
    routes
})
export default router