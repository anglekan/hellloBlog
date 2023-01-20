<template>
  <div class="copyright-wrapper">
    <span>
      Copyright 2300250602@qq.com All rights reserved.<br />
    </span>
  </div>
</template>

<style lang="less" scoped>
.copyright-wrapper {
  height: 60px;
  background-color: @mainColor;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    line-height: 22px;
    font-size: 14px;
    a {
      color: @thinHighlightColor;
      text-decoration: underline;
    }
  }
}
</style>