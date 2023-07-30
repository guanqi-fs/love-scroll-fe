<template>
  <movable-area style="height: 100%;">
    <movable-view
      y="0"
      direction="vertical"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :style="{height: listHeight + '%'}"
    >
      <view v-for="(item, index) in listItems" :key="index">{{item}}</view>
    </movable-view>
  </movable-area>
</template>

<script>
export default {
  data() {
    return {
      listHeight: 50, // 初始列表高度，根据你的需求设置
      listItems: ["item 1", "item 2", "item 3", "item 4", "item 5"], // 列表数据
    };
  },
  methods: {
    touchMove(event) {
      let y = event.mp.changedTouches[0].clientY;
      let newHeight = y / window.innerHeight * 100;
      newHeight = Math.max(50, newHeight); // 最小高度，根据你的需求设置
      newHeight = Math.min(75, newHeight); // 最大高度，根据你的需求设置
      this.listHeight = newHeight;
    },
    touchEnd(event) {
      // 添加一个动画，使得列表在用户停止触摸后平滑地回到其初始高度
      this.listHeight = 50;
    },
  },
};
</script>

<style scoped>
  view {
    padding: 10px;
    border: 1px solid #ddd;
  }
</style>
