// import { reactive } from 'vue'
// import md5 from '../store/md5'
// // import {nanoid} from 'nanoid'

// const url = "http://123.60.44.50:3000"
// // const url = "http://127.0.0.1:8080"
// const key = "users"

// const myHeaders = new Headers()
// myHeaders.append("Content-Type", "application/json")
// let requestOptions = { // 里面不能有body
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// }

// export default reactive({
//     userData:{},
   
//     getData(id,pwd){
//         if(!id || !pwd){
//             return new Promise(()=>{throw new Error('无效的用户')})
//         }
//         requestOptions.method = "GET"
//         delete requestOptions.body
//         return fetch(`${url}/${key}`, requestOptions)
//         .then(response => response.json())
//         .then(data => {
//             for(let i=0;i<data.length;i++){
//                 if (data[i].id ===  id && data[i].password === md5(pwd)) {
//                     // localStorage.setItem("username",id)
//                     let a = data[i]
//                     // console.log('data[i]=',a)
//                     return a
//                 }
//             }

//          })
//         .catch(err => console.log(err))
//     },

//     saveData(){
//         if(!this.userData || !this.userData.id){
//             if(!id){
//                 throw new Error('id为空!')
//             }
//         }
//         requestOptions.method = "PUT"
//         requestOptions.body = JSON.stringify(this.userData)
//         return fetch(`${url}/${key}/${this.userData}`, requestOptions)
//     },

//     createUser(id,pwd,nam,emai,pho,gen){
//         let flag=0
//         requestOptions.method = "GET"
//         delete requestOptions.body
//         return fetch(`${url}/${key}`, requestOptions)
//             .then(response=>response.json())
//             .then(data => {
//                 for(let i = 0;i<data.length;i++){
//                     if(data[i].id === id){
//                         console.log('注册已有账户')
//                         flag=1
//                         alert('存在该用户名，无需注册，请登录')
//                         break
//                     }
//                 }
//                 if(flag===0){
//                     requestOptions.method = "POST"
//                     requestOptions.body = JSON.stringify({
//                         id:id,
//                         password:md5(pwd),
//                         nickname:nam,  
//                         email:emai,
//                         phone:pho,
//                         gender:gen,
//                         notelist:{
//                             nanoid:'',
//                             author:id,
//                             title: '',  
//                             text: '',
//                             edit:true,
//                             createTime:'', 
//                             updateTime:''
//                         }
//                     })
//                     alert('注册成功！！！')
//                     return fetch(`${url}/${key}`, requestOptions)
//                 }
//             })
           
//     },

//     changeUser(id,pwd,nick,pho){
//         requestOptions.method = "PATCH"
//         const userDatas = {
//           id: id,  // id可省略，因为网址中有id
//           password: md5(pwd),
//           nickname: nick,
//           phone:pho,
//         //   email:emai,
//         //   gender:gen,
//         }
//         console.log('userDatas=',userDatas)
//         requestOptions.body = JSON.stringify(userDatas); //将数据字符串化
//         return fetch(`${url}/${key}/${id}`, requestOptions)
//         .then(response => console.log("保存数据成功"))
//         .catch(err => console.log(err));
//     },

//     conceluser(id){
//         requestOptions.method='DELETE'
//         return fetch(`${url}/${key}/${id}`, requestOptions)
//         .then(response => response.json())
//         .then(result => console.log('删除数据成功'))
//         .catch(err => console.log(err))
//     },

//     saveit(nano,id,title,text){
//         requestOptions.method = "PATCH"
//         const userDatas = {
//             notelist:{
//                 nanoid:nano,
//                 author:id,
//                 title: title,  
//                 text: text,
//                 edit:true,
//                 createTime:'', 
//                 updateTime:''
//             }
//         }
//         console.log('userDatas=',userDatas)
//         requestOptions.body = JSON.stringify(userDatas); //将数据字符串化
//         return fetch(`${url}/${key}/${id}`, requestOptions)
//         .then(response=>response.json())
//         .then(data=> {
//             console.log("保存数据成功")
//             console.log('data.length=',data.length)
//         })
//         .catch(err => console.log(err)); 
//     },

// })