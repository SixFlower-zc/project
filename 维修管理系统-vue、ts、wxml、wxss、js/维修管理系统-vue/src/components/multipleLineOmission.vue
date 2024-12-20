<template>
  <div :title="title" :class="{ one: !flag, many: flag }" :style="{ width: width + 'px' }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    required: true,
  },
  flag: {
    type: Boolean,
  },
  title: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
@mixin danHangSl($width: 0, $line-height: 0) {
  // 需要设置宽度
  width: $width;
  // 设置行高
  line-height: $line-height;
  // 强制不换行
  white-space: nowrap;
  // 溢出隐藏
  overflow: hidden;
  // 加省略号
  text-overflow: ellipsis;
}
@mixin duoHangSL($width: 0, $hangShu: 1) {
  // 设置宽度，不能设置高度，否则会失效
  width: $width;
  // 溢出隐藏
  overflow: hidden;
  // 将元素设置为WebKit内核的弹性盒子模型
  display: -webkit-box;
  // 限制显示的文本行数,设置标准属性实现兼容性
  line-clamp: $hangShu;
  // 限制显示的文本行数
  -webkit-line-clamp: $hangShu;
  // 设置弹性盒子的排列方向为垂直
  -webkit-box-orient: vertical;
}
.one {
  @include danHangSl(100px, 22px);
}
.many {
  @include duoHangSL(100px, 2);
}
</style>
