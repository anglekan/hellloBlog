<template>
    <div id="bg">
        <p id="notebook">HELLO BLOG</p>
        <div id="box">
            <div id="ti">
                <div>注册</div>
                <div @click="changePage(1)">登录</div>
            </div>
               <hr>
            <!-- <div id="hang">id号：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="id"></div> -->
            <div id="hang">用户名：<input type="text" v-model="register.username"></div>
            <div id="hang">密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" v-model="register.password"></div>
            <div id="hang">确认密码:<input type="password" v-model="register.confirmPassword"></div>
            <div id="hang">电子邮件:<input type="text" v-model="register.email"></div>
            <div id="hang">昵称：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="register.nickname"></div>
            <div id="hang">电话号码:<input type="text" v-model="register.phone"></div>
            <!-- <div id="hang">性别：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="register.gender"></div> -->
            <div id="hang gender" style="font-size:18px;color:white;margin-left:20px">性别：<input type="radio" name="gender" value="male" v-model="register.gender" style="width:18px;height:18px;margin-left:30px">男&nbsp;&nbsp;
            <input type="radio" name="gender" value="female" v-model="register.gender" style="width:18px;height:18px;margin-left:30px">女</div>
            <button @click="doSignup" id="btn">注册</button>
        </div>
    </div> 
</template>

<script> 
import store from '../store/store'

    export default{
        name:'Register',
        props:['changePage'],
        data(){
            return{
                register:{
                    username:'',
                    password:'',
                    confirmPassword:'',
                    nickname:'',
                    email:'',
                    phone:'',
                    gender:'',
                },
                store
            }
        },
        methods:{
            doSignup(){
                console.log('创建成功')
                // if(!this.register.username || !this.register.password || !this.register.email){
                //     alert('用户名或密码或电子邮件为空')
                //     return
                // }
                // if(this.register.password !== this.register.confirmPassword){
                //     alert('密码不一致')
                //     return
                // }
                // this.store.createUser(this.register.username,this.register.password,this.register.nickname,this.register.email,this.register.phone,this.register.gender)
                //     .then(data=>{
                //         console.log('data=',data)
                //         document.location.href='./Login.vue'
                //     })
                //     .catch(err=>{
                //         console.log('err.message')
                //     })
            }
        }
    }
</script>