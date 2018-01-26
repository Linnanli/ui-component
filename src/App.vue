<template>
  <div id="app">
    <ui-nav title="导航栏">
      <ui-nav-next slot="left" @click.native="setDisab"></ui-nav-next>
      <ui-nav-back slot="right"></ui-nav-back>
    </ui-nav>
    <div class="contain">
      <ui-radio v-model="val" value="2"></ui-radio>吃饭
      <ui-radio v-model="val" value="3" :disabled="disabled" :checked="true"></ui-radio>睡觉
      <ui-radio v-model="val" value="4" ></ui-radio>打豆豆
      <div>
        <button @click="setDisab()">radio disabled</button>
      </div>  
    </div> 
  </div>
</template>
  
<script>
import {UiRadio} from './components/ui-radio'
import {UiNav,UiNavNext,UiNavBack} from './components/ui-nav'

export default {
  name: 'App',
  data:()=>{
    return {
      val:'',
      disabled:false
    }
  },
  methods:{
    setDisab:function(){
      this.disabled = !this.disabled;
    }
  },
  components: {
    UiRadio,
    UiNav,
    UiNavNext,
    UiNavBack
  }
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}
</style>
