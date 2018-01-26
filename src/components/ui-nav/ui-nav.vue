<template>
  <div class="ui-nav">
      <div class="ui-nav-item">
          <slot name="left"></slot>
      </div>
      <div class="ui-nav-center">
          <slot name="center">
              <div class="ui-nav-title">{{title}}</div>
          </slot>
      </div>
      <div class="ui-nav-item">
          <slot name="right"></slot>
      </div>
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
.ui-nav{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
}
.ui-nav-item{
    width: 25%;
    display: flex;
    align-items: center;
}
.ui-nav-item:last-child{
    justify-content: flex-end;
}
.ui-nav-center{
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
