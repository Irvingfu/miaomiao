<template>
  <div id="app">
      <!-- 头部 -->
      <mt-header fixed title="喵喵电影" class="head"></mt-header>
      <!-- router-view -->
    
           <router-view class="change"/>
      
      
      <!-- tarbar -->
      <tarbar/>
  </div>
</template>

<script>
import tarbar from './components/tarbar.vue'

export default {
  name: 'App',
  components:{
    tarbar
  }
}
</script>

<style scoped>
#app{
  padding: 40px 0 50.4px 0;
  overflow-x: hidden;
}
#app .head{
  font-size: 16px;
}

.change{
  transition: all 0.3s ease;
}
</style>


