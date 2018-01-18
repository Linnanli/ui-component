<template>
  <div id="app">
    <ui-radio v-model="val" value="1"></ui-radio>吃饭
    <ui-radio v-model="val" value="2" ></ui-radio>睡觉
    <ui-radio v-model="val" value="3" :checked="true"></ui-radio>打豆豆
    <div>{{val}}</div>
  </div>
</template>
  
<script>
import {UiRadio} from './components/ui-radio'
export default {
  name: 'App',
  data:()=>{
    return {
      val:'1'
    }
  },
  components: {
    UiRadio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
