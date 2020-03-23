<template>
  <div>
    <div class="block" >

      <el-rate v-model="value1"  :allow-half="true"></el-rate>
    </div>
    <div v-text="count=value1*2===0?'':value1*2"></div>
    <router-link to="/miaosha">秒杀</router-link>
    <router-link to="/hottui">热门推荐</router-link>
    <router-link to="/xiang">产品详情</router-link>
    <h1>axios请求</h1>
    <div>
      <el-button type="primary" @click="userLogin">登录</el-button>
      <el-button type="primary" @click="getUser">获取用户</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "caseSix",
    data (){
      return {
        value1:0,
        count:'',
        user: {},
        token: ''//token,可以放VUEX，本地存储等
      }
    },
    mounted(){
      this.value1=1
    },

    methods:{
      userLogin (){
        let that = this;
        this.$axios.post('/api/user/login',
                this.qs.stringify({
                  usernameOrTel: 'lisi',
                  password: '123'
                })
        )
                .then((res)=>{
                  console.log(res)
                  console.log(res.headers)
                  // 获取token，并存储

                  sessionStorage.setItem('token',res.headers['authenticate'])
                })
                .catch((res)=>{
                  console.log(res)
                })

      },
      getUser(){
        this.$axios.get('/api/user'
                // ,
                // {
                //     headers: {
                //         //后端自验证token的有效期，失效时，就不能正常调用 接口。
                //         // 'authenticate': this.token
                //         'authenticate': sessionStorage.getItem('token')
                //     }
                // }
        )
                .then((res)=>{
                  console.log(res)
                  if(res.data.code === 200){
                    alert(res.data.msg);
                  }
                })
                .catch((res)=>{
                  console.log(res)
                })
      }
    },

  }
</script>

<style scoped>

</style>