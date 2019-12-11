<template>
      <div class="container">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in imgurl" :key="item.id">
                <img :src="item.url" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
      </div>
</template>

<script>
export default {
    name:'slide',
    props:['imgurl'],

}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
img{
    height: 100%;
}
</style>