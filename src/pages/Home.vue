<template>
    <div class="container">
        <!-- 轮播图 -->
        <slide :imgurl="slides"></slide>
        <!-- 更多 -->
        <div class="middle">
            <div class="inform">
                <span class="iconfont icon-gonggao"></span>
                <span>推荐</span>
            </div>
            <div class="more">
                <span>更多</span>
                 <span class="more   iconfont icon-xiangyou"></span>
            </div>
        </div>

        <!-- 电影列表 -->
        <movielist :showmovie="movielist"/>
    </div> 
</template>

<script>
// 引入axios
import axios from 'axios'
// 引入轮播图
import slide from '../components/home/slide.vue'
// 引入电影列表
import movielist from '../components/home/movielist.vue'
// 引入字体图标
import '../public/iconfont/iconfont.css'
export default {
    name:'Home',
    data(){
       return {
		 slides:[
             {id:1, url: require('../public/img/2.1.jpg')},
             {id:2, url: require('../public/img/2.2.jpg')},
             {id:3, url: require('../public/img/2.3.jpg')}   
         ] ,
         movielist:[
             {
                id:1,
                title:"大话西游之大圣娶亲",
                act:"主演：周星驰 朱茵 吴孟达 罗家英 ",
                img_url: require("../../src/public/img/dashengquqi.jpg")
            },
            {
                id:2,
                title:"大话西游之月光宝盒",
                act:"周星驰 朱茵 吴孟达 莫文蔚 蓝洁瑛 罗家英  ",
                img_url:require("../../src/public/img/yueguan.jpg")
            },
            {
                id:3,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            },
             {
                id:4,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            },
             {
                id:5,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            },
             {
                id:6,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            },
             {
                id:7,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            },
             {
                id:8,
                title:"人再囧途之泰囧",
                act:"主演：徐峥 王宝强 黄渤 ",
                img_url:require("../../src/public/img/jiongtu.jpg")
            }



         ]
	   }
   },
   components:{
       slide,
       movielist
   }
}
</script>

<style scoped>
.container{
    overflow-x: hidden;
}
.mint-swipe{
    width: 100%;
    height: 200px;
}
.mint-swipe img{
    height: 100%;
}
.middle{
    height: 30px;
    display: flex;
    background: rgb(163, 159, 159);
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
</style>