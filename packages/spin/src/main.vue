<template>
  <div class="x-spin">
    <svg
      t="1699930297933"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="13886"
    ><path
      d="M900.266667 550.4a38.4 38.4 0 0 1-38.4-38.4A350.293333 350.293333 0 0 0 512 162.133333 38.4 38.4 0 0 1 512 85.333333a426.666667 426.666667 0 0 1 426.666667 426.666667 38.4 38.4 0 0 1-38.4 38.4z"
      p-id="13887"
      :fill="color"
    /></svg>
  </div>
</template>
<script>
export default {
  name: 'Spin',
  props: {
    color: {
      type: String,
      default: '#1A5EFF'
    }
  }
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
  width: 25px;
  height: 25px;
  margin: 0 auto;
  .x-icon-spin();
}
</style>
