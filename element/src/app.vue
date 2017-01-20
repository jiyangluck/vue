<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="640px">
      <el-carousel-item v-for="url in imagesUrl">
        <img v-bind:src="url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        imagesUrl:[
          'images/1.jpg',
          'images/2.jpg',
          'images/3.jpg',
          'images/4.jpg',
          'images/5.jpg'
        ]
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>