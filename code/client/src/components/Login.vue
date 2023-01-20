<template>
    <div id="bg">
        <p id="notebook">HELLO BLOG</p>
        <div id="box">
            <div id="ti">
                <div>登录</div>
                <div @click="changePage(2)">注册</div>
            </div>
               <hr>
            <div id="hang">用户名：<input type="text" v-model="login.username"></div>
            <div id="hang">密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" v-model="login.password"></div>
            <button @click="doLogin" id="btn">登录</button>
        </div>
    </div>
</template>

<script> 
// import {nanoid} from 'nanoid'
import md5 from '../store/md5'
import store from '../store/store'

    export default{
        name:'Login',
        props:['changePage'],
        data(){
            return{
                login:{
                    username:'',
                    password:'',
                },
                store,
            }
        },
        methods:{
            doLogin(){
                this.changePage(3)
                // let flag = 0
                // if(!this.login.username || !this.login.password){
                //     alert('请输入用户名和密码')
                //     return
                // }
                // this.store.getData(this.login.username,this.login.password)
                //     .then(data=>{
                //         // console.log('data=',data)
                //         if(data.id ===  this.login.username && data.password === md5(this.login.password)){
                //             flag = 1
                //         }
                //         console.log('flag=',flag)
                //         if(flag == 1){
                //             //跳转到主页  这个方法更慢 读不到当前的username
                //             // localStorage.setItem("username",this.login.username)
                //             this.Name(this.login.username)
                //             alert('登录成功')
                //             this.changePage(3)
                //         }else{
                //             alert('用户名或密码输入错误，请重新输入！若不存在账号，请注册！') 
                //         } 
                //     })
                //     .catch(err=>{
                //         alert('用户名或密码错误')
                //         // console.log(err.message)
                //     })
            },
            
        }

    }
</script>

<style>
#bg{
    background-image: url(../images/bg.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    overflow: auto;
}

#box{
    width: 320px;
    border: 2px solid #5fed63;
    margin: auto;
    border-radius: 20px;
    background-color: rgb(0,0,0,0.2);
  /*  background-color: rgb(0,0,0,0.2);
    backdrop-filter: blur(8px);*/
}

#hang{
    margin: 20px 20px 20px 20px;
    color: rgb(255,255,255,1);
}

input{
    outline: none;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: #889aa4;
    height: 30px;
    vertical-align: middle;
    color: #eee;
}

#btn{
    text-align: center;
    margin-left: 120px;
    margin-top: 5px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    border: none;
    color: rgb(255,255,255,1);
    padding: 5px 25px;
    margin-bottom: 20px;
    font-size: 18px;
    border-radius: 15px;
}

button:active{
    transform: scale(0.9);
}

#notebook{
   /* margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 8px;
    font-size: 24px;
    color: black;*/
    color: #82e482;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}

#ti{
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    font-size: 24px;
    color: white;
}

#notebook{
    font-size: 40px;
    margin: 20px 20px;
    font-family: "Times New Roman", Times, serif;
}
</style>