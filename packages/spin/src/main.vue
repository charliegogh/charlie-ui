<template>
  <div class="x-spin">
    <i class="iconfont icon-Loading" />
  </div>
</template>
<script>
export default {
  name: 'Spin'
}
</script>
<style lang="less" scoped>
.x-icon-spin(){
    animation: loadingCircle 1s linear infinite;
}
@keyframes loadingCircle {
    to {
        transform: rotate(1turn)
    }
}
.x-spin{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  .iconfont{
    display: inline-block;
    font-size: 20px;
    .x-icon-spin();
    color: #1a5eff;
  }
}
</style>
