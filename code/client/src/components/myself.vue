<template>
  <div class="myself-container">
    <div class="header-bg">
      <img class="img-avatar" src="../images/avatar.jpg" />
      <img class="img-bg" src="../images/bg4.jpg" />
    </div>
    <div class="my-body">
      <div class="my-name">WXY</div>
    </div>
  </div>
</template>

<script> 
export default {
  name: "myself",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  watch: {},
  created() { },
  mounted() { },
  beforeDestroy() { },
  methods: {},
};
</script>

<style lang="less" scoped>
.myself-container {
  background-color: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 6px 6px 8px @shadowColor;
  .header-bg {
    height: 150px;
    border-radius: 4px;
    position: relative;
    .img-avatar {
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -50px;
      left: calc(~'50% - 50px');
      border-radius: 50%;
      z-index: 99;
      &:hover {
        animation: btnGroups 1s linear;
      }
    }
    .img-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .my-body {
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .my-name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
