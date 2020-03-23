<template>
<el-container>
    <el-header :style="{'background-image':`url(${hot.bgimgUrl})`}"></el-header>
    <el-main :style="{'background-color':hot.bgcolor}">
        <el-row class="typebox" v-if="hot.title!=undefined" v-for="(item,index) in hot.title" :key="index">
            <el-col :span="24" >
                <el-row>
                <el-tag
                        v-for="(item,i) in hot.title"
                        :key="i"
                        effect="dark" >
<!--                    <a href="#">0</a>-->

                   <a  class="titlemaodian" :href="'#'+item.miaoname" >{{item.label }}</a>

                    <span v-if="i==index" style="border-top: 10px solid #078DE2;"></span>
                </el-tag>
                </el-row>
<!--                <a href="#liu" style="color: white;font-size: 30px">刘</a>-->
                <el-row class="booklistboxmargin">
                    <el-col :span="18" :offset="3">
                        <div class="remainbook">
                            <div v-for="item in databook[index]" :key="item.id">
                                <div class="bookimgbox">
                                    <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
<!--                                    <div class="miaoshatextbox">-->
<!--                                        <img src="../assets/images/miaosha/msth1.png" alt="">-->
<!--                                        <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>-->
<!--                                    </div>-->
                                </div>

                                <h3>
                                    <router-link to="#" v-text="item.name"></router-link>
                                </h3>
                                <div>
                                    <span>￥<span v-text="item.shopPrice"></span></span>
                                    <del>￥<span v-text="item.sourcePrice"></span></del>
                                </div>
                                <div>
                                    <span :style="{'background-color':hot.button}"><i class="el-icon-shopping-cart-full"></i>立即抢</span>
                                </div>
                            </div>
                        </div>
                    </el-col>

                </el-row>
            </el-col>
        </el-row>
         <el-row v-else>
             <el-row>
                 <el-col :span="18" :offset="3">
                     <div class="remainbook">
                         <div v-for="item in databook" :key="item.id">
                             <div class="bookimgbox">
                                 <router-link to="#"><img :src="item.imgUrl" alt=""></router-link>
                                 <!--                                    <div class="miaoshatextbox">-->
                                 <!--                                        <img src="../assets/images/miaosha/msth1.png" alt="">-->
                                 <!--                                        <div class="miaoshatext"><span>秒杀</span><span>特惠</span></div>-->
                                 <!--                                    </div>-->
                             </div>

                             <h3>
                                 <router-link to="#" v-text="item.name"></router-link>
                             </h3>
                             <div>
                                 <span>￥<span v-text="item.shopPrice"></span></span>
                                 <del>￥<span v-text="item.sourcePrice"></span></del>
                             </div>
                             <div>
                                 <span :style="{'background-color':hot.button}"><i class="el-icon-shopping-cart-full"></i>立即抢</span>
                             </div>
                         </div>
                     </div>
                 </el-col>

             </el-row>
         </el-row>
    </el-main>
</el-container>
</template>

<script>

    export default {
        name: "HotTui",
        data () {
            return {
                hot: {type:'流浪地球',bgimgUrl:require('../assets/images/hottui/hotbt.jpg'),bgcolor:'#284776',
                    title:[{label:'刘慈欣',titleId:0,miaoname:'liu'}, {label:'宇宙从何而来',titleId:1,miaoname:'yu'},
                        {label:'银河帝国',titleId:2,miaoname:'yin'}
                    ],bookdata:[
                               { name: "三体全集",
                                imgUrl: require("../assets/images/hottui/hot-dq1.jpg"),
                                   description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 0,titleId:0},
                            { name: "三体",
                                imgUrl: require("../assets/images/hottui/hot-dq2.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 1,titleId:0},
                            { name: "三体Ⅲ:死神永生 刘慈欣作品（3）",
                                imgUrl: require("../assets/images/hottui/hot-dq3.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 2,titleId:0},
                            { name: "三体2 黑暗森林 刘慈欣作品",
                                imgUrl: require("../assets/images/hottui/hot-dq4.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 3,titleId:0},
                            { name: "流浪地球",
                                imgUrl: require("../assets/images/hottui/hot-dq5.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 4,titleId:0},
                            { name: "宇宙从何而来/傅渥成",
                                imgUrl: require("../assets/images/hottui/hot-dq6.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 5,titleId:1},
                            { name: "漫步到宇宙尽头",
                                imgUrl: require("../assets/images/hottui/hot-dq7.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 6,titleId:1},
                            { name: "极简科学起源课",
                                imgUrl: require("../assets/images/hottui/hot-dq8.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 7,titleId:1},
                            { name: "人的脑洞略大于整个宇宙",
                                imgUrl: require("../assets/images/hottui/hot-dq9.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 8,titleId:1},
                            { name: "七堂极简物理课",
                                imgUrl: require("../assets/images/hottui/hot-dq10.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 9,titleId:1},
                            { name: "银河帝国（银河帝国）百万册全新纪念",
                                imgUrl: require("../assets/images/hottui/hot-dq11.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 10,titleId:2},
                            { name: "银河帝国（机器人五部曲）",
                                imgUrl: require("../assets/images/hottui/hot-dq12.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 11,titleId:2},
                            { name: "银河帝国（帝国三部曲）",
                                imgUrl: require("../assets/images/hottui/hot-dq13.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 12,titleId:2},
                            { name: "银河帝国·基地七部曲(共7册)",
                                imgUrl: require("../assets/images/hottui/hot-dq14.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 13,titleId:2},
                            { name: "银河帝国大全集(15册)",
                                imgUrl: require("../assets/images/hottui/hot-dq15.jpg"),
                                description: "",
                                shopPrice: 16.2, sourcePrice: 30.0, id: 14,titleId:2},


                            ],button:'#3E5984',hotId:0},


                databook:[],
                titlecount:'',


            }
        },
        mounted(){

            let title=this.hot.title
            let titlecount=title.length

            if (title!=false){
            this.titlecount=title.length
            }
            let booklist=this.hot.bookdata
            let titlemaodian=document.getElementsByClassName('titlemaodian')
            let typebox=document.getElementsByClassName('typebox')
            let tag=document.getElementsByClassName('el-tag')
            for (let i=0;i<title.length;i++){
                for (let j=0;j<title.length;j++){
                    if (i===j){
           let ele= typebox[i].children[0].children[0].children[i]
                        ele.children[0].setAttribute('name',title[i].miaoname)
                        ele.children[0].style.color='#FFFC00'
                        ele.children[0].style.backgroundColor='#078DE2'

                    }
                }
            }

            for (let j=0;j<titlemaodian.length;j++){//标题锚点的设置

            }
            for (let i=0;i<titlecount;i++){//获取页面的书籍数据
                let temp=[]

                for (let k=0;k<booklist.length;k++){
                    // console.log(temp)
                    if (title[i].titleId===booklist[k].titleId){

                      temp.push(booklist[k])
                    }
                }
                this.databook.push(temp)
                // console.log(temp)

            }
            // console.log(this.databook)
        },


        methods: {

        }

    }
</script>

<style scoped lang="less">
.el-header{
    width: 100%;
    height: 400px!important;
    /*background-image: url("../assets/images/hottui/hotbt.jpg");*/
    background-position: center;
}
.el-main{
/*height: 1000px;*/
}
    .el-tag{
        margin: 0 5px;
        width: 140px!important;
        height: 50px!important;
        line-height: 50px;
        position: relative;
        padding: 0px;

        &>a{
            display: inline-block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;

            color: white;
            &:link{
                color: white!important;

            }

            &:hover {
                color:#FFFC00 ;
                background-color: #078DE2;
            }

        }

        &>span{
            /*content: "";*/
            display: inline-block;
            position: absolute;
            bottom: -20px;
            left: 60px;
            width: 0;
            height: 10px;
            border-top:10px solid #078DE2;
            border-left:10px solid transparent;
            border-right:10px solid transparent;
        }
    }
.booklistboxmargin{
    margin-top: 15px;
}
.remainbook{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    &>div {
        flex-basis:16.5%;
        width: 16.5%;
        height: 456px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        background-color: white;

        margin-bottom: 10px;
        padding: 28px 15px 20px;
      & .bookimgbox {
          width: 100%;
            position: relative;
            left: 0px;
            top: 0px;

            & img {
                width: 100%;
            }

            & .miaoshatextbox {
                width: 105px;
                height: 105px;
                background-image: url("../assets/images/miaosha/msth1.png");
                position: absolute;
                top: -30px;
                left: 6px;

                & > img {
                    width: 100%;
                    height: 100%;
                }

                & .miaoshatext {
                    width: 100%;
                    height: 100%;
                    font-size: 18px;
                    font-weight: bold;
                    color: white;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                }

            }
        }
        &>h3{
            padding: 0px;
            width: 100%;
            text-align: left!important;
        }
        & > h3 > a {
            text-decoration: none;
            color: black;
            width: 100%;
            text-align: left!important;
        }

        & >div:nth-of-type(2){
            & > span {
                color: red;
                margin-right: 20px;
                font-size: 20px;

                & > span {
                    font-size: 35px !important;
                    font-weight: bold;
                }
            }

        }
        & >div:nth-of-type(3){
            width: 100%;
            text-align: center;
            & > span {
                /*width: 100px;*/
                height: 35px;
                font-size: 24px;
                color: white;
                /*background-color: #F61336;*/
                border-radius: 5px;
                padding: 5px 10px;
                text-align: center;
                line-height: 35px;

                & > i {
                    margin-right: 15px;
                }
            }
        }

    }
}

</style>