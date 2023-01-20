<template>
  <div id="app">
    <!-- <Login v-show="show2" :changePage='changePage'/> -->
    <!-- <Register  v-show="show3" :changePage='changePage'/> -->
    <!-- <Nav v-show="show1" :changePage='changePage'></Nav>
    <router-view v-show="show1"></router-view>
    <CopyRight v-show="show1" :changePage='changePage'></CopyRight>
    <Top v-show="show1" :changePage='changePage'></Top> -->
    <Nav></Nav>
    <router-view></router-view>
    <CopyRight></CopyRight>
    <Top></Top>
  </div>
</template>
<script>
import CopyRight from "components/copyRight";
import Top from "components/top";
import Nav from "components/nav";
import { mapActions } from "vuex";
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";
export default {
  name: "app",
  components: {
    CopyRight,
    Top,
    Nav,
    // Login,
    // Register
  },
  // data(){
  //   return{
  //     show1:false,
  //     show2:true,
  //     show3:false,
  //   }
  // },
  created() {
    this.getLabelList();
  },
  methods: {
    ...mapActions({
      getLabelList: "label/getLabelList",
    }),
    // changePage(i){
    //   if(i===1){
    //     this.show2=true
    //     this.show3=false
    //     console.log('登录')
    //   }
    //   if(i===2){
    //     this.show3=true
    //     this.show2=false
    //     console.log('注册')
    //   }
    //   if(i===3){
    //     this.show1=true
    //     this.show2=false
    //     this.show3=false
    //     console.log('主页')
    //   }
    // },
  },
};
</script>