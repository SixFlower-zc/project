<template>
  <div class="backimage"></div>
  <div class="loginBox">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.backimage {
  width: 100%;
  height: 100%;
  background: pink url('/src/assets/images/background.jpg') no-repeat;
  background-size: cover;
  opacity: 0.6;
}

.loginBox {
  width: 400px;
  position: absolute;
  top: calc(50vh - 150px);
  left: calc(50vw - 200px);
  background-color: pink;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  > div {
    width: 100%;
    height: 100%;
    padding: 15px;
  }
}
</style>
