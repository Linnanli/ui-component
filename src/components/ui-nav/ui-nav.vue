<template>
  <div class="nav">
      <span class="nav-but" @click="$emit('backoff')">〈</span>
      <span class="nav-title">{{title}}</span>
  </div>
</template>
<script>
export default {
  name:'ui-nav',
  props:{
      title:{
          type:String
      }
  }
}
</script>
<style scoped>
.nav{
    width: 100%;
    height: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: row ;
    position: relative;
}
.nav-but{
    width: 40px;
    line-height: 40px;
    position: absolute;
    cursor: pointer;
}
.nav-title{
    flex-grow: 1;
    line-height: 40px;
}
</style>
