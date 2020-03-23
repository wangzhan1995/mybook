<template>
    <div style="width: 1210px;margin:auto">
        <!--        分类-->
        <div class="nav-type">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">图书</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/about' }">文学</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">中国现当代随笔</el-breadcrumb-item>
                <el-breadcrumb-item>丰子恺万般滋味,都是生活</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--        书籍信息-->
        <div class="book-msg">
            <!--          书籍图片展示350px-->
            <div class="img-book">
                <div>
                    <div class="img-big" style="width: 350px;height: 350px">
                        <pic-zoom :url="imgurl" style="width: 100%;height: 100%" :scale="3"> </pic-zoom>
                    </div>
                    <div class="img-small">                    
                        <li v-for="(item,index) in imgList" :key="index" @mouseenter='getIndex(index)'>
                            <img :src="item.url" style="width: 68px; height: 68px">            
                        </li>
                                 
                    </div>
                    <div class="book-share">
                        <div class="icon-share">
                            <i class="el-icon-circle-plus"><span>分享</span></i>
                        </div>
                        <div class="icon-collection">
                            <i class="el-icon-star-on" @click="collection"></i><span>收藏(957人气)</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--        书籍名称等 680 -->
            <div class="book-msg-title">
                <!--                书籍名字 推荐介绍-->
                <div class="book-title">
                    <div class="book-title-name">
                                <span>
                                    愿所有相遇，都恰逢其时
                                </span>
                    </div>
                    <div class="book-title-desc">
                                <span>
                                    （随书附赠：精美书签。一切都是*好的安排，结束的，已然结束；相逢的，终将遇见，不早不晚。41篇暖意萦怀的生活感悟，让你不畏将来，不念过去，在忙乱的世界中守住内心的安定和富足）
                                </span>
                    </div>
                </div>
                <!--                书籍价格 作者等-->
                <div>
                    <div class="book-title">
                        <!--                        name--params,query  path--query-->
                        <div class="book-desc-item"><div class="word-space">作者</div>:
                            <router-link :to="{path: 'tj',query:{ aid: 1}}" class="book-desc-item-author">
                                陈北投
                            </router-link>
                            著
                        </div>
                        <div class="book-desc-item"><div class="word-space">出版社</div>:
                            <router-link :to="{path: 'tj',query:{ pid: 1}}" class="book-desc-item-author">人民文学出版社
                            </router-link>
                        </div>
                        <div class="book-desc-item"><div class="word-space">出版时间</div>: 2018年10月4日</div>
                    </div>
<!--                 降价通知   -->
                    <div class="book-desc-item1 book-desc-item-price">
                        <div>折扣价 <span><el-button type="text" @click="dialogVisible = true">降价通知</el-button>
                            <el-dialog
                                    title="当此商品在90天内满足您的期望价格时，您将会收到手机短信通知 (需填写手机号码)"
                                    :visible.sync="dialogVisible"
                                    width="30%"
                                    :before-close="handleClose">
                            <div class="el-dialog-div">当前售价<span class="el-form-item-price">￥139.00</span></div>
                            <div class="el-dialog-div">
                                期望价格<el-input v-model="qiwangprice" auto-complete="off"></el-input>
                            </div>
                            <div class="el-dialog-div">
                                手机号码<el-input v-model="phonenum" auto-complete="off"></el-input>
                            </div>
                          <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false;getDiscountNotice">确 定</el-button>
                          </span>
                        </el-dialog>
                        </span>
                        </div>
                        <div class="book-desc-item-price-discount">￥<span>139.00 <span>(9.79折)</span></span></div>
                        <div>定价<span class="orig-price">￥142.00</span></div>
                    </div>
                    <hr class="book-title-hr">
                </div>
                <!--书籍活动-->
                <div class="book-title activity">
                    <div class="book-desc-item"><div class="word-space">促销</div>:<span class="activity-item">满额减</span></div>
                    <div style="display: flex;flex-direction: column">
                        <div class="activity-item-int">图书单笔满66减5，满100减15！</div>
                        <div class="activity-item-int">图书单笔满66减5，满100减15！</div>
                    </div>
                </div>
                <!--                配送地址-->
                <div class="book-title choose-address-row">
                    <div class="choose-address">
                        <div class="word-space">配送至</div>
                        <div style="position: relative;left: 71px;top: -26px;">:
                        <el-cascader
                                size="small"
                                :options="options"
                                v-model="selectedOptions"
                                @change="addressChange">
                        </el-cascader>
                        </div>
                    </div>
                    <div style="margin-left: 5px;position: relative;left: 75px;">有货</div>
                </div>
                <div class="book-title">
                    <div class="book-desc-item"><div class="word-space">服务</div>:由"xx网"直接销售和发货，并提供售后服务</div>
                </div>
<!--                加入购物车-->
                <div class="cart">
                    <div class="cart-count">
                        <el-input-number v-model="count" controls-position="right" @change="handleChange" :min="1"></el-input-number>
                    </div>
                    <div class="cart-add" @click="addToCart">
                        <el-button  icon="fa fa-cart-plus"> 加入购物车</el-button>
                    </div>
                    <div class="cart-buy" @click="buyNow">
                        <el-button>立即购买</el-button>
                    </div>
                </div>

            </div>
            <!--            180-->
            <div class="right-side">

            </div>
        </div>
    </div>
</template>

<script>
    // import picZoom from "vue-piczoom"
    // import picZoom from '@/components/picZoom'
    import {
        provinceAndCityData,
        regionData,
        provinceAndCityDataPlus,
        regionDataPlus,
        CodeToText,
        TextToCode
    } from 'element-china-area-data'

    export default {
        name: "goodsDetail",
        data() {
            return {
                // imgList: [
                //     {url: require('../assets/img/wxLogin.png')},
                //     {url: require('../assets/img/photo1.png')},
                //     {url: require('../assets/img/wxLogin.png')},
                //     {url: require('../assets/img/wxLogin.png')},
                //     {url: require('../assets/img/wxLogin.png')},
                // ],
                //大图片默认显示第一张
                // imgurl: require('../assets/img/wxLogin.png'),
                options: regionData,
                //存的是地区码  不是汉字
                selectedOptions: [],
                collectionList: [],
                dialogVisible: false,
                qiwangprice: '',
                phonenum: '',
                count:'1'
            }
        },
        components: {
            // picZoom,
            provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode
        },
        methods: {
            //点击小图片时将图片路径赋值给大图
            getIndex(index) {
                // this.imgurl = this.imgList[index].url;
            },
            //地址
            addressChange(arr) {
                console.log(arr);
                console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
                let province=CodeToText[arr[0]],city=CodeToText[arr[1]],area=CodeToText[arr[2]];
                console.log(this.selectedOptions)
                console.log(province)
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            //收藏
            collection() {

            },
            //获取降价通知填写信息
            getDiscountNotice() {

            },
            //加入购物车数量
            handleChange(value) {
                console.log(value);
            },
            //加入购物车
            addToCart(){
                let count=this.count;
                console.log(count)
            },
            //立即购买
            buyNow(index){

            }
        },
        created() {
            //console.log('动态路由传参数：',this.$route.params);
            //   // 通过this.$route获取当前组件的路由信息；如请求地址，请求参数：
            //   //   console.log('route:',this.$route)
            //     console.log('route params:',this.$route.params.tjname) // 张3
            //     console.log('route query:',this.$route.query.tjname) // 张3
            console.log(this)


            this.$axios.get('/api/login', {
                params: {
                    'username': this.username,
                    'password': this.password
                }
            })
            // then()中的回调函数中的this，不是指向VUE组件实例化对象。
                .then((res) => {
                    console.log(this);
                    console.log('axios.get()==res:', res);
                    console.log('axios.get():', res.data);
                    if (res.data.code === 200) {
                        //表示登录成功
                        this.$router.push('/home');
                    } else {
                        alert(res.data.msg)
                    }
                })
        },
        mounted() {
            console.log(this)
            //修改按钮图标
            let increase=document.getElementsByClassName('el-input-number__increase')[0];
            let decrease=document.getElementsByClassName('el-input-number__decrease')[0];
            let i=increase.children[0];
            console.log(i)
            let d=decrease.children[0];
            i.className='el-icon-plus';
            d.className='el-icon-minus';

        }

    }
</script>

<style  lang="less">
    //数量按钮
    .el-input-number{
        width: 80px!important;

    }
    .el-input-number__increase,.el-input-number__decrease{
        width: 20px!important;
    }


    //加入购物车按钮
    .cart{
        display: flex;
        flex-direction: row;
        padding-left: 15px;
        margin-top: 25px;
        align-items: center;
        & > div{
            padding-right: 10px;
        }
        & .cart-add .el-button{
            color: white;
            background-color: #ff2832;
            font-size: 16px;
            padding: 12px 15px;
            &:hover,&:active{
                color: white;
                background-color: #f52630;
            }
        }
        & .cart-buy .el-button{
            color: #ff2832;
            background-color: #ffedee;
            border: 1px solid #ff2832;
            font-size: 16px;
            padding: 12px 15px;
            &:hover,&:active{
                color: #ff2832;
                background-color: rgba(255, 192, 203, 0.69);
            }
        }
    }

//字体两边对齐
.word-space{
    text-align:justify;
    text-justify:distribute-all-lines;/*ie6-8*/
        text-align-last:justify;/* ie9*/
        -moz-text-align-last:justify;/*ff*/
        -webkit-text-align-last:justify;/*chrome 20+*/
        width: 70px;
    }
        /*.word-space:after{*/
        /*    content:".";*/
        /*    display: inline-block;*/
        /*    width:100%;*/
        /*    overflow:hidden;*/
        /*    height:0;*/
        /*}*/

    //降价通知弹框
    .el-dialog-div{
        margin-bottom: 5px;
    }
    .el-form-item-price {
        color: #e52222;
        font-size: 14px;
    }

    .el-dialog__body{
        padding: 10px 20px;
    }
    .el-input {
        position: relative;
        left: 7px;
        width: 70%;
    }
    .el-input__inner{
        width: 70%;
    }

//书籍信息
    .book-msg {
        margin-top: 15px;
        display: flex;
        flex-direction: row;
    }

    .img-book {
        background-color: gray;
        width: 350px;
    }

    .img-small {
        width: 350px;
        height: 70px;
        margin-top: 5px;
        margin-right: 1px;

        & li {
            float: left;
            height: 69px;
            list-style: none;
            padding-left: 1px;

            &:hover {
                border: 1px solid rgba(201, 201, 201, 0.56);
            }
        }

        & li:first-child {
            padding-left: 2px;
        }
    }

    .book-share {
        padding-left: 2px;
        padding-right: 3px;
        margin-top: 5px;

        & .icon-share {
            float: left;
            cursor: pointer;

            & span {
                font-size: 14px;
            }
        }

        & .icon-collection {
            float: right;
            cursor: pointer;

            & span {
                font-size: 14px;
                line-height: 1;
            }

            & i {
                font-size: 19px;
            }

        }
    }

    .book-msg-title {
        background-color: rgba(230, 255, 15, 0.38);
        width: 680px;
    }

    .book-title {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
        line-height: 1.5;
        text-align: left;
    }

    .book-title-name {
        font-weight: bold;
        font-size: 18px;
    }

    .book-title-desc {
        font-size: 16px;
        margin-top: 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(201, 201, 201, 0.56);
    }

    .book-desc-item {
        font-size: 14px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        /*align-items: center;*/

        & .book-desc-item-author {
            text-decoration: none;
            list-style: none;
            color: #1a66b3;
            padding-right: 10px;
        }
    }
    .book-desc-item1 {
        font-size: 14px;
        margin-bottom: 5px;
        & .book-desc-item-author {
            text-decoration: none;
            list-style: none;
            color: #1a66b3;
            padding-right: 10px;
        }
    }

    .book-desc-item-price {
        background-color: #fcfaf7;
        width: 652px;
        margin-left: 10px;
        border-radius: 5px;
        text-align: left;
        padding-left: 5px;
        color: #ababab;

        & span {
            margin-left: 5px;
        }

        & .book-desc-item-price-discount {
            color: #e52222;
            font-size: 14px;
            margin-top: -8px;
            margin-bottom: 5px;

            & > span {
                font-size: 26px;

                & > span {
                    font-size: 16px;
                }
            }
        }

        & .orig-price {
            text-decoration: line-through;
            color: #a2a2a2;
        }
    }

    .book-title-hr {
        width: 650px;
        border-width: 1px 0 0 0;
        border-color: rgba(224, 224, 224, 0.5);
        margin-top: 15px;
    }

    .activity {
        display: flex;
        flex-direction: row;
    }

    .activity-item {
        background-color: #ff6666;
        color: white;
        padding: 5px 5px;
        border-radius: 5px;
        font-size: 13px;
        height: 14px;
        line-height: 14px;
    }

    .activity-item-int {
        margin-left: 5px;
    }
    .choose-address{
        font-size: 14px;
        height: 30px;
    }
    .choose-address-row{
        display: flex;
        flex-direction: row;
        /*align-items: center;*/
    }

    .right-side {
        background-color: #0afff4;
        height: 50px;
        width: 180px;
    }
</style>